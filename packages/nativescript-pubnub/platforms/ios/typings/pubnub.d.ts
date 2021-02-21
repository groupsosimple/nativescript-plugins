declare class PNAES extends NSObject {
	static alloc(): PNAES; // inherited from NSObject

	static decryptFileAtURLToURLWithCipherKeyCompletion(fileURL: NSURL, decryptedFileURL: NSURL, key: string, block: (p1: NSURL, p2: NSError) => void): void;

	static decryptWithKey(object: string, key: string): NSData;

	static decryptWithKeyAndError(object: string, key: string): NSData;

	static decryptWithRandomIVCipherKeyAndError(object: string, useRandomIV: boolean, key: string): NSData;

	static encryptFileAtURLToURLWithCipherKeyCompletion(fileURL: NSURL, encryptedFileURL: NSURL, key: string, block: (p1: NSURL, p2: NSError) => void): void;

	static encryptWithKey(data: NSData, key: string): string;

	static encryptWithKeyAndError(data: NSData, key: string): string;

	static encryptWithRandomIVCipherKeyAndError(data: NSData, useRandomIV: boolean, key: string): string;

	static new(): PNAES; // inherited from NSObject
}

declare class PNAPICallBuilder extends NSObject {
	static alloc(): PNAPICallBuilder; // inherited from NSObject

	static new(): PNAPICallBuilder; // inherited from NSObject

	readonly queryParam: (p1: NSDictionary<any, any>) => any;
}

declare class PNAPNSAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNAPNSAPICallBuilder; // inherited from NSObject

	static new(): PNAPNSAPICallBuilder; // inherited from NSObject

	readonly audit: () => PNAPNSAuditAPICallBuilder;

	readonly disable: () => PNAPNSModificationAPICallBuilder;

	readonly disableAll: () => PNAPNSModificationAPICallBuilder;

	readonly enable: () => PNAPNSModificationAPICallBuilder;
}

declare class PNAPNSAuditAPICallBuilder extends PNAPNSAPICallBuilder {
	static alloc(): PNAPNSAuditAPICallBuilder; // inherited from NSObject

	static new(): PNAPNSAuditAPICallBuilder; // inherited from NSObject

	readonly apnsToken: (p1: NSData) => PNAPNSAuditAPICallBuilder;

	readonly environment: (p1: PNAPNSEnvironment) => PNAPNSAuditAPICallBuilder;

	readonly fcmToken: (p1: string) => PNAPNSAuditAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void) => void;

	readonly pushType: (p1: PNPushType) => PNAPNSAuditAPICallBuilder;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNAPNSAuditAPICallBuilder;

	readonly token: (p1: any) => PNAPNSAuditAPICallBuilder;

	readonly topic: (p1: string) => PNAPNSAuditAPICallBuilder;
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

declare const enum PNAPNSEnvironment {
	Development = 0,

	Production = 1,
}

declare class PNAPNSModificationAPICallBuilder extends PNAPNSAPICallBuilder {
	static alloc(): PNAPNSModificationAPICallBuilder; // inherited from NSObject

	static new(): PNAPNSModificationAPICallBuilder; // inherited from NSObject

	readonly apnsToken: (p1: NSData) => PNAPNSModificationAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNAPNSModificationAPICallBuilder;

	readonly environment: (p1: PNAPNSEnvironment) => PNAPNSModificationAPICallBuilder;

	readonly fcmToken: (p1: string) => PNAPNSModificationAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly pushType: (p1: PNPushType) => PNAPNSModificationAPICallBuilder;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNAPNSModificationAPICallBuilder;

	readonly token: (p1: any) => PNAPNSModificationAPICallBuilder;

	readonly topic: (p1: string) => PNAPNSModificationAPICallBuilder;
}

declare class PNAPNSNotificationConfiguration extends NSObject {
	static alloc(): PNAPNSNotificationConfiguration; // inherited from NSObject

	static configurationWithCollapseIDExpirationDateTargets(collapseId: string, date: Date, targets: NSArray<PNAPNSNotificationTarget> | PNAPNSNotificationTarget[]): PNAPNSNotificationConfiguration;

	static configurationWithTargets(targets: NSArray<PNAPNSNotificationTarget> | PNAPNSNotificationTarget[]): PNAPNSNotificationConfiguration;

	static defaultConfiguration(): PNAPNSNotificationConfiguration;

	static new(): PNAPNSNotificationConfiguration; // inherited from NSObject
}

declare class PNAPNSNotificationPayload extends PNBaseNotificationPayload {
	static alloc(): PNAPNSNotificationPayload; // inherited from NSObject

	static new(): PNAPNSNotificationPayload; // inherited from NSObject

	configurations: NSArray<PNAPNSNotificationConfiguration>;

	readonly notification: NSMutableDictionary<any, any>;

	silent: boolean;
}

declare class PNAPNSNotificationTarget extends NSObject {
	static alloc(): PNAPNSNotificationTarget; // inherited from NSObject

	static defaultTarget(): PNAPNSNotificationTarget;

	static new(): PNAPNSNotificationTarget; // inherited from NSObject

	static targetForTopic(topic: string): PNAPNSNotificationTarget;

	static targetForTopicInEnvironmentWithExcludedDevices(topic: string, environment: PNAPNSEnvironment, excludedDevices: NSArray<NSData> | NSData[]): PNAPNSNotificationTarget;
}

declare class PNAcknowledgmentStatus extends PNErrorStatus {
	static alloc(): PNAcknowledgmentStatus; // inherited from NSObject

	static new(): PNAcknowledgmentStatus; // inherited from NSObject
}

declare class PNAddMessageActionAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNAddMessageActionAPICallBuilder; // inherited from NSObject

	static new(): PNAddMessageActionAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNAddMessageActionAPICallBuilder;

	readonly messageTimetoken: (p1: number) => PNAddMessageActionAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAddMessageActionStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNAddMessageActionAPICallBuilder;

	readonly type: (p1: string) => PNAddMessageActionAPICallBuilder;

	readonly value: (p1: string) => PNAddMessageActionAPICallBuilder;
}

declare class PNAddMessageActionData extends PNServiceData {
	static alloc(): PNAddMessageActionData; // inherited from NSObject

	static new(): PNAddMessageActionData; // inherited from NSObject

	readonly action: PNMessageAction;
}

declare class PNAddMessageActionRequest extends PNBaseMessageActionRequest {
	static alloc(): PNAddMessageActionRequest; // inherited from NSObject

	static new(): PNAddMessageActionRequest; // inherited from NSObject

	static requestWithChannelMessageTimetoken(channel: string, messageTimetoken: number): PNAddMessageActionRequest;

	type: string;

	value: string;
}

declare class PNAddMessageActionStatus extends PNAcknowledgmentStatus {
	static alloc(): PNAddMessageActionStatus; // inherited from NSObject

	static new(): PNAddMessageActionStatus; // inherited from NSObject

	readonly data: PNAddMessageActionData;
}

declare class PNAddPushNotificationsRequest extends PNBasePushNotificationsRequest {
	static alloc(): PNAddPushNotificationsRequest; // inherited from NSObject

	static new(): PNAddPushNotificationsRequest; // inherited from NSObject

	static requestWithDevicePushTokenPushType(pushToken: any, pushType: PNPushType): PNAddPushNotificationsRequest; // inherited from PNBasePushNotificationsRequest

	channels: NSArray<string>;
}

declare class PNAuditPushNotificationsRequest extends PNBasePushNotificationsRequest {
	static alloc(): PNAuditPushNotificationsRequest; // inherited from NSObject

	static new(): PNAuditPushNotificationsRequest; // inherited from NSObject

	static requestWithDevicePushTokenPushType(pushToken: any, pushType: PNPushType): PNAuditPushNotificationsRequest; // inherited from PNBasePushNotificationsRequest
}

declare class PNBaseMessageActionRequest extends PNRequest {
	static alloc(): PNBaseMessageActionRequest; // inherited from NSObject

	static new(): PNBaseMessageActionRequest; // inherited from NSObject
}

declare class PNBaseNotificationPayload extends NSObject {
	static alloc(): PNBaseNotificationPayload; // inherited from NSObject

	static new(): PNBaseNotificationPayload; // inherited from NSObject

	readonly payload: NSMutableDictionary<any, any>;
}

declare class PNBaseObjectsMembershipRequest extends PNObjectsPaginatedRequest {
	static alloc(): PNBaseObjectsMembershipRequest; // inherited from NSObject

	static new(): PNBaseObjectsMembershipRequest; // inherited from NSObject
}

declare class PNBaseObjectsRequest extends PNRequest {
	static alloc(): PNBaseObjectsRequest; // inherited from NSObject

	static new(): PNBaseObjectsRequest; // inherited from NSObject

	arbitraryQueryParameters: NSDictionary<any, any>;
}

declare class PNBasePublishRequest extends PNRequest {
	static alloc(): PNBasePublishRequest; // inherited from NSObject

	static new(): PNBasePublishRequest; // inherited from NSObject

	arbitraryQueryParameters: NSDictionary<any, any>;

	readonly channel: string;

	message: any;

	metadata: NSDictionary<any, any>;

	retried: boolean;

	store: boolean;

	ttl: number;
}

declare class PNBasePushNotificationsRequest extends PNRequest {
	static alloc(): PNBasePushNotificationsRequest; // inherited from NSObject

	static new(): PNBasePushNotificationsRequest; // inherited from NSObject

	static requestWithDevicePushTokenPushType(pushToken: any, pushType: PNPushType): PNBasePushNotificationsRequest;

	arbitraryQueryParameters: NSDictionary<any, any>;

	environment: PNAPNSEnvironment;

	readonly pushToken: any;

	readonly pushType: PNPushType;

