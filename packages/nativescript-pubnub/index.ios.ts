import { PubNubApi, PNConfiguration, PNEventListener } from './common';

@NativeClass
export class PNObjectEventListenerImpl extends NSObject {
	public static ObjCProtocols = [iosPubNub.PNObjectEventListener];
	private listener: PNEventListener;

	static init(listener: PNEventListener): PNObjectEventListenerImpl {
		let pnObjEventListener = <PNObjectEventListenerImpl>PNObjectEventListenerImpl.new();
		pnObjEventListener.listener = listener;
		return pnObjEventListener;
	}

	public clientDidReceiveMessage(client, event) {
		if (this.listener.message) this.listener.message(event);
	}

	public clientDidReceivePresenceEvent(client, event) {
		if (this.listener.presence) this.listener.presence(event);
	}

	public clientDidReceiveStatus(client, event) {
		if (this.listener.status) this.listener.status(event);
	}
}

export class PubNub implements PubNubApi {
	private _config: iosPubNub.PNConfiguration;
	private _client: iosPubNub.PubNub;

	constructor(config: PNConfiguration) {
		this._config = iosPubNub.PNConfiguration.configurationWithPublishKeySubscribeKey(config.publishKey, config.subscribeKey);

		for (let key of Object.keys(config)) {
			this._config[key] = config[key];
		}

		this._client = iosPubNub.PubNub.clientWithConfiguration(this._config);
	}
	addEventListener(listener: PNEventListener): void {
		this._client.addListener(PNObjectEventListenerImpl.init(listener));
	}
	subscribe(channels: string[], withPresence: boolean): void {
		throw new Error('Method not implemented.');
	}
	subscribeToChannelGroups(groups: string[], shouldObservePresence: boolean): void {
		throw new Error('Method not implemented.');
	}
	unsubscribe(channels: string[]): void {
		throw new Error('Method not implemented.');
	}
	unsubscribeFromAll(): void {
		throw new Error('Method not implemented.');
	}
	unsubscribeFromChannelGroups(groups: string[]): void {
		throw new Error('Method not implemented.');
	}
	publish(channel: any, msgObj: any, callback: any): void {
		throw new Error('Method not implemented.');
	}
}
