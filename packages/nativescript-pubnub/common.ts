export interface PNConfiguration {
	// Android and iOS Atributes
	fileMessagePublishRetryLimit?: number;
	suppressLeaveEvents?: boolean;
	cipherKey?: string;
	authKey?: string;
	subscribeKey?: string;
	startSubscriberThread?: boolean;
	nonSubscribeRequestTimeout?: number;
	publishKey?: string;
	useRandomInitializationVector?: boolean;
	includeInstanceIdentifier?: boolean;
	origin?: string;
	secure?: boolean;
	uuid?: string;
	requestMessageCountThreshold?: number;
	maximumMessagesCacheSize?: number;
	subscribeMaximumIdleTime?: number;

	/** Android only atribute */
	googleAppEngineNetworking?: boolean;
	/** Android only atribute */
	dedupOnSubscribe?: boolean;
	/** Android only atribute */
	maximumReconnectionRetries?: number;
	/** Android only atribute */
	filterExpression?: string;
	/** Android only atribute */
	maximumConnections?: number;
	/** Android only atribute */
	logVerbosity?: PNLogVerbosity;
	/** Android only atribute */
	reconnectionPolicy?: PNReconnectionPolicy;
	/** Android only atribute */
	secretKey?: string;
	/** Android only atribute */
	presenceTimeout?: number;
	/** Android only atribute */
	presenceTimeoutWithCustomInterval?: {
		first: number;
		second: number;
	};
	/** Android only atribute */
	includeRequestIdentifier?: boolean;
	/** Android only atribute */
	connectTimeout?: number;

	// TODO: Create JS classes of native java classes
	// hostnameVerifier?: javax.net.ssl.HostnameVerifier
	// proxyAuthenticator?: okhttp3.Authenticator
	// connectionSpec?: okhttp3.ConnectionSpec
	// x509ExtendedTrustManager?: javax.net.ssl.X509ExtendedTrustManager
	// heartbeatNotificationOptions?: com.pubnub.api.enums.PNHeartbeatNotificationOptions
	// sslSocketFactory?: javax.net.ssl.SSLSocketFactory
	// certificatePinner?: okhttp3.CertificatePinner
	// httpLoggingInterceptor?: okhttp3.logging.HttpLoggingInterceptor
	// proxySelector?: java.net.ProxySelector
	// proxy?: java.net.Proxy

	/** iOS only atribute */
	TLSEnabled?: boolean;
	/** iOS only atribute */
	applicationExtensionSharedGroupIdentifier?: string;
	/** iOS only atribute */
	catchUpOnSubscriptionRestore?: boolean;
	/** iOS only atribute */
	completeRequestsBeforeSuspension?: boolean;
	/** iOS only atribute */
	keepTimeTokenOnListChange?: boolean;
	/** iOS only atribute */
	managePresenceListManually?: boolean;
	/** iOS only atribute */
	presenceHeartbeatInterval?: number;
	/** iOS only atribute */
	presenceHeartbeatValue?: number;
	/** iOS only atribute */
	restoreSubscription?: boolean;
	/** iOS only atribute */
	stripMobilePayload?: boolean;
	/** iOS only atribute */
	// TODO: Add iOS natives classes
	//heartbeatNotificationOptions: PNHeartbeatNotificationOptions,
}

export enum PNLogVerbosity {
	NONE = 'NONE',
	BODY = 'BODY',
}

export enum PNReconnectionPolicy {
	NONE = 'NONE',
	LINEAR = 'LINEAR',
	EXPONENTIAL = 'EXPONENTIAL',
}

export interface PNStatus {
	category: string;
	statusCode: number;
	uuid: string;
	isError: boolean;
	errorData: string;
	affectedChannelGroups: Array<string>;
	affectedChannels: Array<string>;
	origin: string;
	authKey: string;
	operation: string;
	isTlsEnabled: boolean;
}

export interface PNMessage {
	channel: string;
	message: Object;
	publisher: string;
	subscribedChannel: string;
	timetoken: number;
}

export interface PNPresence {
	subscription: string;
	leave: Array<string>;
	occupancy: number;
	timestamp: number;
	event: string;
	join: Array<string>;
	timeout: Array<string>;
	userMetadata: Object;
	hereNowRefresh: boolean;
	state: Object;
	channel: string;
	uuid: string;
	timetoken: number;
}

export interface PNEventListener {
	status?(event: PNStatus): void;
	message?(event: PNMessage): void;
	presence?(event: PNPresence): void;
	signal?(event): void;
	messageAction?(event): void;
	file?(event): void;
	/** Android only */
	uuid?(event): void;
	/** Android only */
	membership?(event): void;
	/** Android only */
	channel?(event): void;
}

export interface PubNubApi {
	configuration(config: PNConfiguration): PubNubApi;
	subscribe(channels: string[], withPresence: boolean): void;
	subscribeToChannelGroups(groups: string[], withPresence: boolean): void;
	unsubscribe(channels: string[]): void;
	unsubscribeFromAll(): void;
	unsubscribeFromChannelGroups(groups: string[]): void;
	publish(channel: string, message: Object, responseListener: (status: PNStatus) => void): void;
	addEventListener(event: PNEventListener): void;
	destroy(): void;
}