	topic: string;
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

declare const enum PNChannelFields {
	TotalCountField = 1,

	CustomField = 2,
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

declare class PNChannelMember extends NSObject {
	static alloc(): PNChannelMember; // inherited from NSObject

	static new(): PNChannelMember; // inherited from NSObject

	readonly custom: NSDictionary<any, any>;

	readonly eTag: string;

	readonly metadata: PNUUIDMetadata;

	readonly updated: Date;

	readonly uuid: string;
}

declare const enum PNChannelMemberFields {
	MembersTotalCountField = 256,

	MemberCustomField = 512,

	MemberUUIDField = 1024,

	MemberUUIDCustomField = 2048,
}

declare class PNChannelMetadata extends NSObject {
	static alloc(): PNChannelMetadata; // inherited from NSObject

	static new(): PNChannelMetadata; // inherited from NSObject

	readonly channel: string;

	readonly custom: NSDictionary<any, any>;

	readonly eTag: string;

	readonly information: string;

	readonly name: string;

	readonly updated: Date;
}

declare class PNClientInformation extends NSObject {
	static alloc(): PNClientInformation; // inherited from NSObject

	static new(): PNClientInformation; // inherited from NSObject

	readonly commit: string;

	readonly version: string;
}

declare class PNClientStateData extends PNServiceData {
	static alloc(): PNClientStateData; // inherited from NSObject

	static new(): PNClientStateData; // inherited from NSObject

	readonly channels: NSDictionary<string, NSDictionary<any, any>>;
}

declare class PNClientStateGetResult extends PNResult {
	static alloc(): PNClientStateGetResult; // inherited from NSObject

	static new(): PNClientStateGetResult; // inherited from NSObject

	readonly data: PNClientStateData;
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

	fileMessagePublishRetryLimit: number;

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

	subscribeKey: string;

	subscribeMaximumIdleTime: number;

	suppressLeaveEvents: boolean;

	useRandomInitializationVector: boolean;

	uuid: string;
}

declare class PNDataStorage extends NSObject {
	static alloc(): PNDataStorage; // inherited from NSObject

	static new(): PNDataStorage; // inherited from NSObject

	static persistentClientDataWithIdentifier(identifier: string): PNKeyValueStorage;

	readonly persistentClientData: PNKeyValueStorage;
}

declare class PNDeleteFileAPICallBuilder extends PNFilesAPICallBuilder {
	static alloc(): PNDeleteFileAPICallBuilder; // inherited from NSObject

	static new(): PNDeleteFileAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;
}

declare class PNDeleteFileRequest extends PNRequest {
	static alloc(): PNDeleteFileRequest; // inherited from NSObject

	static new(): PNDeleteFileRequest; // inherited from NSObject

	static requestWithChannelIdentifierName(channel: string, identifier: string, name: string): PNDeleteFileRequest;

	arbitraryQueryParameters: NSDictionary<any, any>;
}

declare class PNDeleteMessageAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNDeleteMessageAPICallBuilder; // inherited from NSObject

	static new(): PNDeleteMessageAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNDeleteMessageAPICallBuilder;

	readonly end: (p1: number) => PNDeleteMessageAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNDeleteMessageAPICallBuilder;

	readonly start: (p1: number) => PNDeleteMessageAPICallBuilder;
}

declare class PNDownloadFileAPICallBuilder extends PNFilesAPICallBuilder {
	static alloc(): PNDownloadFileAPICallBuilder; // inherited from NSObject

	static new(): PNDownloadFileAPICallBuilder; // inherited from NSObject

	readonly cipherKey: (p1: string) => PNDownloadFileAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNDownloadFileResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNDownloadFileAPICallBuilder;

	readonly url: (p1: NSURL) => PNDownloadFileAPICallBuilder;
}

declare class PNDownloadFileData extends PNServiceData {
	static alloc(): PNDownloadFileData; // inherited from NSObject

	static new(): PNDownloadFileData; // inherited from NSObject

	readonly location: NSURL;

	readonly temporary: boolean;
}

declare class PNDownloadFileRequest extends PNRequest {
	static alloc(): PNDownloadFileRequest; // inherited from NSObject

	static new(): PNDownloadFileRequest; // inherited from NSObject

	static requestWithChannelIdentifierName(channel: string, identifier: string, name: string): PNDownloadFileRequest;

	arbitraryQueryParameters: NSDictionary<any, any>;

	cipherKey: string;

	targetURL: NSURL;
}

declare class PNDownloadFileResult extends PNResult {
	static alloc(): PNDownloadFileResult; // inherited from NSObject

	static new(): PNDownloadFileResult; // inherited from NSObject

	readonly data: PNDownloadFileData;
}

declare class PNEncryptedInputStream extends NSInputStream {
	static alloc(): PNEncryptedInputStream; // inherited from NSObject

	static inputStreamWithData(data: NSData): PNEncryptedInputStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): PNEncryptedInputStream; // inherited from NSInputStream

	static inputStreamWithInputStreamSizeCipherKey(inputStream: NSInputStream, size: number, cipherKey: string): PNEncryptedInputStream;

	static inputStreamWithURL(url: NSURL): PNEncryptedInputStream; // inherited from NSInputStream

	static new(): PNEncryptedInputStream; // inherited from NSObject

	readonly size: number;
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

interface PNEventsListener extends NSObjectProtocol {
	clientDidReceiveFileEvent?(client: PubNub, event: PNFileEventResult): void;

	clientDidReceiveMessage?(client: PubNub, message: PNMessageResult): void;

	clientDidReceiveMessageAction?(client: PubNub, action: PNMessageActionResult): void;

	clientDidReceiveObjectEvent?(client: PubNub, event: PNObjectEventResult): void;

	clientDidReceivePresenceEvent?(client: PubNub, event: PNPresenceEventResult): void;

	clientDidReceiveSignal?(client: PubNub, signal: PNSignalResult): void;

	clientDidReceiveStatus?(client: PubNub, status: PNStatus): void;
}
declare var PNEventsListener: {
	prototype: PNEventsListener;
};

declare class PNFCMNotificationPayload extends PNBaseNotificationPayload {
	static alloc(): PNFCMNotificationPayload; // inherited from NSObject

	static new(): PNFCMNotificationPayload; // inherited from NSObject

	readonly data: NSMutableDictionary<any, any>;

	icon: string;

	readonly notification: NSMutableDictionary<any, any>;

	silent: boolean;

	tag: string;
}

declare class PNFetchAllChannelsMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchAllChannelsMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNFetchAllChannelsMetadataAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly filter: (p1: string) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly includeFields: (p1: PNChannelFields) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly limit: (p1: number) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchAllChannelsMetadataResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly start: (p1: string) => PNFetchAllChannelsMetadataAPICallBuilder;
}

declare class PNFetchAllChannelsMetadataData extends PNServiceData {
	static alloc(): PNFetchAllChannelsMetadataData; // inherited from NSObject

	static new(): PNFetchAllChannelsMetadataData; // inherited from NSObject

	readonly metadata: NSArray<PNChannelMetadata>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNFetchAllChannelsMetadataRequest extends PNObjectsPaginatedRequest {
	static alloc(): PNFetchAllChannelsMetadataRequest; // inherited from NSObject

	static new(): PNFetchAllChannelsMetadataRequest; // inherited from NSObject

	includeFields: PNChannelFields;
}

declare class PNFetchAllChannelsMetadataResult extends PNResult {
	static alloc(): PNFetchAllChannelsMetadataResult; // inherited from NSObject

	static new(): PNFetchAllChannelsMetadataResult; // inherited from NSObject

	readonly data: PNFetchAllChannelsMetadataData;
}

declare class PNFetchAllUUIDMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchAllUUIDMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNFetchAllUUIDMetadataAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly filter: (p1: string) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly includeFields: (p1: PNUUIDFields) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly limit: (p1: number) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchAllUUIDMetadataResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly start: (p1: string) => PNFetchAllUUIDMetadataAPICallBuilder;
}

declare class PNFetchAllUUIDMetadataData extends PNServiceData {
	static alloc(): PNFetchAllUUIDMetadataData; // inherited from NSObject

	static new(): PNFetchAllUUIDMetadataData; // inherited from NSObject

	readonly metadata: NSArray<PNUUIDMetadata>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNFetchAllUUIDMetadataRequest extends PNObjectsPaginatedRequest {
	static alloc(): PNFetchAllUUIDMetadataRequest; // inherited from NSObject

	static new(): PNFetchAllUUIDMetadataRequest; // inherited from NSObject

	includeFields: PNUUIDFields;
}

declare class PNFetchAllUUIDMetadataResult extends PNResult {
	static alloc(): PNFetchAllUUIDMetadataResult; // inherited from NSObject

	static new(): PNFetchAllUUIDMetadataResult; // inherited from NSObject

	readonly data: PNFetchAllUUIDMetadataData;
}

declare class PNFetchChannelMembersAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchChannelMembersAPICallBuilder; // inherited from NSObject

	static new(): PNFetchChannelMembersAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNFetchChannelMembersAPICallBuilder;

	readonly filter: (p1: string) => PNFetchChannelMembersAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNFetchChannelMembersAPICallBuilder;

	readonly includeFields: (p1: PNChannelMemberFields) => PNFetchChannelMembersAPICallBuilder;

	readonly limit: (p1: number) => PNFetchChannelMembersAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchChannelMembersResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchChannelMembersAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNFetchChannelMembersAPICallBuilder;

	readonly start: (p1: string) => PNFetchChannelMembersAPICallBuilder;
}

declare class PNFetchChannelMembersData extends PNServiceData {
	static alloc(): PNFetchChannelMembersData; // inherited from NSObject

	static new(): PNFetchChannelMembersData; // inherited from NSObject

	readonly members: NSArray<PNChannelMember>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNFetchChannelMembersRequest extends PNObjectsPaginatedRequest {
	static alloc(): PNFetchChannelMembersRequest; // inherited from NSObject

	static new(): PNFetchChannelMembersRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNFetchChannelMembersRequest;

	includeFields: PNChannelMemberFields;
}

declare class PNFetchChannelMembersResult extends PNResult {
	static alloc(): PNFetchChannelMembersResult; // inherited from NSObject

	static new(): PNFetchChannelMembersResult; // inherited from NSObject

	readonly data: PNFetchChannelMembersData;
}

declare class PNFetchChannelMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchChannelMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNFetchChannelMetadataAPICallBuilder; // inherited from NSObject

	readonly includeFields: (p1: PNChannelFields) => PNFetchChannelMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchChannelMetadataResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchChannelMetadataAPICallBuilder;
}

declare class PNFetchChannelMetadataData extends PNServiceData {
	static alloc(): PNFetchChannelMetadataData; // inherited from NSObject

	static new(): PNFetchChannelMetadataData; // inherited from NSObject

	readonly metadata: PNChannelMetadata;
}

declare class PNFetchChannelMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNFetchChannelMetadataRequest; // inherited from NSObject

	static new(): PNFetchChannelMetadataRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNFetchChannelMetadataRequest;

	includeFields: PNChannelFields;
}

declare class PNFetchChannelMetadataResult extends PNResult {
	static alloc(): PNFetchChannelMetadataResult; // inherited from NSObject

