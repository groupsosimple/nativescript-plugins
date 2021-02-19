namespace iosPubNub {
	declare class PNAES extends NSObject {
		static alloc(): PNAES; // inherited from NSObject

		static decryptWithKey(object: string, key: string): NSData;

		static decryptWithKeyAndError(object: string, key: string): NSData;

		static encryptWithKey(data: NSData, key: string): string;

		static encryptWithKeyAndError(data: NSData, key: string): string;

		static new(): PNAES; // inherited from NSObject
	}

	declare class PNAPICallBuilder extends NSObject {
		static alloc(): PNAPICallBuilder; // inherited from NSObject

		static new(): PNAPICallBuilder; // inherited from NSObject
	}

	declare class PNAPNSAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNAPNSAPICallBuilder; // inherited from NSObject

		static new(): PNAPNSAPICallBuilder; // inherited from NSObject

		readonly audit: () => PNAPNSAuditAPICallBuilder;

		readonly disable: () => PNAPNSModificationAPICallBuilder;

		readonly enable: () => PNAPNSModificationAPICallBuilder;
	}

	declare class PNAPNSAuditAPICallBuilder extends PNAPNSAPICallBuilder {
		static alloc(): PNAPNSAuditAPICallBuilder; // inherited from NSObject

		static new(): PNAPNSAuditAPICallBuilder; // inherited from NSObject

		readonly performWithCompletion: (p1: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void) => void;

		readonly token: (p1: NSData) => PNAPNSAuditAPICallBuilder;
	}

	declare class PNAPNSEnabledChannelsData extends PNServiceData {
		static alloc(): PNAPNSEnabledChannelsData; // inherited from NSObject

		static new(): PNAPNSEnabledChannelsData; // inherited from NSObject

		readonly channels: NSArray<string>;
	}

	declare class PNAPNSEnabledChannelsResult extends PNResult {
		static alloc(): PNAPNSEnabledChannelsResult; // inherited from NSObject

		static new(): PNAPNSEnabledChannelsResult; // inherited from NSObject

		readonly data: PNAPNSEnabledChannelsData;
	}

	declare class PNAPNSModificationAPICallBuilder extends PNAPNSAPICallBuilder {
		static alloc(): PNAPNSModificationAPICallBuilder; // inherited from NSObject

		static new(): PNAPNSModificationAPICallBuilder; // inherited from NSObject

		readonly channels: (p1: NSArray<string>) => PNAPNSModificationAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

		readonly token: (p1: NSData) => PNAPNSModificationAPICallBuilder;
	}

	declare class PNAcknowledgmentStatus extends PNErrorStatus {
		static alloc(): PNAcknowledgmentStatus; // inherited from NSObject

		static new(): PNAcknowledgmentStatus; // inherited from NSObject
	}

	declare class PNChannelClientStateData extends PNServiceData {
		static alloc(): PNChannelClientStateData; // inherited from NSObject

		static new(): PNChannelClientStateData; // inherited from NSObject

		readonly state: NSDictionary<string, any>;
	}

	declare class PNChannelClientStateResult extends PNResult {
		static alloc(): PNChannelClientStateResult; // inherited from NSObject

		static new(): PNChannelClientStateResult; // inherited from NSObject

		readonly data: PNChannelClientStateData;
	}

	declare class PNChannelGroupChannelsData extends PNServiceData {
		static alloc(): PNChannelGroupChannelsData; // inherited from NSObject

		static new(): PNChannelGroupChannelsData; // inherited from NSObject

		readonly channels: NSArray<string>;
	}

	declare class PNChannelGroupChannelsResult extends PNResult {
		static alloc(): PNChannelGroupChannelsResult; // inherited from NSObject

		static new(): PNChannelGroupChannelsResult; // inherited from NSObject

		readonly data: PNChannelGroupChannelsData;
	}

	declare class PNChannelGroupClientStateData extends PNServiceData {
		static alloc(): PNChannelGroupClientStateData; // inherited from NSObject

		static new(): PNChannelGroupClientStateData; // inherited from NSObject

		readonly channels: NSDictionary<string, NSDictionary<any, any>>;
	}

	declare class PNChannelGroupClientStateResult extends PNResult {
		static alloc(): PNChannelGroupClientStateResult; // inherited from NSObject

		static new(): PNChannelGroupClientStateResult; // inherited from NSObject

		readonly data: PNChannelGroupClientStateData;
	}

	declare class PNChannelGroupsData extends PNServiceData {
		static alloc(): PNChannelGroupsData; // inherited from NSObject

		static new(): PNChannelGroupsData; // inherited from NSObject

		readonly groups: NSArray<string>;
	}

	declare class PNChannelGroupsResult extends PNResult {
		static alloc(): PNChannelGroupsResult; // inherited from NSObject

		static new(): PNChannelGroupsResult; // inherited from NSObject

		readonly data: PNChannelGroupsData;
	}

	declare class PNClientInformation extends NSObject {
		static alloc(): PNClientInformation; // inherited from NSObject

		static new(): PNClientInformation; // inherited from NSObject

		readonly commit: string;

		readonly version: string;
	}

	declare class PNClientStateUpdateData extends PNChannelClientStateData {
		static alloc(): PNClientStateUpdateData; // inherited from NSObject

		static new(): PNClientStateUpdateData; // inherited from NSObject
	}

	declare class PNClientStateUpdateStatus extends PNErrorStatus {
		static alloc(): PNClientStateUpdateStatus; // inherited from NSObject

		static new(): PNClientStateUpdateStatus; // inherited from NSObject

		readonly data: PNClientStateUpdateData;
	}

	declare class PNConfiguration extends NSObject {
		static alloc(): PNConfiguration; // inherited from NSObject

		static configurationWithPublishKeySubscribeKey(publishKey: string, subscribeKey: string): PNConfiguration;

		static new(): PNConfiguration; // inherited from NSObject

		TLSEnabled: boolean;

		applicationExtensionSharedGroupIdentifier: string;

		authKey: string;

		catchUpOnSubscriptionRestore: boolean;

		cipherKey: string;

		completeRequestsBeforeSuspension: boolean;

		readonly deviceID: string;

		heartbeatNotificationOptions: PNHeartbeatNotificationOptions;

		keepTimeTokenOnListChange: boolean;

		managePresenceListManually: boolean;

		maximumMessagesCacheSize: number;

		nonSubscribeRequestTimeout: number;

		origin: string;

		presenceHeartbeatInterval: number;

		presenceHeartbeatValue: number;

		publishKey: string;

		requestMessageCountThreshold: number;

		restoreSubscription: boolean;

		stripMobilePayload: boolean;

		subscribeKey: string;

		subscribeMaximumIdleTime: number;

		suppressLeaveEvents: boolean;

		uuid: string;
	}

	declare class PNDeleteMessageAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNDeleteMessageAPICallBuilder; // inherited from NSObject

		static new(): PNDeleteMessageAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNDeleteMessageAPICallBuilder;

		readonly end: (p1: number) => PNDeleteMessageAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

		readonly start: (p1: number) => PNDeleteMessageAPICallBuilder;
	}

	declare class PNErrorData extends PNServiceData {
		static alloc(): PNErrorData; // inherited from NSObject

		static new(): PNErrorData; // inherited from NSObject

		readonly channelGroups: NSArray<string>;

		readonly channels: NSArray<string>;

		readonly data: any;

		readonly information: string;
	}

	declare class PNErrorStatus extends PNStatus {
		static alloc(): PNErrorStatus; // inherited from NSObject

		static new(): PNErrorStatus; // inherited from NSObject

		readonly associatedObject: any;

		readonly errorData: PNErrorData;
	}

	declare const enum PNHeartbeatNotificationOptions {
		NotifySuccess = 1,

		NotifyFailure = 2,

		NotifyAll = 3,

		NotifyNone = 4,
	}

	declare const enum PNHereNowVerbosityLevel {
		Occupancy = 0,

		UUID = 1,

		State = 2,
	}

	declare class PNHistoryAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNHistoryAPICallBuilder; // inherited from NSObject

		static new(): PNHistoryAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNHistoryAPICallBuilder;

		readonly channels: (p1: NSArray<string>) => PNHistoryAPICallBuilder;

		readonly end: (p1: number) => PNHistoryAPICallBuilder;

		readonly includeTimeToken: (p1: boolean) => PNHistoryAPICallBuilder;

		readonly limit: (p1: number) => PNHistoryAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNHistoryResult, p2: PNErrorStatus) => void) => void;

		readonly reverse: (p1: boolean) => PNHistoryAPICallBuilder;

		readonly start: (p1: number) => PNHistoryAPICallBuilder;
	}

	declare class PNHistoryData extends PNServiceData {
		static alloc(): PNHistoryData; // inherited from NSObject

		static new(): PNHistoryData; // inherited from NSObject

		readonly channels: NSDictionary<string, NSArray<any>>;

		readonly end: number;

		readonly messages: NSArray<any>;

		readonly start: number;
	}

	declare class PNHistoryResult extends PNResult {
		static alloc(): PNHistoryResult; // inherited from NSObject

		static new(): PNHistoryResult; // inherited from NSObject

		readonly data: PNHistoryData;
	}

	declare class PNLLogger extends NSObject {
		static alloc(): PNLLogger; // inherited from NSObject

		static loggerWithIdentifier(identifier: string): PNLLogger;

		static loggerWithIdentifierDirectory(identifier: string, logsDirectoryPath: string): PNLLogger;

		static loggerWithIdentifierDirectoryLogExtension(identifier: string, logsDirectoryPath: string, extension: string): PNLLogger;

		static new(): PNLLogger; // inherited from NSObject

		readonly directory: string;

		enabled: boolean;

		readonly identifier: string;

		logFilesDiskQuota: number;

		readonly logLevel: number;

		logLevelChangeHandler: () => void;

		maximumLogFileSize: number;

		maximumNumberOfLogFiles: number;

		writeToConsole: boolean;

		writeToFile: boolean;

		disableLogLevel(level: number): void;

		enableLogLevel(level: number): void;

		logMessage(level: number, message: string): void;

		setLogLevel(level: number): void;
	}

	declare const enum PNLogLevel {
		SilentLogLevel = 0,

		InfoLogLevel = 2,

		ReachabilityLogLevel = 4,

		RequestLogLevel = 8,

		RequestMetricsLogLevel = 16,

		ResultLogLevel = 32,

		StatusLogLevel = 64,

		FailureStatusLogLevel = 128,

		APICallLogLevel = 256,

		AESErrorLogLevel = 512,

		VerboseLogLevel = 1022,
	}

	declare class PNMessageData extends PNSubscriberData {
		static alloc(): PNMessageData; // inherited from NSObject

		static new(): PNMessageData; // inherited from NSObject

		readonly message: any;

		readonly publisher: string;
	}

	declare class PNMessageResult extends PNResult {
		static alloc(): PNMessageResult; // inherited from NSObject

		static new(): PNMessageResult; // inherited from NSObject

		readonly data: PNMessageData;
	}

	interface PNObjectEventListener extends NSObjectProtocol {
		clientDidReceiveMessage?(client: PubNub, message: PNMessageResult): void;

		clientDidReceivePresenceEvent?(client: PubNub, event: PNPresenceEventResult): void;

		clientDidReceiveStatus?(client: PubNub, status: PNStatus): void;
	}
	declare var PNObjectEventListener: {
		prototype: PNObjectEventListener;
	};

	declare const enum PNOperationType {
		SubscribeOperation = 0,

		UnsubscribeOperation = 1,

		PublishOperation = 2,

		HistoryOperation = 3,

		HistoryForChannelsOperation = 4,

		DeleteMessageOperation = 5,

		WhereNowOperation = 6,

		HereNowGlobalOperation = 7,

		HereNowForChannelOperation = 8,

		HereNowForChannelGroupOperation = 9,

		HeartbeatOperation = 10,

		SetStateOperation = 11,

		StateForChannelOperation = 12,

		StateForChannelGroupOperation = 13,

		AddChannelsToGroupOperation = 14,

		RemoveChannelsFromGroupOperation = 15,

		ChannelGroupsOperation = 16,

		RemoveGroupOperation = 17,

		ChannelsForGroupOperation = 18,

		PushNotificationEnabledChannelsOperation = 19,

		AddPushNotificationsOnChannelsOperation = 20,

		RemovePushNotificationsFromChannelsOperation = 21,

		RemoveAllPushNotificationsOperation = 22,

		TimeOperation = 23,
	}

	declare class PNPresenceAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNPresenceAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceAPICallBuilder; // inherited from NSObject

		readonly connected: (p1: boolean) => PNPresenceHeartbeatAPICallBuilder;

		readonly hereNow: () => PNPresenceHereNowAPICallBuilder;

		readonly whereNow: () => PNPresenceWhereNowAPICallBuilder;
	}

	declare class PNPresenceChannelGroupHereNowAPICallBuilder extends PNPresenceHereNowAPICallBuilder {
		static alloc(): PNPresenceChannelGroupHereNowAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceChannelGroupHereNowAPICallBuilder; // inherited from NSObject

		readonly performWithCompletion: (p1: (p1: PNPresenceChannelGroupHereNowResult, p2: PNErrorStatus) => void) => void;

		readonly verbosity: (p1: PNHereNowVerbosityLevel) => PNPresenceChannelGroupHereNowAPICallBuilder;
	}

	declare class PNPresenceChannelGroupHereNowData extends PNPresenceGlobalHereNowData {
		static alloc(): PNPresenceChannelGroupHereNowData; // inherited from NSObject

		static new(): PNPresenceChannelGroupHereNowData; // inherited from NSObject
	}

	declare class PNPresenceChannelGroupHereNowResult extends PNResult {
		static alloc(): PNPresenceChannelGroupHereNowResult; // inherited from NSObject

		static new(): PNPresenceChannelGroupHereNowResult; // inherited from NSObject

		readonly data: PNPresenceChannelGroupHereNowData;
	}

	declare class PNPresenceChannelHereNowAPICallBuilder extends PNPresenceHereNowAPICallBuilder {
		static alloc(): PNPresenceChannelHereNowAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceChannelHereNowAPICallBuilder; // inherited from NSObject

		readonly performWithCompletion: (p1: (p1: PNPresenceChannelHereNowResult, p2: PNErrorStatus) => void) => void;

		readonly verbosity: (p1: PNHereNowVerbosityLevel) => PNPresenceChannelHereNowAPICallBuilder;
	}

	declare class PNPresenceChannelHereNowData extends PNServiceData {
		static alloc(): PNPresenceChannelHereNowData; // inherited from NSObject

		static new(): PNPresenceChannelHereNowData; // inherited from NSObject

		readonly occupancy: number;

		readonly uuids: any;
	}

	declare class PNPresenceChannelHereNowResult extends PNResult {
		static alloc(): PNPresenceChannelHereNowResult; // inherited from NSObject

		static new(): PNPresenceChannelHereNowResult; // inherited from NSObject

		readonly data: PNPresenceChannelHereNowData;
	}

	declare class PNPresenceDetailsData extends PNSubscriberData {
		static alloc(): PNPresenceDetailsData; // inherited from NSObject

		static new(): PNPresenceDetailsData; // inherited from NSObject

		readonly join: NSArray<string>;

		readonly leave: NSArray<string>;

		readonly occupancy: number;

		readonly state: NSDictionary<string, any>;

		readonly timeout: NSArray<string>;

		readonly uuid: string;
	}

	declare class PNPresenceEventData extends PNSubscriberData {
		static alloc(): PNPresenceEventData; // inherited from NSObject

		static new(): PNPresenceEventData; // inherited from NSObject

		readonly presence: PNPresenceDetailsData;

		readonly presenceEvent: string;
	}

	declare class PNPresenceEventResult extends PNResult {
		static alloc(): PNPresenceEventResult; // inherited from NSObject

		static new(): PNPresenceEventResult; // inherited from NSObject

		readonly data: PNPresenceEventData;
	}

	declare class PNPresenceGlobalHereNowData extends PNServiceData {
		static alloc(): PNPresenceGlobalHereNowData; // inherited from NSObject

		static new(): PNPresenceGlobalHereNowData; // inherited from NSObject

		readonly channels: NSDictionary<string, NSDictionary<any, any>>;

		readonly totalChannels: number;

		readonly totalOccupancy: number;
	}

	declare class PNPresenceGlobalHereNowResult extends PNResult {
		static alloc(): PNPresenceGlobalHereNowResult; // inherited from NSObject

		static new(): PNPresenceGlobalHereNowResult; // inherited from NSObject

		readonly data: PNPresenceGlobalHereNowData;
	}

	declare class PNPresenceHeartbeatAPICallBuilder extends PNPresenceAPICallBuilder {
		static alloc(): PNPresenceHeartbeatAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceHeartbeatAPICallBuilder; // inherited from NSObject

		readonly channelGroups: (p1: NSArray<string>) => PNPresenceHeartbeatAPICallBuilder;

		readonly channels: (p1: NSArray<string>) => PNPresenceHeartbeatAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNStatus) => void) => void;

		readonly state: (p1: NSDictionary<string, NSDictionary<any, any>>) => PNPresenceHeartbeatAPICallBuilder;
	}

	declare class PNPresenceHereNowAPICallBuilder extends PNPresenceAPICallBuilder {
		static alloc(): PNPresenceHereNowAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceHereNowAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNPresenceChannelHereNowAPICallBuilder;

		readonly channelGroup: (p1: string) => PNPresenceChannelGroupHereNowAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void) => void;

		readonly verbosity: (p1: PNHereNowVerbosityLevel) => PNPresenceHereNowAPICallBuilder;
	}

	declare class PNPresenceWhereNowAPICallBuilder extends PNPresenceAPICallBuilder {
		static alloc(): PNPresenceWhereNowAPICallBuilder; // inherited from NSObject

		static new(): PNPresenceWhereNowAPICallBuilder; // inherited from NSObject

		readonly performWithCompletion: (p1: (p1: PNPresenceWhereNowResult, p2: PNErrorStatus) => void) => void;

		readonly uuid: (p1: string) => PNPresenceWhereNowAPICallBuilder;
	}

	declare class PNPresenceWhereNowData extends PNServiceData {
		static alloc(): PNPresenceWhereNowData; // inherited from NSObject

		static new(): PNPresenceWhereNowData; // inherited from NSObject

		readonly channels: NSArray<string>;
	}

	declare class PNPresenceWhereNowResult extends PNResult {
		static alloc(): PNPresenceWhereNowResult; // inherited from NSObject

		static new(): PNPresenceWhereNowResult; // inherited from NSObject

		readonly data: PNPresenceWhereNowData;
	}

	declare class PNPublishAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNPublishAPICallBuilder; // inherited from NSObject

		static new(): PNPublishAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNPublishAPICallBuilder;

		readonly compress: (p1: boolean) => PNPublishAPICallBuilder;

		readonly message: (p1: any) => PNPublishAPICallBuilder;

		readonly metadata: (p1: NSDictionary<any, any>) => PNPublishAPICallBuilder;

		readonly payloads: (p1: NSDictionary<any, any>) => PNPublishAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNPublishStatus) => void) => void;

		readonly replicate: (p1: boolean) => PNPublishAPICallBuilder;

		readonly shouldStore: (p1: boolean) => PNPublishAPICallBuilder;

		readonly ttl: (p1: number) => PNPublishAPICallBuilder;
	}

	declare class PNPublishData extends PNServiceData {
		static alloc(): PNPublishData; // inherited from NSObject

		static new(): PNPublishData; // inherited from NSObject

		readonly information: string;

		readonly timetoken: number;
	}

	declare class PNPublishSizeAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNPublishSizeAPICallBuilder; // inherited from NSObject

		static new(): PNPublishSizeAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNPublishSizeAPICallBuilder;

		readonly compress: (p1: boolean) => PNPublishSizeAPICallBuilder;

		readonly message: (p1: any) => PNPublishSizeAPICallBuilder;

		readonly metadata: (p1: NSDictionary<any, any>) => PNPublishSizeAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: number) => void) => void;

		readonly replicate: (p1: boolean) => PNPublishSizeAPICallBuilder;

		readonly shouldStore: (p1: boolean) => PNPublishSizeAPICallBuilder;

		readonly ttl: (p1: number) => PNPublishSizeAPICallBuilder;
	}

	declare class PNPublishStatus extends PNAcknowledgmentStatus {
		static alloc(): PNPublishStatus; // inherited from NSObject

		static new(): PNPublishStatus; // inherited from NSObject

		readonly data: PNPublishData;
	}

	declare class PNResult extends NSObject {
		static alloc(): PNResult; // inherited from NSObject

		static new(): PNResult; // inherited from NSObject

		readonly TLSEnabled: boolean;

		readonly authKey: string;

		readonly clientRequest: NSURLRequest;

		readonly operation: PNOperationType;

		readonly origin: string;

		readonly statusCode: number;

		readonly uuid: string;

		stringifiedOperation(): string;
	}

	declare class PNServiceData extends NSObject {
		static alloc(): PNServiceData; // inherited from NSObject

		static new(): PNServiceData; // inherited from NSObject
	}

	declare class PNStateAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNStateAPICallBuilder; // inherited from NSObject

		static new(): PNStateAPICallBuilder; // inherited from NSObject

		readonly audit: () => PNStateAuditAPICallBuilder;

		readonly set: () => PNStateModificationAPICallBuilder;
	}

	declare class PNStateAuditAPICallBuilder extends PNStateAPICallBuilder {
		static alloc(): PNStateAuditAPICallBuilder; // inherited from NSObject

		static new(): PNStateAuditAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNStateAuditAPICallBuilder;

		readonly channelGroup: (p1: string) => PNStateAuditAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNChannelClientStateResult, p2: PNErrorStatus) => void) => void;

		readonly uuid: (p1: string) => PNStateAuditAPICallBuilder;
	}

	declare class PNStateModificationAPICallBuilder extends PNStateAPICallBuilder {
		static alloc(): PNStateModificationAPICallBuilder; // inherited from NSObject

		static new(): PNStateModificationAPICallBuilder; // inherited from NSObject

		readonly channel: (p1: string) => PNStateModificationAPICallBuilder;

		readonly channelGroup: (p1: string) => PNStateModificationAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNClientStateUpdateStatus) => void) => void;

		readonly state: (p1: NSDictionary<any, any>) => PNStateModificationAPICallBuilder;

		readonly uuid: (p1: string) => PNStateModificationAPICallBuilder;
	}

	declare class PNStatus extends PNResult {
		static alloc(): PNStatus; // inherited from NSObject

		static new(): PNStatus; // inherited from NSObject

		readonly automaticallyRetry: boolean;

		readonly category: PNStatusCategory;

		readonly error: boolean;

		cancelAutomaticRetry(): void;

		retry(): void;

		stringifiedCategory(): string;
	}

	declare const enum PNStatusCategory {
		UnknownCategory = 0,

		AcknowledgmentCategory = 1,

		AccessDeniedCategory = 2,

		TimeoutCategory = 3,

		NetworkIssuesCategory = 4,

		RequestMessageCountExceededCategory = 5,

		ConnectedCategory = 6,

		ReconnectedCategory = 7,

		DisconnectedCategory = 8,

		UnexpectedDisconnectCategory = 9,

		CancelledCategory = 10,

		BadRequestCategory = 11,

		RequestURITooLongCategory = 12,

		MalformedFilterExpressionCategory = 13,

		MalformedResponseCategory = 14,

		DecryptionErrorCategory = 15,

		TLSConnectionFailedCategory = 16,

		TLSUntrustedCertificateCategory = 17,
	}

	declare class PNStreamAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNStreamAPICallBuilder; // inherited from NSObject

		static new(): PNStreamAPICallBuilder; // inherited from NSObject

		readonly add: () => PNStreamModificationAPICallBuilder;

		readonly audit: () => PNStreamAuditAPICallBuilder;

		readonly remove: () => PNStreamModificationAPICallBuilder;
	}

	declare class PNStreamAuditAPICallBuilder extends PNStreamAPICallBuilder {
		static alloc(): PNStreamAuditAPICallBuilder; // inherited from NSObject

		static new(): PNStreamAuditAPICallBuilder; // inherited from NSObject

		readonly channelGroup: (p1: string) => PNStreamAuditAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNChannelGroupChannelsResult, p2: PNErrorStatus) => void) => void;
	}

	declare class PNStreamModificationAPICallBuilder extends PNStreamAPICallBuilder {
		static alloc(): PNStreamModificationAPICallBuilder; // inherited from NSObject

		static new(): PNStreamModificationAPICallBuilder; // inherited from NSObject

		readonly channelGroup: (p1: string) => PNStreamModificationAPICallBuilder;

		readonly channels: (p1: NSArray<string>) => PNStreamModificationAPICallBuilder;

		readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;
	}

	declare class PNSubscribeAPIBuilder extends PNAPICallBuilder {
		static alloc(): PNSubscribeAPIBuilder; // inherited from NSObject

		static new(): PNSubscribeAPIBuilder; // inherited from NSObject

		readonly channelGroups: (p1: NSArray<string>) => PNSubscribeChannelsOrGroupsAPIBuilder;

		readonly channels: (p1: NSArray<string>) => PNSubscribeChannelsOrGroupsAPIBuilder;

		readonly perform: () => void;

		readonly presenceChannels: (p1: NSArray<string>) => PNSubscribeAPIBuilder;
	}

	declare class PNSubscribeChannelsOrGroupsAPIBuilder extends PNSubscribeAPIBuilder {
		static alloc(): PNSubscribeChannelsOrGroupsAPIBuilder; // inherited from NSObject

		static new(): PNSubscribeChannelsOrGroupsAPIBuilder; // inherited from NSObject

		readonly state: (p1: NSDictionary<any, any>) => PNSubscribeChannelsOrGroupsAPIBuilder;

		readonly withPresence: (p1: boolean) => PNSubscribeChannelsOrGroupsAPIBuilder;

		readonly withTimetoken: (p1: number) => PNSubscribeChannelsOrGroupsAPIBuilder;
	}

	declare class PNSubscribeStatus extends PNErrorStatus {
		static alloc(): PNSubscribeStatus; // inherited from NSObject

		static new(): PNSubscribeStatus; // inherited from NSObject

		readonly currentTimetoken: number;

		readonly data: PNSubscriberData;

		readonly lastTimeToken: number;

		readonly subscribedChannelGroups: NSArray<string>;

		readonly subscribedChannels: NSArray<string>;
	}

	declare class PNSubscriberData extends PNServiceData {
		static alloc(): PNSubscriberData; // inherited from NSObject

		static new(): PNSubscriberData; // inherited from NSObject

		readonly actualChannel: string;

		readonly channel: string;

		readonly subscribedChannel: string;

		readonly subscription: string;

		readonly timetoken: number;

		readonly userMetadata: NSDictionary<string, any>;
	}

	declare class PNTimeAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNTimeAPICallBuilder; // inherited from NSObject

		static new(): PNTimeAPICallBuilder; // inherited from NSObject

		readonly performWithCompletion: (p1: (p1: PNTimeResult, p2: PNErrorStatus) => void) => void;
	}

	declare class PNTimeData extends PNServiceData {
		static alloc(): PNTimeData; // inherited from NSObject

		static new(): PNTimeData; // inherited from NSObject

		readonly timetoken: number;
	}

	declare class PNTimeResult extends PNResult {
		static alloc(): PNTimeResult; // inherited from NSObject

		static new(): PNTimeResult; // inherited from NSObject

		readonly data: PNTimeData;
	}

	declare class PNUnsubscribeAPICallBuilder extends PNAPICallBuilder {
		static alloc(): PNUnsubscribeAPICallBuilder; // inherited from NSObject

		static new(): PNUnsubscribeAPICallBuilder; // inherited from NSObject

		readonly channelGroups: (p1: NSArray<string>) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;

		readonly channels: (p1: NSArray<string>) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;

		readonly perform: () => void;

		readonly presenceChannels: (p1: NSArray<string>) => PNUnsubscribeAPICallBuilder;
	}

	declare class PNUnsubscribeChannelsOrGroupsAPICallBuilder extends PNUnsubscribeAPICallBuilder {
		static alloc(): PNUnsubscribeChannelsOrGroupsAPICallBuilder; // inherited from NSObject

		static new(): PNUnsubscribeChannelsOrGroupsAPICallBuilder; // inherited from NSObject

		readonly withPresence: (p1: boolean) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;
	}

	declare class PubNub extends NSObject {
		static alloc(): PubNub; // inherited from NSObject

		static clientWithConfiguration(configuration: PNConfiguration): PubNub;

		static clientWithConfigurationCallbackQueue(configuration: PNConfiguration, callbackQueue: NSObject): PubNub;

		static information(): PNClientInformation;

		static new(): PubNub; // inherited from NSObject

		readonly deleteMessage: () => PNDeleteMessageAPICallBuilder;

		filterExpression: string;

		readonly fire: () => PNPublishAPICallBuilder;

		readonly history: () => PNHistoryAPICallBuilder;

		readonly logger: PNLLogger;

		readonly presence: () => PNPresenceAPICallBuilder;

		readonly publish: () => PNPublishAPICallBuilder;

		readonly push: () => PNAPNSAPICallBuilder;

		readonly size: () => PNPublishSizeAPICallBuilder;

		readonly state: () => PNStateAPICallBuilder;

		readonly stream: () => PNStreamAPICallBuilder;

		readonly subscribe: () => PNSubscribeAPIBuilder;

		readonly time: () => PNTimeAPICallBuilder;

		readonly unsubscribe: () => PNUnsubscribeAPICallBuilder;

		addChannelsToGroupWithCompletion(channels: NSArray<string>, group: string, block: (p1: PNAcknowledgmentStatus) => void): void;

		addListener(listener: PNObjectEventListener): void;

		addPushNotificationsOnChannelsWithDevicePushTokenAndCompletion(channels: NSArray<string>, pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

		channelGroups(): NSArray<string>;

		channelGroupsWithCompletion(block: (p1: PNChannelGroupsResult, p2: PNErrorStatus) => void): void;

		channels(): NSArray<string>;

		channelsForGroupWithCompletion(group: string, block: (p1: PNChannelGroupChannelsResult, p2: PNErrorStatus) => void): void;

		copyWithConfigurationCallbackQueueCompletion(configuration: PNConfiguration, callbackQueue: NSObject, block: (p1: PubNub) => void): void;

		copyWithConfigurationCompletion(configuration: PNConfiguration, block: (p1: PubNub) => void): void;

		currentConfiguration(): PNConfiguration;

		deleteMessagesFromChannelStartEndWithCompletion(channel: string, startDate: number, endDate: number, block: (p1: PNAcknowledgmentStatus) => void): void;

		hereNowForChannelGroupWithCompletion(group: string, block: (p1: PNPresenceChannelGroupHereNowResult, p2: PNErrorStatus) => void): void;

		hereNowForChannelGroupWithVerbosityCompletion(group: string, level: PNHereNowVerbosityLevel, block: (p1: PNPresenceChannelGroupHereNowResult, p2: PNErrorStatus) => void): void;

		hereNowForChannelWithCompletion(channel: string, block: (p1: PNPresenceChannelHereNowResult, p2: PNErrorStatus) => void): void;

		hereNowForChannelWithVerbosityCompletion(channel: string, level: PNHereNowVerbosityLevel, block: (p1: PNPresenceChannelHereNowResult, p2: PNErrorStatus) => void): void;

		hereNowWithCompletion(block: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void): void;

		hereNowWithVerbosityCompletion(level: PNHereNowVerbosityLevel, block: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndLimitIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndLimitReverseIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldReverseOrder: boolean, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndLimitReverseWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldReverseOrder: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndLimitWithCompletion(channel: string, startDate: number, endDate: number, limit: number, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelStartEndWithCompletion(channel: string, startDate: number, endDate: number, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		historyForChannelWithCompletion(channel: string, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

		isSubscribedOn(name: string): boolean;

		presenceChannels(): NSArray<string>;

		publishToChannelCompressedWithCompletion(message: any, channel: string, compressed: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelCompressedWithMetadataCompletion(message: any, channel: string, compressed: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadCompressedWithCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, compressed: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadCompressedWithMetadataCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, compressed: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadStoreInHistoryCompressedWithCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, shouldStore: boolean, compressed: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadStoreInHistoryCompressedWithMetadataCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, shouldStore: boolean, compressed: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadStoreInHistoryWithCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, shouldStore: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadStoreInHistoryWithMetadataCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, shouldStore: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadWithCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelMobilePushPayloadWithMetadataCompletion(message: any, channel: string, payloads: NSDictionary<string, any>, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelStoreInHistoryCompressedWithCompletion(message: any, channel: string, shouldStore: boolean, compressed: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelStoreInHistoryCompressedWithMetadataCompletion(message: any, channel: string, shouldStore: boolean, compressed: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelStoreInHistoryWithCompletion(message: any, channel: string, shouldStore: boolean, block: (p1: PNPublishStatus) => void): void;

		publishToChannelStoreInHistoryWithMetadataCompletion(message: any, channel: string, shouldStore: boolean, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		publishToChannelWithCompletion(message: any, channel: string, block: (p1: PNPublishStatus) => void): void;

		publishToChannelWithMetadataCompletion(message: any, channel: string, metadata: NSDictionary<string, any>, block: (p1: PNPublishStatus) => void): void;

		pushNotificationEnabledChannelsForDeviceWithPushTokenAndCompletion(pushToken: NSData, block: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void): void;

		removeAllPushNotificationsFromDeviceWithPushTokenAndCompletion(pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

		removeChannelsFromGroupWithCompletion(group: string, block: (p1: PNAcknowledgmentStatus) => void): void;

		removeListener(listener: PNObjectEventListener): void;

		removePushNotificationsFromChannelsWithDevicePushTokenAndCompletion(channels: NSArray<string>, pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

		setStateForUUIDOnChannelGroupWithCompletion(state: NSDictionary<string, any>, uuid: string, group: string, block: (p1: PNClientStateUpdateStatus) => void): void;

		setStateForUUIDOnChannelWithCompletion(state: NSDictionary<string, any>, uuid: string, channel: string, block: (p1: PNClientStateUpdateStatus) => void): void;

		sizeOfMessageToChannelCompressedStoreInHistoryWithCompletion(message: any, channel: string, compressMessage: boolean, shouldStore: boolean, block: (p1: number) => void): void;

		sizeOfMessageToChannelCompressedStoreInHistoryWithMetadataCompletion(message: any, channel: string, compressMessage: boolean, shouldStore: boolean, metadata: NSDictionary<string, any>, block: (p1: number) => void): void;

		sizeOfMessageToChannelCompressedWithCompletion(message: any, channel: string, compressMessage: boolean, block: (p1: number) => void): void;

		sizeOfMessageToChannelCompressedWithMetadataCompletion(message: any, channel: string, compressMessage: boolean, metadata: NSDictionary<string, any>, block: (p1: number) => void): void;

		sizeOfMessageToChannelStoreInHistoryWithCompletion(message: any, channel: string, shouldStore: boolean, block: (p1: number) => void): void;

		sizeOfMessageToChannelStoreInHistoryWithMetadataCompletion(message: any, channel: string, shouldStore: boolean, metadata: NSDictionary<string, any>, block: (p1: number) => void): void;

		sizeOfMessageToChannelWithCompletion(message: any, channel: string, block: (p1: number) => void): void;

		sizeOfMessageToChannelWithMetadataCompletion(message: any, channel: string, metadata: NSDictionary<string, any>, block: (p1: number) => void): void;

		stateForUUIDOnChannelGroupWithCompletion(uuid: string, group: string, block: (p1: PNChannelGroupClientStateResult, p2: PNErrorStatus) => void): void;

		stateForUUIDOnChannelWithCompletion(uuid: string, channel: string, block: (p1: PNChannelClientStateResult, p2: PNErrorStatus) => void): void;

		subscribeToChannelGroupsWithPresence(groups: NSArray<string>, shouldObservePresence: boolean): void;

		subscribeToChannelGroupsWithPresenceClientState(groups: NSArray<string>, shouldObservePresence: boolean, state: NSDictionary<string, any>): void;

		subscribeToChannelGroupsWithPresenceUsingTimeToken(groups: NSArray<string>, shouldObservePresence: boolean, timeToken: number): void;

		subscribeToChannelGroupsWithPresenceUsingTimeTokenClientState(groups: NSArray<string>, shouldObservePresence: boolean, timeToken: number, state: NSDictionary<string, any>): void;

		subscribeToChannelsWithPresence(channels: NSArray<string>, shouldObservePresence: boolean): void;

		subscribeToChannelsWithPresenceClientState(channels: NSArray<string>, shouldObservePresence: boolean, state: NSDictionary<string, any>): void;

		subscribeToChannelsWithPresenceUsingTimeToken(channels: NSArray<string>, shouldObservePresence: boolean, timeToken: number): void;

		subscribeToChannelsWithPresenceUsingTimeTokenClientState(channels: NSArray<string>, shouldObservePresence: boolean, timeToken: number, state: NSDictionary<string, any>): void;

		subscribeToPresenceChannels(channels: NSArray<string>): void;

		timeWithCompletion(block: (p1: PNTimeResult, p2: PNErrorStatus) => void): void;

		unsubscribeFromAll(): void;

		unsubscribeFromAllWithCompletion(block: (p1: PNStatus) => void): void;

		unsubscribeFromChannelGroupsWithPresence(groups: NSArray<string>, shouldObservePresence: boolean): void;

		unsubscribeFromChannelsWithPresence(channels: NSArray<string>, shouldObservePresence: boolean): void;

		unsubscribeFromPresenceChannels(channels: NSArray<string>): void;

		uuid(): string;

		whereNowUUIDWithCompletion(uuid: string, block: (p1: PNPresenceWhereNowResult, p2: PNErrorStatus) => void): void;
	}

	declare var PubNubVersionNumber: number;

	declare var PubNubVersionString: interop.Reference<number>;

	declare var kPNAESConfigurationError: number;

	declare var kPNAESDecryptionError: number;

	declare var kPNAESEmptyObjectError: number;

	declare var kPNAESInsufficientMemoryError: number;

	declare var kPNAPIUnacceptableParameters: number;

	declare var kPNEmptyMessageError: number;

	declare var kPNUnknownErrorCode: number;
}
