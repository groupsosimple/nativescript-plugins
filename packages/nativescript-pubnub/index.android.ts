import { PubNubApi, PNConfiguration, PNEventListener, PNStatus } from './common';

function convertPNStatusToJson(pubnub: com.pubnub.api.PubNub, status: com.pubnub.api.models.consumer.PNStatus) {
	return JSON.parse(
		pubnub.getMapper().toJson(
			status
				.toBuilder()
				// Error data Throwable is not serializable
				.errorData(new com.pubnub.api.models.consumer.PNErrorData(status.getErrorData() ? status.getErrorData().getInformation() : null, null))
				.build()
		)
	);
}

@NativeClass
class SubscribeCallbackImpl extends com.pubnub.api.callbacks.SubscribeCallback {
	constructor(private eventListener: PNEventListener) {
		super();
		return global.__native(this);
	}
	presence(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult): void {
		if (this.eventListener.presence) this.eventListener.presence(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	message(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.pubsub.PNMessageResult): void {
		if (this.eventListener.message) this.eventListener.message(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	status(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.PNStatus): void {
		if (this.eventListener.status) this.eventListener.status(convertPNStatusToJson(pubnub, event));
	}
	signal(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.pubsub.PNSignalResult): void {
		if (this.eventListener.signal) this.eventListener.signal(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	uuid(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadataResult): void {
		if (this.eventListener.uuid) this.eventListener.uuid(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	messageAction(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult): void {
		if (this.eventListener.messageAction) this.eventListener.messageAction(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	membership(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.objects_api.membership.PNMembershipResult): void {
		if (this.eventListener.membership) this.eventListener.membership(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	channel(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadataResult): void {
		if (this.eventListener.channel) this.eventListener.channel(JSON.parse(pubnub.getMapper().toJson(event)));
	}
	file(pubnub: com.pubnub.api.PubNub, event: com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult): void {
		if (this.eventListener.file) this.eventListener.file(JSON.parse(pubnub.getMapper().toJson(event)));
	}
}

export class PubNub implements PubNubApi {
	_config: com.pubnub.api.PNConfiguration;
	_client: com.pubnub.api.PubNub;

	constructor(config: PNConfiguration) {
		// initialize the native config class
		this.initializeConfiguration(config);

		// create the native client
		this._client = new com.pubnub.api.PubNub(this._config);
	}

	subscribe(channels: string[], withPresence: boolean) {
		let subsBuilder_ = this._client?.subscribe().channels(java.util.Arrays.asList(channels));
		subsBuilder_ = withPresence ? subsBuilder_?.withPresence() : subsBuilder_;
		subsBuilder_?.execute();
	}

	addEventListener(eventListener: PNEventListener) {
		this._client?.addListener(new SubscribeCallbackImpl(eventListener));
	}

	publish(channel: string, message: Object, responseListener: (rstatus: PNStatus) => void) {
		let pubnub = this._client;
		this._client
			?.publish()
			.message(pubnub.getMapper().fromJson(JSON.stringify(message), java.lang.Object.class))
			.channel(channel)
			.async(
				new com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.consumer.PNPublishResult>({
					onResponse: function (result: com.pubnub.api.models.consumer.PNPublishResult, status: com.pubnub.api.models.consumer.PNStatus) {
						responseListener(convertPNStatusToJson(pubnub, status));
					},
				})
			);
	}
	subscribeToChannelGroups(groups: string[], withPresence: boolean) {
		let subsBuilder_ = this._client?.subscribe().channelGroups(java.util.Arrays.asList(groups));
		subsBuilder_ = withPresence ? subsBuilder_?.withPresence() : subsBuilder_;
		subsBuilder_?.execute();
	}
	unsubscribe(channels: string[]) {
		this._client?.unsubscribe().channels(java.util.Arrays.asList(channels)).execute();
	}
	unsubscribeFromAll() {
		this._client?.unsubscribeAll();
	}
	unsubscribeFromChannelGroups(groups: string[]) {
		this._client?.unsubscribe().channelGroups(java.util.Arrays.asList(groups)).execute();
	}

	initializeConfiguration(config: PNConfiguration) {
		this._config = new com.pubnub.api.PNConfiguration();

		if (config.uuid) this._config.setUuid(config.uuid);
		if (config.origin) this._config.setOrigin(config.origin);
		if (config.secure) this._config.setSecure(config.secure);
		if (config.authKey) this._config.setAuthKey(config.authKey);
		if (config.secretKey) this._config.setSecretKey(config.secretKey);
		if (config.cipherKey) this._config.setCipherKey(config.cipherKey);
		if (config.publishKey) this._config.setPublishKey(config.publishKey);
		if (config.subscribeKey) this._config.setSubscribeKey(config.subscribeKey);
		if (config.connectTimeout) this._config.setConnectTimeout(config.connectTimeout);
		if (config.presenceTimeout) this._config.setPresenceTimeout(config.presenceTimeout);
		if (config.filterExpression) this._config.setFilterExpression(config.filterExpression);
		if (config.dedupOnSubscribe) this._config.setDedupOnSubscribe(config.dedupOnSubscribe);
		if (config.subscribeMaximumIdleTime) this._config.setSubscribeTimeout(config.subscribeMaximumIdleTime);
		if (config.logVerbosity) this._config.setLogVerbosity(com.pubnub.api.enums.PNLogVerbosity.valueOf(config.logVerbosity));
		if (config.suppressLeaveEvents) this._config.setSuppressLeaveEvents(config.suppressLeaveEvents);
		if (config.startSubscriberThread) this._config.setStartSubscriberThread(config.startSubscriberThread);
		if (config.includeRequestIdentifier) this._config.setIncludeRequestIdentifier(config.includeRequestIdentifier);
		if (config.googleAppEngineNetworking) this._config.setGoogleAppEngineNetworking(config.googleAppEngineNetworking);
		if (config.includeInstanceIdentifier) this._config.setIncludeInstanceIdentifier(config.includeInstanceIdentifier);
		if (config.nonSubscribeRequestTimeout) this._config.setNonSubscribeRequestTimeout(config.nonSubscribeRequestTimeout);
		if (config.maximumReconnectionRetries) this._config.setMaximumReconnectionRetries(config.maximumReconnectionRetries);
		if (config.maximumConnections) this._config.setMaximumConnections(new java.lang.Integer(config.maximumConnections));
		if (config.maximumMessagesCacheSize) this._config.setMaximumMessagesCacheSize(new java.lang.Integer(config.maximumMessagesCacheSize));
		if (config.requestMessageCountThreshold) this._config.setRequestMessageCountThreshold(new java.lang.Integer(config.requestMessageCountThreshold));
		if (config.reconnectionPolicy) this._config.setReconnectionPolicy(com.pubnub.api.enums.PNReconnectionPolicy.valueOf(config.reconnectionPolicy));
		if (config.useRandomInitializationVector) this._config.setUseRandomInitializationVector(config.useRandomInitializationVector);
		if (config.presenceTimeoutWithCustomInterval) this._config.setPresenceTimeoutWithCustomInterval(config.presenceTimeoutWithCustomInterval.first, config.presenceTimeoutWithCustomInterval.second);
		// TODO: Create JS classes of native java classes
		//if (config.) this._config.setHeartbeatNotificationOptions(config.);
		//if (config.) this._config.setHostnameVerifier(config.);
		//if (config.) this._config.setProxyAuthenticator(config.);
		//if (config.) this._config.setConnectionSpec(config.);
		//if (config.) this._config.setProxy(config.);
		//if (config.) this._config.setX509ExtendedTrustManager(config.);
		//if (config.) this._config.setProxySelector(config.);
		//if (config.) this._config.setCertificatePinner(config.);
		//if (config.) this._config.setSslSocketFactory(config.);
		//if (config.) this._config.setHttpLoggingInterceptor(config.);
	}

	destroy(): void {
		this._client?.forceDestroy();
	}
}