	static new(): PNFetchChannelMetadataResult; // inherited from NSObject

	readonly data: PNFetchChannelMetadataData;
}

declare class PNFetchMembershipsAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchMembershipsAPICallBuilder; // inherited from NSObject

	static new(): PNFetchMembershipsAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNFetchMembershipsAPICallBuilder;

	readonly filter: (p1: string) => PNFetchMembershipsAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNFetchMembershipsAPICallBuilder;

	readonly includeFields: (p1: PNMembershipFields) => PNFetchMembershipsAPICallBuilder;

	readonly limit: (p1: number) => PNFetchMembershipsAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchMembershipsResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchMembershipsAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNFetchMembershipsAPICallBuilder;

	readonly start: (p1: string) => PNFetchMembershipsAPICallBuilder;

	readonly uuid: (p1: string) => PNFetchMembershipsAPICallBuilder;
}

declare class PNFetchMembershipsData extends PNServiceData {
	static alloc(): PNFetchMembershipsData; // inherited from NSObject

	static new(): PNFetchMembershipsData; // inherited from NSObject

	readonly memberships: NSArray<PNMembership>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNFetchMembershipsRequest extends PNObjectsPaginatedRequest {
	static alloc(): PNFetchMembershipsRequest; // inherited from NSObject

	static new(): PNFetchMembershipsRequest; // inherited from NSObject

	static requestWithUUID(uuid: string): PNFetchMembershipsRequest;

	includeFields: PNMembershipFields;
}

declare class PNFetchMembershipsResult extends PNResult {
	static alloc(): PNFetchMembershipsResult; // inherited from NSObject

	static new(): PNFetchMembershipsResult; // inherited from NSObject

	readonly data: PNFetchMembershipsData;
}

declare class PNFetchMessageActionsData extends PNServiceData {
	static alloc(): PNFetchMessageActionsData; // inherited from NSObject

	static new(): PNFetchMessageActionsData; // inherited from NSObject

	readonly actions: NSArray<PNMessageAction>;

	readonly end: number;

	readonly start: number;
}

declare class PNFetchMessageActionsRequest extends PNRequest {
	static alloc(): PNFetchMessageActionsRequest; // inherited from NSObject

	static new(): PNFetchMessageActionsRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNFetchMessageActionsRequest;

	end: number;

	limit: number;

	start: number;
}

declare class PNFetchMessageActionsResult extends PNResult {
	static alloc(): PNFetchMessageActionsResult; // inherited from NSObject

	static new(): PNFetchMessageActionsResult; // inherited from NSObject

	readonly data: PNFetchMessageActionsData;
}

declare class PNFetchMessagesActionsAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNFetchMessagesActionsAPICallBuilder; // inherited from NSObject

	static new(): PNFetchMessagesActionsAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNFetchMessagesActionsAPICallBuilder;

	readonly end: (p1: number) => PNFetchMessagesActionsAPICallBuilder;

	readonly limit: (p1: number) => PNFetchMessagesActionsAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchMessageActionsResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchMessagesActionsAPICallBuilder;

	readonly start: (p1: number) => PNFetchMessagesActionsAPICallBuilder;
}

declare class PNFetchUUIDMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNFetchUUIDMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNFetchUUIDMetadataAPICallBuilder; // inherited from NSObject

	readonly includeFields: (p1: PNUUIDFields) => PNFetchUUIDMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNFetchUUIDMetadataResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNFetchUUIDMetadataAPICallBuilder;

	readonly uuid: (p1: string) => PNFetchUUIDMetadataAPICallBuilder;
}

declare class PNFetchUUIDMetadataData extends PNServiceData {
	static alloc(): PNFetchUUIDMetadataData; // inherited from NSObject

	static new(): PNFetchUUIDMetadataData; // inherited from NSObject

	readonly metadata: PNUUIDMetadata;
}

declare class PNFetchUUIDMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNFetchUUIDMetadataRequest; // inherited from NSObject

	static new(): PNFetchUUIDMetadataRequest; // inherited from NSObject

	static requestWithUUID(uuid: string): PNFetchUUIDMetadataRequest;

	includeFields: PNUUIDFields;
}

declare class PNFetchUUIDMetadataResult extends PNResult {
	static alloc(): PNFetchUUIDMetadataResult; // inherited from NSObject

	static new(): PNFetchUUIDMetadataResult; // inherited from NSObject

	readonly data: PNFetchUUIDMetadataData;
}

declare class PNFile extends NSObject {
	static alloc(): PNFile; // inherited from NSObject

	static new(): PNFile; // inherited from NSObject

	readonly created: Date;

	readonly downloadURL: NSURL;

	readonly identifier: string;

	readonly name: string;

	readonly size: number;
}

declare class PNFileDownloadURLAPICallBuilder extends PNFilesAPICallBuilder {
	static alloc(): PNFileDownloadURLAPICallBuilder; // inherited from NSObject

	static new(): PNFileDownloadURLAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: NSURL) => void) => void;
}

declare class PNFileEventData extends PNSubscriberData {
	static alloc(): PNFileEventData; // inherited from NSObject

	static new(): PNFileEventData; // inherited from NSObject

	readonly file: PNFile;

	readonly message: any;
}

declare class PNFileEventResult extends PNResult {
	static alloc(): PNFileEventResult; // inherited from NSObject

	static new(): PNFileEventResult; // inherited from NSObject

	readonly data: PNFileEventData;
}

declare class PNFilesAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNFilesAPICallBuilder; // inherited from NSObject

	static new(): PNFilesAPICallBuilder; // inherited from NSObject

	readonly deleteFile: (p1: string, p2: string, p3: string) => PNDeleteFileAPICallBuilder;

	readonly downloadFile: (p1: string, p2: string, p3: string) => PNDownloadFileAPICallBuilder;

	readonly fileURL: (p1: string, p2: string, p3: string) => PNFileDownloadURLAPICallBuilder;

	readonly listFiles: (p1: string) => PNListFilesAPICallBuilder;

	readonly sendFile: (p1: string, p2: string) => PNSendFileAPICallBuilder;
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

	readonly includeMessageActions: (p1: boolean) => PNHistoryAPICallBuilder;

	readonly includeMessageType: (p1: boolean) => PNHistoryAPICallBuilder;

	readonly includeMetadata: (p1: boolean) => PNHistoryAPICallBuilder;

	readonly includeTimeToken: (p1: boolean) => PNHistoryAPICallBuilder;

	readonly includeUUID: (p1: boolean) => PNHistoryAPICallBuilder;

	readonly limit: (p1: number) => PNHistoryAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNHistoryResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNHistoryAPICallBuilder;

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

declare class PNInMemoryStorage extends NSObject implements PNKeyValueStorage {
	static alloc(): PNInMemoryStorage; // inherited from NSObject

	static new(): PNInMemoryStorage; // inherited from NSObject

	static storageWithIdentifierQueue(identifier: string, queue: NSObject): PNInMemoryStorage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	asyncStoreValueForKeyWithCompletion(value: any, key: string, block: (p1: boolean) => void): void;

	asyncValueForKeyWithCompletion(key: string, block: (p1: any) => void): void;

	batchAsyncAccessWithBlock(block: (p1: () => void) => void): void;

	batchSyncAccessWithBlock(block: () => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeValueForKey(value: any, key: string): boolean;

	syncStoreValueForKey(value: any, key: string): boolean;

	syncValueForKey(key: string): any;

	valueForKey(key: string): any;
}

interface PNKeyValueStorage extends NSObjectProtocol {
	asyncStoreValueForKeyWithCompletion(value: any, key: string, block: (p1: boolean) => void): void;

	asyncValueForKeyWithCompletion(key: string, block: (p1: any) => void): void;

	batchAsyncAccessWithBlock(block: (p1: () => void) => void): void;

	batchSyncAccessWithBlock(block: () => void): void;

	storeValueForKey(value: any, key: string): boolean;

	syncStoreValueForKey(value: any, key: string): boolean;

	syncValueForKey(key: string): any;

	valueForKey(key: string): any;
}
declare var PNKeyValueStorage: {
	prototype: PNKeyValueStorage;
};

declare class PNKeychain extends NSObject {
	static alloc(): PNKeychain; // inherited from NSObject

	static new(): PNKeychain; // inherited from NSObject

	static removeValueForKeyWithCompletionBlock(key: string, block: (p1: boolean) => void): void;

	static storeValueForKeyWithCompletionBlock(value: any, key: string, block: (p1: boolean) => void): void;

	static valueForKeyWithCompletionBlock(key: string, block: (p1: any) => void): void;
}

declare class PNKeychainStorage extends NSObject implements PNKeyValueStorage {
	static alloc(): PNKeychainStorage; // inherited from NSObject

	static new(): PNKeychainStorage; // inherited from NSObject

	static storageWithIdentifierQueue(identifier: string, queue: NSObject): PNKeychainStorage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	asyncStoreValueForKeyWithCompletion(value: any, key: string, block: (p1: boolean) => void): void;

	asyncValueForKeyWithCompletion(key: string, block: (p1: any) => void): void;

	batchAsyncAccessWithBlock(block: (p1: () => void) => void): void;

