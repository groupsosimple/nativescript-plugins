// Rename the interfaces to not match with the Objective C PubNub SDK
import { PubNubApi, PNConfiguration as PNConfigurationNS, PNEventListener as PNEventListenerNS, PNStatus as PNStatusNS } from './common';

function nsDataToJson(object) {
	let jsonObj;
	try {
		jsonObj = JSON.parse(
			object
				.toString()
				.replace(/["']/g, '')
				.replace(/([^\s].*) = ([^;{}]*)[;]/gi, '"$1": "$2",')
				.replace(/([^\s].*) =\s+{/gi, '"$1": {')
				.replace('};', '}')
				.replace('}', '},')
				.replace(/\,(?!\s*?[\{\[\"\'\w])/gi, '')
				.replace(/\"(-?\d+(\.\d+)?)\"/g, '$1')
		);
	} catch (e) {
		jsonObj = {
			error: 'An error occurred while converting to JSON',
			data: object.toString(),
		};
	}
	return jsonObj;
}

function nsObjectTojson(object) {
	let jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(object, NSJSONWritingOptions.PrettyPrinted);
	let jsonString = NSString.alloc().initWithDataEncoding(jsonData, NSUTF8StringEncoding);
	return JSON.parse(<any>jsonString);
}

function pnStatusToJson(status: PNStatus) {
	let json = <PNStatusNS>{
		category: status.stringifiedCategory(),
		statusCode: status.statusCode,
		uuid: status.uuid,
		isError: status.error,
		errorData: null,
		affectedChannelGroups: [],
		affectedChannels: [],
		origin: status.origin,
		authKey: status.authKey,
		operation: status.stringifiedOperation(),
		isTlsEnabled: status.TLSEnabled,
	};
	switch (status.class()) {
		case PNSubscribeStatus:
			const sub = <PNSubscribeStatus>status;
			json = {
				...json,
				errorData: sub.errorData ? sub.errorData.information : null,
				affectedChannelGroups: nsObjectTojson(sub.subscribedChannelGroups),
				affectedChannels: nsObjectTojson(sub.subscribedChannels),
			};
			break;
		case PNPublishStatus:
			const pub = <PNPublishStatus>status;
			json = {
				...json,
				errorData: pub.errorData ? pub.errorData.information : null,
			};
			break;
		default:
	}
	return json;
}

@NativeClass
export class PNObjectEventListenerImpl extends NSObject implements PNEventsListener {
	public static ObjCProtocols = [PNEventsListener];
	private listener: PNEventListenerNS;

	static init(listener: PNEventListenerNS): PNObjectEventListenerImpl {
		let pnObjEventListener = <PNObjectEventListenerImpl>PNObjectEventListenerImpl.new();
		pnObjEventListener.listener = listener;
		return pnObjEventListener;
	}

	clientDidReceiveFileEvent(client: PubNub, event: PNFileEventResult): void {
		if (this.listener.file) this.listener.file(nsDataToJson(event.data));
	}

	clientDidReceiveMessage(client: PubNub, event: PNMessageResult): void {
		if (this.listener.message)
			this.listener.message({
				...nsDataToJson(event.data),
				publisher: event.data.publisher,
				subscribedChannel: event.data.subscription,
			});
	}

	clientDidReceiveMessageAction(client: PubNub, event: PNMessageActionResult): void {
		if (this.listener.messageAction) this.listener.messageAction(nsDataToJson(event.data));
	}

	clientDidReceiveObjectEvent(client: PubNub, event: PNObjectEventResult): void {}

	clientDidReceivePresenceEvent(client: PubNub, event: PNPresenceEventResult): void {
		if (this.listener.presence) this.listener.presence(nsDataToJson(event.data));
	}

	clientDidReceiveSignal(client: PubNub, event: PNSignalResult): void {
		if (this.listener.signal) this.listener.signal(nsDataToJson(event.data));
	}

	clientDidReceiveStatus(client: PubNub, event: any): void {
		if (this.listener.status) this.listener.status(pnStatusToJson(event));
	}
}

export class PubNubNS implements PubNubApi {
	private _config: PNConfiguration;
	private _client: PubNub;

	constructor(config?: PNConfigurationNS) {
		if (config) this.configuration(config);
	}

	configuration(config: PNConfigurationNS) {
		this.destroy();
		this._config = PNConfiguration.configurationWithPublishKeySubscribeKey(config.publishKey, config.subscribeKey);

		for (let key of Object.keys(config)) {
			this._config[key] = config[key];
		}
		this._client = PubNub.clientWithConfiguration(this._config);
		return this;
	}

	addEventListener(listener: PNEventListenerNS): void {
		this._client?.addListener(PNObjectEventListenerImpl.init(listener));
	}
	subscribe(channels: string[], withPresence: boolean): void {
		this._client?.subscribeToChannelsWithPresence(channels, withPresence);
	}
	subscribeToChannelGroups(groups: string[], shouldObservePresence: boolean): void {
		this._client?.subscribeToChannelGroupsWithPresence(groups, shouldObservePresence);
	}
	unsubscribe(channels: string[]): void {
		this._client?.unsubscribeFromChannelsWithPresence(channels, true);
	}
	unsubscribeFromAll(): void {
		this._client?.unsubscribeFromAll();
	}
	unsubscribeFromChannelGroups(groups: string[]): void {
		this._client?.unsubscribeFromChannelGroupsWithPresence(groups, true);
	}
	publish(channel: string, message: Object, responseListener: (status: PNStatusNS) => void): void {
		this._client?.publishToChannelWithCompletion(message, channel, (status) => {
			responseListener(pnStatusToJson(status));
		});
	}
	destroy() {
		this._client?.unsubscribeFromAll();
	}
}
