import { PubNubNSApi, PNConfiguration as PNConfigurationNS, PNEventListener as PNEventListenerNS, PNStatus as PNStatusNS } from './common';

function isJsonString(str: string) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

function isJsonObj(obj: Object) {
	try {
		JSON.stringify(obj);
	} catch (e) {
		return false;
	}
	return true;
}

function transformToJSON(obj) {
	let jsonObj;
	try {
		jsonObj = JSON.parse(
			obj
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
			error: 'An error occoured while converting to JSON',
			data: obj.toString(),
		};
	}
	return jsonObj;
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
		if (this.listener.file) this.listener.file(transformToJSON(event.data));
	}

	clientDidReceiveMessage(client: PubNub, event: PNMessageResult): void {
		if (this.listener.message) this.listener.message(transformToJSON(event.data));
	}

	clientDidReceiveMessageAction(client: PubNub, event: PNMessageActionResult): void {
		if (this.listener.messageAction) this.listener.messageAction(transformToJSON(event.data));
	}

	clientDidReceiveObjectEvent(client: PubNub, event: PNObjectEventResult): void {}

	clientDidReceivePresenceEvent(client: PubNub, event: PNPresenceEventResult): void {
		if (this.listener.presence) this.listener.presence(transformToJSON(event.data));
	}

	clientDidReceiveSignal(client: PubNub, event: PNSignalResult): void {
		if (this.listener.signal) this.listener.signal(transformToJSON(event.data));
	}

	clientDidReceiveStatus(client: PubNub, event: any): void {
		if (this.listener.status) this.listener.status(transformToJSON(event.data));
	}
}

export class PubNubNS implements PubNubNSApi {
	private _config: PNConfiguration;
	private _client: PubNub;

	constructor(config: PNConfigurationNS) {
		this._config = PNConfiguration.configurationWithPublishKeySubscribeKey(config.publishKey, config.subscribeKey);

		for (let key of Object.keys(config)) {
			this._config[key] = config[key];
		}
		this._client = PubNub.clientWithConfiguration(this._config);
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
			responseListener(transformToJSON(status.data));
		});
	}
	destroy() {}
}