	batchSyncAccessWithBlock(block: () => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	storeValueForKey(value: any, key: string): boolean;

	syncStoreValueForKey(value: any, key: string): boolean;

	syncValueForKey(key: string): any;

	updateEntriesAccessibilityTo(entryNames: NSArray<string> | string[], accessibility: string): void;

	valueForKey(key: string): any;
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

	logLevel: number;

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

declare class PNListFilesAPICallBuilder extends PNFilesAPICallBuilder {
	static alloc(): PNListFilesAPICallBuilder; // inherited from NSObject

	static new(): PNListFilesAPICallBuilder; // inherited from NSObject

	readonly limit: (p1: number) => PNListFilesAPICallBuilder;

	readonly next: (p1: string) => PNListFilesAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNListFilesResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSendFileAPICallBuilder;
}

declare class PNListFilesData extends PNServiceData {
	static alloc(): PNListFilesData; // inherited from NSObject

	static new(): PNListFilesData; // inherited from NSObject

	readonly count: number;

	readonly files: NSArray<PNFile>;

	readonly next: string;
}

declare class PNListFilesRequest extends PNRequest {
	static alloc(): PNListFilesRequest; // inherited from NSObject

	static new(): PNListFilesRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNListFilesRequest;

	arbitraryQueryParameters: NSDictionary<any, any>;

	readonly channel: string;

	limit: number;

	next: string;
}

declare class PNListFilesResult extends PNResult {
	static alloc(): PNListFilesResult; // inherited from NSObject

	static new(): PNListFilesResult; // inherited from NSObject

	readonly data: PNListFilesData;
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

declare class PNMPNSNotificationPayload extends PNBaseNotificationPayload {
	static alloc(): PNMPNSNotificationPayload; // inherited from NSObject

	static new(): PNMPNSNotificationPayload; // inherited from NSObject

	backContent: string;

	backTitle: string;

	count: number;

	title: string;

	type: string;
}

declare class PNManageChannelMembersAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNManageChannelMembersAPICallBuilder; // inherited from NSObject

	static new(): PNManageChannelMembersAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNManageChannelMembersAPICallBuilder;

	readonly filter: (p1: string) => PNManageChannelMembersAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNManageChannelMembersAPICallBuilder;

	readonly includeFields: (p1: PNChannelMemberFields) => PNManageChannelMembersAPICallBuilder;

	readonly limit: (p1: number) => PNManageChannelMembersAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageChannelMembersStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNManageChannelMembersAPICallBuilder;

	readonly remove: (p1: NSArray<string>) => PNManageChannelMembersAPICallBuilder;

	readonly set: (p1: NSArray<NSDictionary<any, any>>) => PNManageChannelMembersAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNManageChannelMembersAPICallBuilder;

	readonly start: (p1: string) => PNManageChannelMembersAPICallBuilder;
}

declare class PNManageChannelMembersData extends PNServiceData {
	static alloc(): PNManageChannelMembersData; // inherited from NSObject

	static new(): PNManageChannelMembersData; // inherited from NSObject

	readonly members: NSArray<PNChannelMember>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNManageChannelMembersRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNManageChannelMembersRequest; // inherited from NSObject

	static new(): PNManageChannelMembersRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNManageChannelMembersRequest;

	includeFields: PNChannelMemberFields;

	removeMembers: NSArray<string>;

	setMembers: NSArray<NSDictionary<any, any>>;
}

declare class PNManageChannelMembersStatus extends PNAcknowledgmentStatus {
	static alloc(): PNManageChannelMembersStatus; // inherited from NSObject

	static new(): PNManageChannelMembersStatus; // inherited from NSObject

	readonly data: PNManageChannelMembersData;
}

declare class PNManageMembershipsAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNManageMembershipsAPICallBuilder; // inherited from NSObject

	static new(): PNManageMembershipsAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNManageMembershipsAPICallBuilder;

	readonly filter: (p1: string) => PNManageMembershipsAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNManageMembershipsAPICallBuilder;

	readonly includeFields: (p1: PNMembershipFields) => PNManageMembershipsAPICallBuilder;

	readonly limit: (p1: number) => PNManageMembershipsAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageMembershipsStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNManageMembershipsAPICallBuilder;

	readonly remove: (p1: NSArray<string>) => PNManageMembershipsAPICallBuilder;

	readonly set: (p1: NSArray<NSDictionary<any, any>>) => PNManageMembershipsAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNManageMembershipsAPICallBuilder;

	readonly start: (p1: string) => PNManageMembershipsAPICallBuilder;

	readonly uuid: (p1: string) => PNManageMembershipsAPICallBuilder;
}

declare class PNManageMembershipsData extends PNServiceData {
	static alloc(): PNManageMembershipsData; // inherited from NSObject

	static new(): PNManageMembershipsData; // inherited from NSObject

	readonly memberships: NSArray<PNMembership>;

	readonly next: string;

	readonly prev: string;

	readonly totalCount: number;
}

declare class PNManageMembershipsRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNManageMembershipsRequest; // inherited from NSObject

	static new(): PNManageMembershipsRequest; // inherited from NSObject

	static requestWithUUID(uuid: string): PNManageMembershipsRequest;

	includeFields: PNMembershipFields;

	removeChannels: NSArray<string>;

	setChannels: NSArray<NSDictionary<any, any>>;
}

declare class PNManageMembershipsStatus extends PNAcknowledgmentStatus {
	static alloc(): PNManageMembershipsStatus; // inherited from NSObject

	static new(): PNManageMembershipsStatus; // inherited from NSObject

	readonly data: PNManageMembershipsData;
}

declare class PNMembership extends NSObject {
	static alloc(): PNMembership; // inherited from NSObject

	static new(): PNMembership; // inherited from NSObject

	readonly channel: string;

	readonly custom: NSDictionary<any, any>;

	readonly eTag: string;

	readonly metadata: PNChannelMetadata;

	readonly updated: Date;

	readonly uuid: string;
}

declare const enum PNMembershipFields {
	MembershipsTotalCountField = 16,

	MembershipCustomField = 32,

	MembershipChannelField = 64,

	MembershipChannelCustomField = 128,
}

declare class PNMessageAction extends NSObject {
	static alloc(): PNMessageAction; // inherited from NSObject

	static new(): PNMessageAction; // inherited from NSObject

	readonly actionTimetoken: number;

	readonly messageTimetoken: number;

	readonly type: string;

	readonly uuid: string;

	readonly value: string;
}

declare class PNMessageActionData extends PNSubscriberData {
	static alloc(): PNMessageActionData; // inherited from NSObject

	static new(): PNMessageActionData; // inherited from NSObject

	readonly action: PNMessageAction;

	readonly event: string;
}

declare class PNMessageActionResult extends PNResult {
	static alloc(): PNMessageActionResult; // inherited from NSObject

	static new(): PNMessageActionResult; // inherited from NSObject

	readonly data: PNMessageActionData;
}

declare class PNMessageCountAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNMessageCountAPICallBuilder; // inherited from NSObject

	static new(): PNMessageCountAPICallBuilder; // inherited from NSObject

	readonly channels: (p1: NSArray<string>) => PNMessageCountAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNMessageCountResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNMessageCountAPICallBuilder;

	readonly timetokens: (p1: NSArray<number>) => PNMessageCountAPICallBuilder;
}

declare class PNMessageCountData extends PNServiceData {
	static alloc(): PNMessageCountData; // inherited from NSObject

	static new(): PNMessageCountData; // inherited from NSObject

	readonly channels: NSDictionary<string, number>;
}

declare class PNMessageCountResult extends PNResult {
	static alloc(): PNMessageCountResult; // inherited from NSObject

	static new(): PNMessageCountResult; // inherited from NSObject

	readonly data: PNMessageCountData;
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

declare class PNMultipartInputStream extends NSInputStream {
	static alloc(): PNMultipartInputStream; // inherited from NSObject

	static inputStreamWithData(data: NSData): PNMultipartInputStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): PNMultipartInputStream; // inherited from NSInputStream

	static inputStreamWithURL(url: NSURL): PNMultipartInputStream; // inherited from NSInputStream

	static new(): PNMultipartInputStream; // inherited from NSObject

	static streamWithInputStreamsSizesCipherKey(streams: NSArray<NSInputStream> | NSInputStream[], sizes: NSArray<number> | number[], cipherKey: string): PNMultipartInputStream;

	readonly size: number;

	readonly streams: NSArray<NSInputStream>;
}

declare class PNNotificationsPayload extends NSObject {
	static alloc(): PNNotificationsPayload; // inherited from NSObject

	static new(): PNNotificationsPayload; // inherited from NSObject

	static payloadsWithNotificationTitleBody(title: string, body: string): PNNotificationsPayload;

	readonly apns: PNAPNSNotificationPayload;

	badge: number;

	debugging: boolean;

	readonly fcm: PNFCMNotificationPayload;

	readonly mpns: PNMPNSNotificationPayload;

	sound: string;

	subtitle: string;

	dictionaryRepresentationFor(pushTypes: PNPushType): NSDictionary<any, any>;
}

declare const enum PNObjectActionType {
	CreateObjectAction = 0,

	UpdateObjectAction = 1,

	DeleteObjectAction = 2,
}

declare class PNObjectEventData extends PNSubscriberData {
	static alloc(): PNObjectEventData; // inherited from NSObject

	static new(): PNObjectEventData; // inherited from NSObject

	readonly channelMetadata: PNChannelMetadata;

	readonly event: string;

	readonly membership: PNMembership;

	readonly timestamp: number;

	readonly type: string;

	readonly uuidMetadata: PNUUIDMetadata;
}

interface PNObjectEventListener extends PNEventsListener {}
declare var PNObjectEventListener: {
	prototype: PNObjectEventListener;
};

declare class PNObjectEventResult extends PNResult {
	static alloc(): PNObjectEventResult; // inherited from NSObject

	static new(): PNObjectEventResult; // inherited from NSObject

	readonly data: PNObjectEventData;
}

declare class PNObjectsAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNObjectsAPICallBuilder; // inherited from NSObject

	static new(): PNObjectsAPICallBuilder; // inherited from NSObject

	readonly allChannelsMetadata: () => PNFetchAllChannelsMetadataAPICallBuilder;

	readonly allUUIDMetadata: () => PNFetchAllUUIDMetadataAPICallBuilder;

	readonly channelMembers: (p1: string) => PNFetchChannelMembersAPICallBuilder;

	readonly channelMetadata: (p1: string) => PNFetchChannelMetadataAPICallBuilder;

	readonly manageChannelMembers: (p1: string) => PNManageChannelMembersAPICallBuilder;

	readonly manageMemberships: () => PNManageMembershipsAPICallBuilder;

	readonly memberships: () => PNFetchMembershipsAPICallBuilder;

	readonly removeChannelMembers: (p1: string) => PNRemoveChannelMembersAPICallBuilder;

	readonly removeChannelMetadata: (p1: string) => PNRemoveChannelMetadataAPICallBuilder;

	readonly removeMemberships: () => PNRemoveMembershipsAPICallBuilder;

	readonly removeUUIDMetadata: () => PNRemoveUUIDMetadataAPICallBuilder;

	readonly setChannelMembers: (p1: string) => PNSetChannelMembersAPICallBuilder;

	readonly setChannelMetadata: (p1: string) => PNSetChannelMetadataAPICallBuilder;

	readonly setMemberships: () => PNSetMembershipsAPICallBuilder;

	readonly setUUIDMetadata: () => PNSetUUIDMetadataAPICallBuilder;

	readonly uuidMetadata: () => PNFetchUUIDMetadataAPICallBuilder;
}

declare class PNObjectsPaginatedRequest extends PNBaseObjectsRequest {
	static alloc(): PNObjectsPaginatedRequest; // inherited from NSObject

	static new(): PNObjectsPaginatedRequest; // inherited from NSObject

	end: string;

	filter: string;

	limit: number;

	sort: NSArray<string>;

	start: string;
}

declare const enum PNOperationType {
	SubscribeOperation = 0,

	UnsubscribeOperation = 1,

	PublishOperation = 2,

	SignalOperation = 3,

	AddMessageActionOperation = 4,

	RemoveMessageActionOperation = 5,

	FetchMessagesActionsOperation = 6,

	HistoryOperation = 7,

	HistoryForChannelsOperation = 8,

	HistoryWithActionsOperation = 9,

	DeleteMessageOperation = 10,

	MessageCountOperation = 11,

	WhereNowOperation = 12,

	HereNowGlobalOperation = 13,

	HereNowForChannelOperation = 14,

	HereNowForChannelGroupOperation = 15,

	HeartbeatOperation = 16,

	SetStateOperation = 17,

	GetStateOperation = 18,

	StateForChannelOperation = 19,

	StateForChannelGroupOperation = 20,

	AddChannelsToGroupOperation = 21,

	RemoveChannelsFromGroupOperation = 22,

	ChannelGroupsOperation = 23,

	RemoveGroupOperation = 24,

	ChannelsForGroupOperation = 25,

	PushNotificationEnabledChannelsOperation = 26,

	AddPushNotificationsOnChannelsOperation = 27,

	RemovePushNotificationsFromChannelsOperation = 28,

	RemoveAllPushNotificationsOperation = 29,

	PushNotificationEnabledChannelsV2Operation = 30,

	AddPushNotificationsOnChannelsV2Operation = 31,

	RemovePushNotificationsFromChannelsV2Operation = 32,

	RemoveAllPushNotificationsV2Operation = 33,

	SetUUIDMetadataOperation = 34,

	RemoveUUIDMetadataOperation = 35,

	FetchUUIDMetadataOperation = 36,

	FetchAllUUIDMetadataOperation = 37,

	SetChannelMetadataOperation = 38,

	RemoveChannelMetadataOperation = 39,

	FetchChannelMetadataOperation = 40,

	FetchAllChannelsMetadataOperation = 41,

	SetMembershipsOperation = 42,

	RemoveMembershipsOperation = 43,

	ManageMembershipsOperation = 44,

	FetchMembershipsOperation = 45,

	SetChannelMembersOperation = 46,

	RemoveChannelMembersOperation = 47,

	ManageChannelMembersOperation = 48,

	FetchChannelMembersOperation = 49,

	GenerateFileUploadURLOperation = 50,

	PublishFileMessageOperation = 51,

	SendFileOperation = 52,

	ListFilesOperation = 53,

	DownloadFileOperation = 54,

	DeleteFileOperation = 55,

	TimeOperation = 56,
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

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPresenceChannelGroupHereNowAPICallBuilder;

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

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPresenceChannelHereNowAPICallBuilder;

	readonly verbosity: (p1: PNHereNowVerbosityLevel) => PNPresenceChannelHereNowAPICallBuilder;
}

declare class PNPresenceChannelHereNowData extends PNServiceData {
	static alloc(): PNPresenceChannelHereNowData; // inherited from NSObject

	static new(): PNPresenceChannelHereNowData; // inherited from NSObject

	readonly channels: NSDictionary<string, NSDictionary<any, any>>;

	readonly occupancy: number;

	readonly totalOccupancy: number;

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

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPresenceHeartbeatAPICallBuilder;

	readonly state: (p1: NSDictionary<string, NSDictionary<any, any>>) => PNPresenceHeartbeatAPICallBuilder;
}

declare class PNPresenceHereNowAPICallBuilder extends PNPresenceAPICallBuilder {
	static alloc(): PNPresenceHereNowAPICallBuilder; // inherited from NSObject

	static new(): PNPresenceHereNowAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNPresenceChannelHereNowAPICallBuilder;

	readonly channelGroup: (p1: string) => PNPresenceChannelGroupHereNowAPICallBuilder;

	readonly channelGroups: (p1: NSArray<string>) => PNPresenceChannelGroupHereNowAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNPresenceChannelHereNowAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPresenceHereNowAPICallBuilder;

	readonly verbosity: (p1: PNHereNowVerbosityLevel) => PNPresenceHereNowAPICallBuilder;
}

declare class PNPresenceWhereNowAPICallBuilder extends PNPresenceAPICallBuilder {
	static alloc(): PNPresenceWhereNowAPICallBuilder; // inherited from NSObject

	static new(): PNPresenceWhereNowAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: PNPresenceWhereNowResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPresenceWhereNowAPICallBuilder;

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

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPublishAPICallBuilder;

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

declare class PNPublishFileMessageAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNPublishFileMessageAPICallBuilder; // inherited from NSObject

	static new(): PNPublishFileMessageAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNPublishFileMessageAPICallBuilder;

	readonly fileIdentifier: (p1: string) => PNPublishFileMessageAPICallBuilder;

	readonly fileName: (p1: string) => PNPublishFileMessageAPICallBuilder;

	readonly message: (p1: any) => PNPublishFileMessageAPICallBuilder;

	readonly metadata: (p1: NSDictionary<any, any>) => PNPublishFileMessageAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNPublishStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPublishFileMessageAPICallBuilder;

	readonly replicate: (p1: boolean) => PNPublishFileMessageAPICallBuilder;

	readonly shouldStore: (p1: boolean) => PNPublishFileMessageAPICallBuilder;

	readonly ttl: (p1: number) => PNPublishFileMessageAPICallBuilder;
}

declare class PNPublishFileMessageRequest extends PNBasePublishRequest {
	static alloc(): PNPublishFileMessageRequest; // inherited from NSObject

	static new(): PNPublishFileMessageRequest; // inherited from NSObject

	static requestWithChannelFileIdentifierName(channel: string, identifier: string, filename: string): PNPublishFileMessageRequest;

	readonly filename: string;

	readonly identifier: string;
}

declare class PNPublishRequest extends PNBasePublishRequest {
	static alloc(): PNPublishRequest; // inherited from NSObject

	static new(): PNPublishRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNPublishRequest;

	compress: boolean;

	payloads: NSDictionary<any, any>;

	replicate: boolean;
}

declare class PNPublishSizeAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNPublishSizeAPICallBuilder; // inherited from NSObject

	static new(): PNPublishSizeAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNPublishSizeAPICallBuilder;

	readonly compress: (p1: boolean) => PNPublishSizeAPICallBuilder;

	readonly message: (p1: any) => PNPublishSizeAPICallBuilder;

	readonly metadata: (p1: NSDictionary<any, any>) => PNPublishSizeAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: number) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNPublishSizeAPICallBuilder;

	readonly replicate: (p1: boolean) => PNPublishSizeAPICallBuilder;

	readonly shouldStore: (p1: boolean) => PNPublishSizeAPICallBuilder;

	readonly ttl: (p1: number) => PNPublishSizeAPICallBuilder;
}

declare class PNPublishStatus extends PNAcknowledgmentStatus {
	static alloc(): PNPublishStatus; // inherited from NSObject

	static new(): PNPublishStatus; // inherited from NSObject

	readonly data: PNPublishData;
}

declare const enum PNPushType {
	APNSPush = 1,

	APNS2Push = 2,

	FCMPush = 4,

	MPNSPush = 8,
}

declare class PNRemoveAllPushNotificationsRequest extends PNBasePushNotificationsRequest {
	static alloc(): PNRemoveAllPushNotificationsRequest; // inherited from NSObject

	static new(): PNRemoveAllPushNotificationsRequest; // inherited from NSObject

	static requestWithDevicePushTokenPushType(pushToken: any, pushType: PNPushType): PNRemoveAllPushNotificationsRequest; // inherited from PNBasePushNotificationsRequest
}

declare class PNRemoveChannelMembersAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNRemoveChannelMembersAPICallBuilder; // inherited from NSObject

	static new(): PNRemoveChannelMembersAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNRemoveChannelMembersAPICallBuilder;

	readonly filter: (p1: string) => PNRemoveChannelMembersAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNRemoveChannelMembersAPICallBuilder;

	readonly includeFields: (p1: PNChannelMemberFields) => PNRemoveChannelMembersAPICallBuilder;

	readonly limit: (p1: number) => PNRemoveChannelMembersAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageChannelMembersStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNRemoveChannelMembersAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNRemoveChannelMembersAPICallBuilder;

	readonly start: (p1: string) => PNRemoveChannelMembersAPICallBuilder;

	readonly uuids: (p1: NSArray<string>) => PNRemoveChannelMembersAPICallBuilder;
}

declare class PNRemoveChannelMembersRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNRemoveChannelMembersRequest; // inherited from NSObject

	static new(): PNRemoveChannelMembersRequest; // inherited from NSObject

	static requestWithChannelUuids(channel: string, uuids: NSArray<string> | string[]): PNRemoveChannelMembersRequest;

	includeFields: PNChannelMemberFields;
}

declare class PNRemoveChannelMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNRemoveChannelMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNRemoveChannelMetadataAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNRemoveChannelMetadataAPICallBuilder;
}

declare class PNRemoveChannelMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNRemoveChannelMetadataRequest; // inherited from NSObject

	static new(): PNRemoveChannelMetadataRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNRemoveChannelMetadataRequest;
}

declare class PNRemoveMembershipsAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNRemoveMembershipsAPICallBuilder; // inherited from NSObject

	static new(): PNRemoveMembershipsAPICallBuilder; // inherited from NSObject

	readonly channels: (p1: NSArray<string>) => PNRemoveMembershipsAPICallBuilder;

	readonly end: (p1: string) => PNRemoveMembershipsAPICallBuilder;

	readonly filter: (p1: string) => PNRemoveMembershipsAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNRemoveMembershipsAPICallBuilder;

	readonly includeFields: (p1: PNMembershipFields) => PNRemoveMembershipsAPICallBuilder;

	readonly limit: (p1: number) => PNRemoveMembershipsAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageMembershipsStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNRemoveMembershipsAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNRemoveMembershipsAPICallBuilder;

	readonly start: (p1: string) => PNRemoveMembershipsAPICallBuilder;

	readonly uuid: (p1: string) => PNRemoveMembershipsAPICallBuilder;
}

declare class PNRemoveMembershipsRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNRemoveMembershipsRequest; // inherited from NSObject

	static new(): PNRemoveMembershipsRequest; // inherited from NSObject

	static requestWithUUIDChannels(uuid: string, channels: NSArray<string> | string[]): PNRemoveMembershipsRequest;

	includeFields: PNMembershipFields;
}

declare class PNRemoveMessageActionAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNRemoveMessageActionAPICallBuilder; // inherited from NSObject

	static new(): PNRemoveMessageActionAPICallBuilder; // inherited from NSObject

	readonly actionTimetoken: (p1: number) => PNRemoveMessageActionAPICallBuilder;

	readonly channel: (p1: string) => PNRemoveMessageActionAPICallBuilder;

	readonly messageTimetoken: (p1: number) => PNRemoveMessageActionAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNRemoveMessageActionAPICallBuilder;
}

declare class PNRemoveMessageActionRequest extends PNBaseMessageActionRequest {
	static alloc(): PNRemoveMessageActionRequest; // inherited from NSObject

	static new(): PNRemoveMessageActionRequest; // inherited from NSObject

	static requestWithChannelMessageTimetoken(channel: string, messageTimetoken: number): PNRemoveMessageActionRequest;

	actionTimetoken: number;
}

declare class PNRemovePushNotificationsRequest extends PNBasePushNotificationsRequest {
	static alloc(): PNRemovePushNotificationsRequest; // inherited from NSObject

	static new(): PNRemovePushNotificationsRequest; // inherited from NSObject

	static requestWithDevicePushTokenPushType(pushToken: any, pushType: PNPushType): PNRemovePushNotificationsRequest; // inherited from PNBasePushNotificationsRequest

	channels: NSArray<string>;
}

declare class PNRemoveUUIDMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNRemoveUUIDMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNRemoveUUIDMetadataAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNRemoveUUIDMetadataAPICallBuilder;

	readonly uuid: (p1: string) => PNRemoveUUIDMetadataAPICallBuilder;
}

declare class PNRemoveUUIDMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNRemoveUUIDMetadataRequest; // inherited from NSObject

	static new(): PNRemoveUUIDMetadataRequest; // inherited from NSObject

	static requestWithUUID(uuid: string): PNRemoveUUIDMetadataRequest;
}

declare class PNRequest extends NSObject {
	static alloc(): PNRequest; // inherited from NSObject

	static new(): PNRequest; // inherited from NSObject
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

declare class PNSendFileAPICallBuilder extends PNFilesAPICallBuilder {
	static alloc(): PNSendFileAPICallBuilder; // inherited from NSObject

	static new(): PNSendFileAPICallBuilder; // inherited from NSObject

	readonly cipherKey: (p1: string) => PNSendFileAPICallBuilder;

	readonly data: (p1: NSData) => PNSendFileAPICallBuilder;

	readonly fileMessageMetadata: (p1: NSDictionary<any, any>) => PNSendFileAPICallBuilder;

	readonly fileMessageStore: (p1: boolean) => PNSendFileAPICallBuilder;

	readonly fileMessageTTL: (p1: number) => PNSendFileAPICallBuilder;

	readonly message: (p1: any) => PNSendFileAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNSendFileStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSendFileAPICallBuilder;

	readonly stream: (p1: NSInputStream, p2: number) => PNSendFileAPICallBuilder;

	readonly url: (p1: NSURL) => PNSendFileAPICallBuilder;
}

declare class PNSendFileData extends PNServiceData {
	static alloc(): PNSendFileData; // inherited from NSObject

	static new(): PNSendFileData; // inherited from NSObject

	readonly fileIdentifier: string;

	readonly fileName: string;

	readonly fileUploaded: boolean;

	readonly timetoken: number;
}

declare class PNSendFileRequest extends PNRequest {
	static alloc(): PNSendFileRequest; // inherited from NSObject

	static new(): PNSendFileRequest; // inherited from NSObject

	static requestWithChannelFileNameData(channel: string, name: string, data: NSData): PNSendFileRequest;

	static requestWithChannelFileNameStreamSize(channel: string, name: string, stream: NSInputStream, size: number): PNSendFileRequest;

	static requestWithChannelFileURL(channel: string, url: NSURL): PNSendFileRequest;

	arbitraryQueryParameters: NSDictionary<any, any>;

	readonly channel: string;

	cipherKey: string;

	fileMessageMetadata: NSDictionary<any, any>;

	fileMessageStore: boolean;

	fileMessageTTL: number;

	filename: string;

	message: any;
}

declare class PNSendFileStatus extends PNAcknowledgmentStatus {
	static alloc(): PNSendFileStatus; // inherited from NSObject

	static new(): PNSendFileStatus; // inherited from NSObject

	readonly data: PNSendFileData;
}

declare class PNServiceData extends NSObject {
	static alloc(): PNServiceData; // inherited from NSObject

	static new(): PNServiceData; // inherited from NSObject
}

declare class PNSetChannelMembersAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNSetChannelMembersAPICallBuilder; // inherited from NSObject

	static new(): PNSetChannelMembersAPICallBuilder; // inherited from NSObject

	readonly end: (p1: string) => PNSetChannelMembersAPICallBuilder;

	readonly filter: (p1: string) => PNSetChannelMembersAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNSetChannelMembersAPICallBuilder;

	readonly includeFields: (p1: PNChannelMemberFields) => PNSetChannelMembersAPICallBuilder;

	readonly limit: (p1: number) => PNSetChannelMembersAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageChannelMembersStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSetChannelMembersAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNSetChannelMembersAPICallBuilder;

	readonly start: (p1: string) => PNSetChannelMembersAPICallBuilder;

	readonly uuids: (p1: NSArray<NSDictionary<any, any>>) => PNSetChannelMembersAPICallBuilder;
}

declare class PNSetChannelMembersRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNSetChannelMembersRequest; // inherited from NSObject

	static new(): PNSetChannelMembersRequest; // inherited from NSObject

	static requestWithChannelUuids(channel: string, uuids: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): PNSetChannelMembersRequest;

	includeFields: PNChannelMemberFields;
}

declare class PNSetChannelMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNSetChannelMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNSetChannelMetadataAPICallBuilder; // inherited from NSObject

	readonly custom: (p1: NSDictionary<any, any>) => PNSetChannelMetadataAPICallBuilder;

	readonly includeFields: (p1: PNChannelFields) => PNSetChannelMetadataAPICallBuilder;

	readonly information: (p1: string) => PNSetChannelMetadataAPICallBuilder;

	readonly name: (p1: string) => PNSetChannelMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNSetChannelMetadataStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSetChannelMetadataAPICallBuilder;
}

declare class PNSetChannelMetadataData extends PNServiceData {
	static alloc(): PNSetChannelMetadataData; // inherited from NSObject

	static new(): PNSetChannelMetadataData; // inherited from NSObject

	readonly metadata: PNChannelMetadata;
}

declare class PNSetChannelMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNSetChannelMetadataRequest; // inherited from NSObject

	static new(): PNSetChannelMetadataRequest; // inherited from NSObject

	static requestWithChannel(channel: string): PNSetChannelMetadataRequest;

	custom: NSDictionary<any, any>;

	includeFields: PNChannelFields;

	information: string;

	name: string;
}

declare class PNSetChannelMetadataStatus extends PNAcknowledgmentStatus {
	static alloc(): PNSetChannelMetadataStatus; // inherited from NSObject

	static new(): PNSetChannelMetadataStatus; // inherited from NSObject

	readonly data: PNSetChannelMetadataData;
}

declare class PNSetMembershipsAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNSetMembershipsAPICallBuilder; // inherited from NSObject

	static new(): PNSetMembershipsAPICallBuilder; // inherited from NSObject

	readonly channels: (p1: NSArray<NSDictionary<any, any>>) => PNSetMembershipsAPICallBuilder;

	readonly end: (p1: string) => PNSetMembershipsAPICallBuilder;

	readonly filter: (p1: string) => PNSetMembershipsAPICallBuilder;

	readonly includeCount: (p1: boolean) => PNSetMembershipsAPICallBuilder;

	readonly includeFields: (p1: PNMembershipFields) => PNSetMembershipsAPICallBuilder;

	readonly limit: (p1: number) => PNSetMembershipsAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNManageMembershipsStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSetMembershipsAPICallBuilder;

	readonly sort: (p1: NSArray<string>) => PNSetMembershipsAPICallBuilder;

	readonly start: (p1: string) => PNSetMembershipsAPICallBuilder;

	readonly uuid: (p1: string) => PNSetMembershipsAPICallBuilder;
}

declare class PNSetMembershipsRequest extends PNBaseObjectsMembershipRequest {
	static alloc(): PNSetMembershipsRequest; // inherited from NSObject

	static new(): PNSetMembershipsRequest; // inherited from NSObject

	static requestWithUUIDChannels(uuid: string, channels: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): PNSetMembershipsRequest;

	includeFields: PNMembershipFields;
}

declare class PNSetUUIDMetadataAPICallBuilder extends PNObjectsAPICallBuilder {
	static alloc(): PNSetUUIDMetadataAPICallBuilder; // inherited from NSObject

	static new(): PNSetUUIDMetadataAPICallBuilder; // inherited from NSObject

	readonly custom: (p1: NSDictionary<any, any>) => PNSetUUIDMetadataAPICallBuilder;

	readonly email: (p1: string) => PNSetUUIDMetadataAPICallBuilder;

	readonly externalId: (p1: string) => PNSetUUIDMetadataAPICallBuilder;

	readonly includeFields: (p1: PNUUIDFields) => PNSetUUIDMetadataAPICallBuilder;

	readonly name: (p1: string) => PNSetUUIDMetadataAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNSetUUIDMetadataStatus) => void) => void;

	readonly profileUrl: (p1: string) => PNSetUUIDMetadataAPICallBuilder;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSetUUIDMetadataAPICallBuilder;

	readonly uuid: (p1: string) => PNSetUUIDMetadataAPICallBuilder;
}

declare class PNSetUUIDMetadataData extends PNServiceData {
	static alloc(): PNSetUUIDMetadataData; // inherited from NSObject

	static new(): PNSetUUIDMetadataData; // inherited from NSObject

	readonly metadata: PNUUIDMetadata;
}

declare class PNSetUUIDMetadataRequest extends PNBaseObjectsRequest {
	static alloc(): PNSetUUIDMetadataRequest; // inherited from NSObject

	static new(): PNSetUUIDMetadataRequest; // inherited from NSObject

	static requestWithUUID(uuid: string): PNSetUUIDMetadataRequest;

	custom: NSDictionary<any, any>;

	email: string;

	externalId: string;

	includeFields: PNUUIDFields;

	name: string;

	profileUrl: string;
}

declare class PNSetUUIDMetadataStatus extends PNAcknowledgmentStatus {
	static alloc(): PNSetUUIDMetadataStatus; // inherited from NSObject

	static new(): PNSetUUIDMetadataStatus; // inherited from NSObject

	readonly data: PNSetUUIDMetadataData;
}

declare class PNSignalAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNSignalAPICallBuilder; // inherited from NSObject

	static new(): PNSignalAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNSignalAPICallBuilder;

	readonly message: (p1: any) => PNSignalAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNSignalStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSignalAPICallBuilder;
}

declare class PNSignalData extends PNMessageData {
	static alloc(): PNSignalData; // inherited from NSObject

	static new(): PNSignalData; // inherited from NSObject
}

declare class PNSignalResult extends PNResult {
	static alloc(): PNSignalResult; // inherited from NSObject

	static new(): PNSignalResult; // inherited from NSObject

	readonly data: PNSignalData;
}

declare class PNSignalStatus extends PNAcknowledgmentStatus {
	static alloc(): PNSignalStatus; // inherited from NSObject

	static new(): PNSignalStatus; // inherited from NSObject

	readonly data: PNSignalStatusData;
}

declare class PNSignalStatusData extends PNServiceData {
	static alloc(): PNSignalStatusData; // inherited from NSObject

	static new(): PNSignalStatusData; // inherited from NSObject

	readonly information: string;

	readonly timetoken: number;
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

	readonly channelGroups: (p1: NSArray<string>) => PNStateAuditAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNStateAuditAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNClientStateGetResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNStateAuditAPICallBuilder;

	readonly uuid: (p1: string) => PNStateAuditAPICallBuilder;
}

declare class PNStateModificationAPICallBuilder extends PNStateAPICallBuilder {
	static alloc(): PNStateModificationAPICallBuilder; // inherited from NSObject

	static new(): PNStateModificationAPICallBuilder; // inherited from NSObject

	readonly channel: (p1: string) => PNStateModificationAPICallBuilder;

	readonly channelGroup: (p1: string) => PNStateModificationAPICallBuilder;

	readonly channelGroups: (p1: NSArray<string>) => PNStateModificationAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNStateModificationAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNClientStateUpdateStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNStateModificationAPICallBuilder;

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

	SendFileErrorCategory = 18,

	PublishFileMessageErrorCategory = 19,

	DownloadErrorCategory = 20,
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

	readonly queryParam: (p1: NSDictionary<any, any>) => PNStreamAuditAPICallBuilder;
}

declare class PNStreamModificationAPICallBuilder extends PNStreamAPICallBuilder {
	static alloc(): PNStreamModificationAPICallBuilder; // inherited from NSObject

	static new(): PNStreamModificationAPICallBuilder; // inherited from NSObject

	readonly channelGroup: (p1: string) => PNStreamModificationAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNStreamModificationAPICallBuilder;

	readonly performWithCompletion: (p1: (p1: PNAcknowledgmentStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNStreamModificationAPICallBuilder;
}

declare class PNSubscribeAPIBuilder extends PNAPICallBuilder {
	static alloc(): PNSubscribeAPIBuilder; // inherited from NSObject

	static new(): PNSubscribeAPIBuilder; // inherited from NSObject

	readonly channelGroups: (p1: NSArray<string>) => PNSubscribeChannelsOrGroupsAPIBuilder;

	readonly channels: (p1: NSArray<string>) => PNSubscribeChannelsOrGroupsAPIBuilder;

	readonly perform: () => void;

	readonly presenceChannels: (p1: NSArray<string>) => PNSubscribeAPIBuilder;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSubscribeAPIBuilder;
}

declare class PNSubscribeChannelsOrGroupsAPIBuilder extends PNSubscribeAPIBuilder {
	static alloc(): PNSubscribeChannelsOrGroupsAPIBuilder; // inherited from NSObject

	static new(): PNSubscribeChannelsOrGroupsAPIBuilder; // inherited from NSObject

	readonly queryParam: (p1: NSDictionary<any, any>) => PNSubscribeChannelsOrGroupsAPIBuilder;

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

	readonly channel: string;

	readonly subscription: string;

	readonly timetoken: number;

	readonly userMetadata: NSDictionary<string, any>;
}

declare class PNTimeAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNTimeAPICallBuilder; // inherited from NSObject

	static new(): PNTimeAPICallBuilder; // inherited from NSObject

	readonly performWithCompletion: (p1: (p1: PNTimeResult, p2: PNErrorStatus) => void) => void;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNTimeAPICallBuilder;
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

declare const enum PNUUIDFields {
	TotalCountField = 4,

	CustomField = 8,
}

declare class PNUUIDMetadata extends NSObject {
	static alloc(): PNUUIDMetadata; // inherited from NSObject

	static new(): PNUUIDMetadata; // inherited from NSObject

	readonly custom: NSDictionary<any, any>;

	readonly eTag: string;

	readonly email: string;

	readonly externalId: string;

	readonly name: string;

	readonly profileUrl: string;

	readonly updated: Date;

	readonly uuid: string;
}

declare class PNUnsubscribeAPICallBuilder extends PNAPICallBuilder {
	static alloc(): PNUnsubscribeAPICallBuilder; // inherited from NSObject

	static new(): PNUnsubscribeAPICallBuilder; // inherited from NSObject

	readonly channelGroups: (p1: NSArray<string>) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;

	readonly channels: (p1: NSArray<string>) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;

	readonly perform: () => void;

	readonly presenceChannels: (p1: NSArray<string>) => PNUnsubscribeAPICallBuilder;

	readonly queryParam: (p1: NSDictionary<any, any>) => PNUnsubscribeAPICallBuilder;
}

declare class PNUnsubscribeChannelsOrGroupsAPICallBuilder extends PNUnsubscribeAPICallBuilder {
	static alloc(): PNUnsubscribeChannelsOrGroupsAPICallBuilder; // inherited from NSObject

	static new(): PNUnsubscribeChannelsOrGroupsAPICallBuilder; // inherited from NSObject

	readonly queryParam: (p1: NSDictionary<any, any>) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;

	readonly withPresence: (p1: boolean) => PNUnsubscribeChannelsOrGroupsAPICallBuilder;
}

declare class PubNub extends NSObject {
	static alloc(): PubNub; // inherited from NSObject

	static clientWithConfiguration(configuration: PNConfiguration): PubNub;

	static clientWithConfigurationCallbackQueue(configuration: PNConfiguration, callbackQueue: NSObject): PubNub;

	static information(): PNClientInformation;

	static new(): PubNub; // inherited from NSObject

	readonly addMessageAction: () => PNAddMessageActionAPICallBuilder;

	readonly deleteMessage: () => PNDeleteMessageAPICallBuilder;

	readonly fetchMessageActions: () => PNFetchMessagesActionsAPICallBuilder;

	readonly files: () => PNFilesAPICallBuilder;

	filterExpression: string;

	readonly fire: () => PNPublishAPICallBuilder;

	readonly history: () => PNHistoryAPICallBuilder;

	readonly logger: PNLLogger;

	readonly messageCounts: () => PNMessageCountAPICallBuilder;

	readonly objects: () => PNObjectsAPICallBuilder;

	readonly presence: () => PNPresenceAPICallBuilder;

	readonly publish: () => PNPublishAPICallBuilder;

	readonly publishFileMessage: () => PNPublishFileMessageAPICallBuilder;

	readonly push: () => PNAPNSAPICallBuilder;

	readonly removeMessageAction: () => PNRemoveMessageActionAPICallBuilder;

	readonly signal: () => PNSignalAPICallBuilder;

	readonly size: () => PNPublishSizeAPICallBuilder;

	readonly state: () => PNStateAPICallBuilder;

	readonly stream: () => PNStreamAPICallBuilder;

	readonly subscribe: () => PNSubscribeAPIBuilder;

	readonly time: () => PNTimeAPICallBuilder;

	readonly unsubscribe: () => PNUnsubscribeAPICallBuilder;

	addChannelsToGroupWithCompletion(channels: NSArray<string> | string[], group: string, block: (p1: PNAcknowledgmentStatus) => void): void;

	addListener(listener: PNEventsListener): void;

	addMessageActionWithRequestCompletion(request: PNAddMessageActionRequest, block: (p1: PNAddMessageActionStatus) => void): void;

	addPushNotificationsOnChannelsWithDevicePushTokenAndCompletion(channels: NSArray<string> | string[], pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

	addPushNotificationsOnChannelsWithDevicePushTokenPushTypeAndCompletion(channels: NSArray<string> | string[], pushToken: any, pushType: PNPushType, block: (p1: PNAcknowledgmentStatus) => void): void;

	addPushNotificationsOnChannelsWithDevicePushTokenPushTypeEnvironmentTopicAndCompletion(channels: NSArray<string> | string[], pushToken: any, pushType: PNPushType, environment: PNAPNSEnvironment, topic: string, block: (p1: PNAcknowledgmentStatus) => void): void;

	allChannelsMetadataWithRequestCompletion(request: PNFetchAllChannelsMetadataRequest, block: (p1: PNFetchAllChannelsMetadataResult, p2: PNErrorStatus) => void): void;

	allUUIDMetadataWithRequestCompletion(request: PNFetchAllUUIDMetadataRequest, block: (p1: PNFetchAllUUIDMetadataResult, p2: PNErrorStatus) => void): void;

	channelGroups(): NSArray<string>;

	channelMembersWithRequestCompletion(request: PNFetchChannelMembersRequest, block: (p1: PNFetchChannelMembersResult, p2: PNErrorStatus) => void): void;

	channelMetadataWithRequestCompletion(request: PNFetchChannelMetadataRequest, block: (p1: PNFetchChannelMetadataResult, p2: PNErrorStatus) => void): void;

	channels(): NSArray<string>;

	channelsForGroupWithCompletion(group: string, block: (p1: PNChannelGroupChannelsResult, p2: PNErrorStatus) => void): void;

	copyWithConfigurationCallbackQueueCompletion(configuration: PNConfiguration, callbackQueue: NSObject, block: (p1: PubNub) => void): void;

	copyWithConfigurationCompletion(configuration: PNConfiguration, block: (p1: PubNub) => void): void;

	currentConfiguration(): PNConfiguration;

	deleteFileWithRequestCompletion(request: PNDeleteFileRequest, block: (p1: PNAcknowledgmentStatus) => void): void;

	deleteMessagesFromChannelStartEndWithCompletion(channel: string, startDate: number, endDate: number, block: (p1: PNAcknowledgmentStatus) => void): void;

	downloadFileWithRequestCompletion(request: PNDownloadFileRequest, block: (p1: PNDownloadFileResult, p2: PNErrorStatus) => void): void;

	downloadURLForFileWithNameIdentifierInChannel(name: string, identifier: string, channel: string): NSURL;

	fetchMessageActionsWithRequestCompletion(request: PNFetchMessageActionsRequest, block: (p1: PNFetchMessageActionsResult, p2: PNErrorStatus) => void): void;

	hereNowForChannelGroupWithCompletion(group: string, block: (p1: PNPresenceChannelGroupHereNowResult, p2: PNErrorStatus) => void): void;

	hereNowForChannelGroupWithVerbosityCompletion(group: string, level: PNHereNowVerbosityLevel, block: (p1: PNPresenceChannelGroupHereNowResult, p2: PNErrorStatus) => void): void;

	hereNowForChannelWithCompletion(channel: string, block: (p1: PNPresenceChannelHereNowResult, p2: PNErrorStatus) => void): void;

	hereNowForChannelWithVerbosityCompletion(channel: string, level: PNHereNowVerbosityLevel, block: (p1: PNPresenceChannelHereNowResult, p2: PNErrorStatus) => void): void;

	hereNowWithCompletion(block: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void): void;

	hereNowWithVerbosityCompletion(level: PNHereNowVerbosityLevel, block: (p1: PNPresenceGlobalHereNowResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndIncludeMessageActionsWithCompletion(channel: string, startDate: number, endDate: number, shouldIncludeMessageActions: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndIncludeMetadataIncludeMessageActionsWithCompletion(channel: string, startDate: number, endDate: number, shouldIncludeMetadata: boolean, shouldIncludeMessageActions: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndIncludeMetadataWithCompletion(channel: string, startDate: number, endDate: number, shouldIncludeMetadata: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndLimitIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndLimitReverseIncludeTimeTokenWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldReverseOrder: boolean, shouldIncludeTimeToken: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndLimitReverseWithCompletion(channel: string, startDate: number, endDate: number, limit: number, shouldReverseOrder: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndLimitWithCompletion(channel: string, startDate: number, endDate: number, limit: number, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelStartEndWithCompletion(channel: string, startDate: number, endDate: number, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelWithCompletion(channel: string, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelWithMessageActionsCompletion(channel: string, shouldIncludeMessageActions: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelWithMetadataCompletion(channel: string, shouldIncludeMetadata: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	historyForChannelWithMetadataMessageActionsCompletion(channel: string, shouldIncludeMetadata: boolean, shouldIncludeMessageActions: boolean, block: (p1: PNHistoryResult, p2: PNErrorStatus) => void): void;

	isSubscribedOn(name: string): boolean;

	listFilesWithRequestCompletion(request: PNListFilesRequest, block: (p1: PNListFilesResult, p2: PNErrorStatus) => void): void;

	manageChannelMembersWithRequestCompletion(request: PNManageChannelMembersRequest, block: (p1: PNManageChannelMembersStatus) => void): void;

	manageMembershipsWithRequestCompletion(request: PNManageMembershipsRequest, block: (p1: PNManageMembershipsStatus) => void): void;

	membershipsWithRequestCompletion(request: PNFetchMembershipsRequest, block: (p1: PNFetchMembershipsResult, p2: PNErrorStatus) => void): void;

	presenceChannels(): NSArray<string>;

	publishFileMessageWithRequestCompletion(request: PNPublishFileMessageRequest, block: (p1: PNPublishStatus) => void): void;

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

	publishWithRequestCompletion(request: PNPublishRequest, block: (p1: PNPublishStatus) => void): void;

	pushNotificationEnabledChannelsForDeviceWithPushTokenAndCompletion(pushToken: NSData, block: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void): void;

	pushNotificationEnabledChannelsForDeviceWithPushTokenPushTypeAndCompletion(pushToken: any, pushType: PNPushType, block: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void): void;

	pushNotificationEnabledChannelsForDeviceWithPushTokenPushTypeEnvironmentTopicAndCompletion(pushToken: any, pushType: PNPushType, environment: PNAPNSEnvironment, topic: string, block: (p1: PNAPNSEnabledChannelsResult, p2: PNErrorStatus) => void): void;

	removeAllPushNotificationsFromDeviceWithPushTokenAndCompletion(pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeAllPushNotificationsFromDeviceWithPushTokenPushTypeAndCompletion(pushToken: any, pushType: PNPushType, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeAllPushNotificationsFromDeviceWithPushTokenPushTypeEnvironmentTopicAndCompletion(pushToken: any, pushType: PNPushType, environment: PNAPNSEnvironment, topic: string, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeChannelMembersWithRequestCompletion(request: PNRemoveChannelMembersRequest, block: (p1: PNManageChannelMembersStatus) => void): void;

	removeChannelMetadataWithRequestCompletion(request: PNRemoveChannelMetadataRequest, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeChannelsFromGroupWithCompletion(channels: NSArray<string> | string[], group: string, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeListener(listener: PNEventsListener): void;

	removeMembershipsWithRequestCompletion(request: PNRemoveMembershipsRequest, block: (p1: PNManageMembershipsStatus) => void): void;

	removeMessageActionWithRequestCompletion(request: PNRemoveMessageActionRequest, block: (p1: PNAcknowledgmentStatus) => void): void;

	removePushNotificationsFromChannelsWithDevicePushTokenAndCompletion(channels: NSArray<string> | string[], pushToken: NSData, block: (p1: PNAcknowledgmentStatus) => void): void;

	removePushNotificationsFromChannelsWithDevicePushTokenPushTypeAndCompletion(channels: NSArray<string> | string[], pushToken: any, pushType: PNPushType, block: (p1: PNAcknowledgmentStatus) => void): void;

	removePushNotificationsFromChannelsWithDevicePushTokenPushTypeEnvironmentTopicAndCompletion(channels: NSArray<string> | string[], pushToken: any, pushType: PNPushType, environment: PNAPNSEnvironment, topic: string, block: (p1: PNAcknowledgmentStatus) => void): void;

	removeUUIDMetadataWithRequestCompletion(request: PNRemoveUUIDMetadataRequest, block: (p1: PNAcknowledgmentStatus) => void): void;

	sendFileWithRequestCompletion(request: PNSendFileRequest, block: (p1: PNSendFileStatus) => void): void;

	setChannelMembersWithRequestCompletion(request: PNSetChannelMembersRequest, block: (p1: PNManageChannelMembersStatus) => void): void;

	setChannelMetadataWithRequestCompletion(request: PNSetChannelMetadataRequest, block: (p1: PNSetChannelMetadataStatus) => void): void;

	setMembershipsWithRequestCompletion(request: PNSetMembershipsRequest, block: (p1: PNManageMembershipsStatus) => void): void;

	setStateForUUIDOnChannelGroupWithCompletion(state: NSDictionary<string, any>, uuid: string, group: string, block: (p1: PNClientStateUpdateStatus) => void): void;

	setStateForUUIDOnChannelWithCompletion(state: NSDictionary<string, any>, uuid: string, channel: string, block: (p1: PNClientStateUpdateStatus) => void): void;

	setUUIDMetadataWithRequestCompletion(request: PNSetUUIDMetadataRequest, block: (p1: PNSetUUIDMetadataStatus) => void): void;

	signalChannelWithCompletion(message: any, channel: string, block: (p1: PNSignalStatus) => void): void;

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

	subscribeToChannelGroupsWithPresence(groups: NSArray<string> | string[], shouldObservePresence: boolean): void;

	subscribeToChannelGroupsWithPresenceClientState(groups: NSArray<string> | string[], shouldObservePresence: boolean, state: NSDictionary<string, any>): void;

	subscribeToChannelGroupsWithPresenceUsingTimeToken(groups: NSArray<string> | string[], shouldObservePresence: boolean, timeToken: number): void;

	subscribeToChannelGroupsWithPresenceUsingTimeTokenClientState(groups: NSArray<string> | string[], shouldObservePresence: boolean, timeToken: number, state: NSDictionary<string, any>): void;

	subscribeToChannelsWithPresence(channels: NSArray<string> | string[], shouldObservePresence: boolean): void;

	subscribeToChannelsWithPresenceClientState(channels: NSArray<string> | string[], shouldObservePresence: boolean, state: NSDictionary<string, any>): void;

	subscribeToChannelsWithPresenceUsingTimeToken(channels: NSArray<string> | string[], shouldObservePresence: boolean, timeToken: number): void;

	subscribeToChannelsWithPresenceUsingTimeTokenClientState(channels: NSArray<string> | string[], shouldObservePresence: boolean, timeToken: number, state: NSDictionary<string, any>): void;

	subscribeToPresenceChannels(channels: NSArray<string> | string[]): void;

	timeWithCompletion(block: (p1: PNTimeResult, p2: PNErrorStatus) => void): void;

	unsubscribeFromAll(): void;

	unsubscribeFromAllWithCompletion(block: (p1: PNStatus) => void): void;

	unsubscribeFromChannelGroupsWithPresence(groups: NSArray<string> | string[], shouldObservePresence: boolean): void;

	unsubscribeFromChannelsWithPresence(channels: NSArray<string> | string[], shouldObservePresence: boolean): void;

	unsubscribeFromPresenceChannels(channels: NSArray<string> | string[]): void;

	uuid(): string;

	uuidMetadataWithRequestCompletion(request: PNFetchUUIDMetadataRequest, block: (p1: PNFetchUUIDMetadataResult, p2: PNErrorStatus) => void): void;

	whereNowUUIDWithCompletion(uuid: string, block: (p1: PNPresenceWhereNowResult, p2: PNErrorStatus) => void): void;
}

declare var PubNubVersionNumber: number;

declare var PubNubVersionString: interop.Reference<number>;

declare var kPNAESConfigurationError: number;

declare var kPNAESDecryptionError: number;

declare var kPNAESEmptyObjectError: number;

declare var kPNAESEncryptionError: number;

declare var kPNAESInsufficientMemoryError: number;

declare var kPNAPIUnacceptableParameters: number;

declare var kPNEmptyMessageError: number;

declare var kPNUnknownErrorCode: number;
