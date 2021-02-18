/// <reference path="pubnub.d.ts"/>

declare module com {
	export module pubnub {
		export module api {
			export class PNConfiguration {
				public static class: java.lang.Class<com.pubnub.api.PNConfiguration>;
				public setFileMessagePublishRetryLimit(param0: number): com.pubnub.api.PNConfiguration;
				public getRequestMessageCountThreshold(): java.lang.Integer;
				public setSuppressLeaveEvents(param0: boolean): com.pubnub.api.PNConfiguration;
				public getFileMessagePublishRetryLimit(): number;
				public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
				public getSubscribeTimeout(): number;
				public getHeartbeatNotificationOptions(): com.pubnub.api.enums.PNHeartbeatNotificationOptions;
				public constructor();
				/** @deprecated */
				public setCacheBusting(param0: boolean): com.pubnub.api.PNConfiguration;
				public isSuppressLeaveEvents(): boolean;
				public setCipherKey(param0: string): com.pubnub.api.PNConfiguration;
				public setAuthKey(param0: string): com.pubnub.api.PNConfiguration;
				public setReconnectionPolicy(param0: com.pubnub.api.enums.PNReconnectionPolicy): com.pubnub.api.PNConfiguration;
				public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): com.pubnub.api.PNConfiguration;
				public setConnectTimeout(param0: number): com.pubnub.api.PNConfiguration;
				public getMaximumMessagesCacheSize(): java.lang.Integer;
				public setSubscribeKey(param0: string): com.pubnub.api.PNConfiguration;
				public setStartSubscriberThread(param0: boolean): com.pubnub.api.PNConfiguration;
				public setNonSubscribeRequestTimeout(param0: number): com.pubnub.api.PNConfiguration;
				public getNonSubscribeRequestTimeout(): number;
				public isUseRandomInitializationVector(): boolean;
				public getHeartbeatInterval(): number;
				public isStartSubscriberThread(): boolean;
				public setPublishKey(param0: string): com.pubnub.api.PNConfiguration;
				/** @deprecated */
				public isCacheBusting(): boolean;
				public getX509ExtendedTrustManager(): javax.net.ssl.X509ExtendedTrustManager;
				public getUuid(): string;
				public setIncludeRequestIdentifier(param0: boolean): com.pubnub.api.PNConfiguration;
				public getHttpLoggingInterceptor(): okhttp3.logging.HttpLoggingInterceptor;
				public getPresenceTimeout(): number;
				public setUseRandomInitializationVector(param0: boolean): com.pubnub.api.PNConfiguration;
				public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public setHttpLoggingInterceptor(param0: okhttp3.logging.HttpLoggingInterceptor): com.pubnub.api.PNConfiguration;
				public getSecretKey(): string;
				public setIncludeInstanceIdentifier(param0: boolean): com.pubnub.api.PNConfiguration;
				public setSubscribeTimeout(param0: number): com.pubnub.api.PNConfiguration;
				public getPublishKey(): string;
				public setPresenceTimeoutWithCustomInterval(param0: number, param1: number): com.pubnub.api.PNConfiguration;
				public getAuthKey(): string;
				public setOrigin(param0: string): com.pubnub.api.PNConfiguration;
				public getConnectTimeout(): number;
				public setSecretKey(param0: string): com.pubnub.api.PNConfiguration;
				public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): com.pubnub.api.PNConfiguration;
				public setSecure(param0: boolean): com.pubnub.api.PNConfiguration;
				public setUuid(param0: string): com.pubnub.api.PNConfiguration;
				public setGoogleAppEngineNetworking(param0: boolean): com.pubnub.api.PNConfiguration;
				public setCertificatePinner(param0: okhttp3.CertificatePinner): com.pubnub.api.PNConfiguration;
				public setDedupOnSubscribe(param0: boolean): com.pubnub.api.PNConfiguration;
				public setLogVerbosity(param0: com.pubnub.api.enums.PNLogVerbosity): com.pubnub.api.PNConfiguration;
				public setMaximumReconnectionRetries(param0: number): com.pubnub.api.PNConfiguration;
				public setHeartbeatNotificationOptions(param0: com.pubnub.api.enums.PNHeartbeatNotificationOptions): com.pubnub.api.PNConfiguration;
				public setFilterExpression(param0: string): com.pubnub.api.PNConfiguration;
				public setProxySelector(param0: java.net.ProxySelector): com.pubnub.api.PNConfiguration;
				public getMaximumConnections(): java.lang.Integer;
				public getLogVerbosity(): com.pubnub.api.enums.PNLogVerbosity;
				public getCertificatePinner(): okhttp3.CertificatePinner;
				public setMaximumConnections(param0: java.lang.Integer): com.pubnub.api.PNConfiguration;
				public isSecure(): boolean;
				public setX509ExtendedTrustManager(param0: javax.net.ssl.X509ExtendedTrustManager): com.pubnub.api.PNConfiguration;
				public getProxyAuthenticator(): okhttp3.Authenticator;
				public setRequestMessageCountThreshold(param0: java.lang.Integer): com.pubnub.api.PNConfiguration;
				public getOrigin(): string;
				public isIncludeRequestIdentifier(): boolean;
				public getProxySelector(): java.net.ProxySelector;
				public setProxyAuthenticator(param0: okhttp3.Authenticator): com.pubnub.api.PNConfiguration;
				public getFilterExpression(): string;
				public setConnectionSpec(param0: okhttp3.ConnectionSpec): com.pubnub.api.PNConfiguration;
				public getMaximumReconnectionRetries(): number;
				public getReconnectionPolicy(): com.pubnub.api.enums.PNReconnectionPolicy;
				public setProxy(param0: java.net.Proxy): com.pubnub.api.PNConfiguration;
				public setPresenceTimeout(param0: number): com.pubnub.api.PNConfiguration;
				public isGoogleAppEngineNetworking(): boolean;
				public isDedupOnSubscribe(): boolean;
				public setMaximumMessagesCacheSize(param0: java.lang.Integer): com.pubnub.api.PNConfiguration;
				public getConnectionSpec(): okhttp3.ConnectionSpec;
				public getProxy(): java.net.Proxy;
				public getCipherKey(): string;
				public getSubscribeKey(): string;
				public isIncludeInstanceIdentifier(): boolean;
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export class PubNub {
				public static class: java.lang.Class<com.pubnub.api.PubNub>;
				public setUUIDMetadata(): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
				public addPushNotificationsOnChannels(): com.pubnub.api.endpoints.push.AddChannelsToPush;
				public deleteMessages(): com.pubnub.api.endpoints.DeleteMessages;
				public getConfiguration(): com.pubnub.api.PNConfiguration;
				public getAllChannelsMetadata(): com.pubnub.api.endpoints.objects_api.channel.GetAllChannelsMetadata;
				public messageCounts(): com.pubnub.api.endpoints.MessageCounts;
				public signal(): com.pubnub.api.endpoints.pubsub.Signal;
				public getSubscribedChannelGroups(): java.util.List<string>;
				public getUUIDMetadata(): com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata;
				public addListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
				public manageChannelMembers(): com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers.Builder;
				public listFiles(): com.pubnub.api.endpoints.files.ListFiles.Builder;
				public setPresenceState(): com.pubnub.api.endpoints.presence.SetState;
				public listAllChannelGroups(): com.pubnub.api.endpoints.channel_groups.ListAllChannelGroup;
				public removePushNotificationsFromChannels(): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
				public getTimestamp(): number;
				public removeListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
				public fire(): com.pubnub.api.endpoints.pubsub.Publish;
				public setChannelMetadata(): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata.Builder;
				public getMemberships(): com.pubnub.api.endpoints.objects_api.memberships.GetMemberships;
				public setMemberships(): com.pubnub.api.endpoints.objects_api.memberships.SetMemberships.Builder;
				public publish(): com.pubnub.api.endpoints.pubsub.Publish;
				public publishFileMessage(): com.pubnub.api.endpoints.files.PublishFileMessage.Builder;
				public getSubscribedChannels(): java.util.List<string>;
				public constructor(param0: com.pubnub.api.PNConfiguration);
				public encryptInputStream(param0: java.io.InputStream, param1: string): java.io.InputStream;
				public deleteFile(): com.pubnub.api.endpoints.files.DeleteFile.Builder;
				public removeChannelsFromChannelGroup(): com.pubnub.api.endpoints.channel_groups.RemoveChannelChannelGroup;
				public reconnect(): void;
				public decrypt(param0: string, param1: string): string;
				public time(): com.pubnub.api.endpoints.Time;
				public listChannelsForChannelGroup(): com.pubnub.api.endpoints.channel_groups.AllChannelsChannelGroup;
				public fetchMessages(): com.pubnub.api.endpoints.FetchMessages;
				/** @deprecated */
				public stop(): void;
				public removeChannelMetadata(): com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata.Builder;
				public manageMemberships(): com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships.Builder;
				public addMessageAction(): com.pubnub.api.endpoints.message_actions.AddMessageAction;
				public getMessageActions(): com.pubnub.api.endpoints.message_actions.GetMessageActions;
				public addChannelsToChannelGroup(): com.pubnub.api.endpoints.channel_groups.AddChannelChannelGroup;
				public removeAllPushNotificationsFromDeviceWithPushToken(): com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice;
				public removeMemberships(): com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships.Builder;
				public getAllUUIDMetadata(): com.pubnub.api.endpoints.objects_api.uuid.GetAllUUIDMetadata;
				public unsubscribe(): com.pubnub.api.builder.UnsubscribeBuilder;
				public getInstanceId(): string;
				public history(): com.pubnub.api.endpoints.History;
				public setChannelMembers(): com.pubnub.api.endpoints.objects_api.members.SetChannelMembers.Builder;
				public decryptInputStream(param0: java.io.InputStream): java.io.InputStream;
				public destroy(): void;
				public grant(): com.pubnub.api.endpoints.access.Grant;
				public getBaseUrl(): string;
				public downloadFile(): com.pubnub.api.endpoints.files.DownloadFile.Builder;
				public disconnect(): void;
				public getPresenceState(): com.pubnub.api.endpoints.presence.GetState;
				public auditPushChannelProvisions(): com.pubnub.api.endpoints.push.ListPushProvisions;
				public getMapper(): com.pubnub.api.managers.MapperManager;
				public encrypt(param0: string): string;
				public presence(): com.pubnub.api.builder.PresenceBuilder;
				public removeUUIDMetadata(): com.pubnub.api.endpoints.objects_api.uuid.RemoveUUIDMetadata;
				public encryptInputStream(param0: java.io.InputStream): java.io.InputStream;
				public getFileUrl(): com.pubnub.api.endpoints.files.GetFileUrl.Builder;
				public decryptInputStream(param0: java.io.InputStream, param1: string): java.io.InputStream;
				public whereNow(): com.pubnub.api.endpoints.presence.WhereNow;
				public removeChannelMembers(): com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers.Builder;
				public decrypt(param0: string): string;
				public getRequestId(): string;
				public hereNow(): com.pubnub.api.endpoints.presence.HereNow;
				public getChannelMetadata(): com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata.Builder;
				public encrypt(param0: string, param1: string): string;
				public unsubscribeAll(): void;
				public sendFile(): com.pubnub.api.endpoints.files.SendFile.Builder;
				public subscribe(): com.pubnub.api.builder.SubscribeBuilder;
				public getVersion(): string;
				public forceDestroy(): void;
				public deleteChannelGroup(): com.pubnub.api.endpoints.channel_groups.DeleteChannelGroup;
				public removeMessageAction(): com.pubnub.api.endpoints.message_actions.RemoveMessageAction;
				public getChannelMembers(): com.pubnub.api.endpoints.objects_api.members.GetChannelMembers.Builder;
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export class PubNubError {
				public static class: java.lang.Class<com.pubnub.api.PubNubError>;
				public getErrorString(): string;
				public getErrorObject(): com.google.gson.JsonElement;
				public static builder(): com.pubnub.api.PubNubError.PubNubErrorBuilder;
				public getErrorCode(): number;
				public getMessage(): string;
				public toString(): string;
				public getErrorCodeExtended(): number;
			}
			export module PubNubError {
				export class PubNubErrorBuilder {
					public static class: java.lang.Class<com.pubnub.api.PubNubError.PubNubErrorBuilder>;
					public errorCode(param0: number): com.pubnub.api.PubNubError.PubNubErrorBuilder;
					public toString(): string;
					public build(): com.pubnub.api.PubNubError;
					public errorObject(param0: com.google.gson.JsonElement): com.pubnub.api.PubNubError.PubNubErrorBuilder;
					public message(param0: string): com.pubnub.api.PubNubError.PubNubErrorBuilder;
					public errorString(param0: string): com.pubnub.api.PubNubError.PubNubErrorBuilder;
					public errorCodeExtended(param0: number): com.pubnub.api.PubNubError.PubNubErrorBuilder;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export class PubNubException {
				public static class: java.lang.Class<com.pubnub.api.PubNubException>;
				public getPubnubError(): com.pubnub.api.PubNubError;
				public getJso(): com.google.gson.JsonElement;
				public getStatusCode(): number;
				public getResponse(): string;
				public getErrormsg(): string;
				public getMessage(): string;
				public static builder(): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
				public toString(): string;
			}
			export module PubNubException {
				export class PubNubExceptionBuilder {
					public static class: java.lang.Class<com.pubnub.api.PubNubException.PubNubExceptionBuilder>;
					public affectedCall(param0: retrofit2.Call): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
					public statusCode(param0: number): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
					public toString(): string;
					public pubnubError(param0: com.pubnub.api.PubNubError): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
					public errormsg(param0: string): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
					public response(param0: string): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
					public build(): com.pubnub.api.PubNubException;
					public jso(param0: com.google.gson.JsonElement): com.pubnub.api.PubNubException.PubNubExceptionBuilder;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export class PubNubUtil {
				public static class: java.lang.Class<com.pubnub.api.PubNubUtil>;
				public static SIGNATURE_QUERY_PARAM_NAME: string;
				public static TIMESTAMP_QUERY_PARAM_NAME: string;
				public static AUTH_QUERY_PARAM_NAME: string;
				public static urlDecode(param0: string): string;
				public static generateSignature(param0: com.pubnub.api.PNConfiguration, param1: string, param2: java.util.Map<string, string>, param3: string, param4: string, param5: number): string;
				public static pamEncode(param0: string): string;
				public static urlEncode(param0: string): string;
				public static signSHA256(param0: string, param1: string): string;
				public static joinString(param0: java.util.List<string>, param1: string): string;
				public static replaceLast(param0: string, param1: string, param2: string): string;
				public static removeTrailingEqualSigns(param0: string): string;
				public static joinLong(param0: java.util.List<java.lang.Long>, param1: string): string;
				public static signRequest(param0: okhttp3.Request, param1: com.pubnub.api.PNConfiguration, param2: number): okhttp3.Request;
				public static shouldSignRequest(param0: com.pubnub.api.PNConfiguration): boolean;
				public static preparePamArguments(param0: java.util.Map<string, string>): string;
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export class PresenceBuilder extends com.pubnub.api.builder.PubSubBuilder {
					public static class: java.lang.Class<com.pubnub.api.builder.PresenceBuilder>;
					public connected(param0: boolean): com.pubnub.api.builder.PresenceBuilder;
					public channels(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public execute(): void;
					public channels(param0: java.util.List<string>): com.pubnub.api.builder.PresenceBuilder;
					public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.PresenceBuilder;
					public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public constructor(param0: com.pubnub.api.managers.SubscriptionManager);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export class PubNubErrorBuilder {
					public static class: java.lang.Class<com.pubnub.api.builder.PubNubErrorBuilder>;
					public static PNERR_TIMEOUT: number;
					public static PNERR_PUBNUB_ERROR: number;
					public static PNERR_CONNECT_EXCEPTION: number;
					public static PNERR_HTTP_ERROR: number;
					public static PNERR_CLIENT_TIMEOUT: number;
					public static PNERR_ULSSIGN_ERROR: number;
					public static PNERR_NETWORK_ERROR: number;
					public static PNERR_PUBNUB_EXCEPTION: number;
					public static PNERR_DISCONNECT: number;
					public static PNERR_DISCONN_AND_RESUB: number;
					public static PNERR_GATEWAY_TIMEOUT: number;
					public static PNERR_FORBIDDEN: number;
					public static PNERR_UNAUTHORIZED: number;
					public static PNERR_SECRET_KEY_MISSING: number;
					public static PNERR_ENCRYPTION_ERROR: number;
					public static PNERR_DECRYPTION_ERROR: number;
					public static PNERR_INVALID_JSON: number;
					public static PNERR_GETINPUTSTREAM: number;
					public static PNERR_MALFORMED_URL: number;
					public static PNERR_URL_OPEN: number;
					public static PNERR_JSON_ERROR: number;
					public static PNERR_PROTOCOL_EXCEPTION: number;
					public static PNERR_READINPUT: number;
					public static PNERR_BAD_GATEWAY: number;
					public static PNERR_INTERNAL_ERROR: number;
					public static PNERR_PARSING_ERROR: number;
					public static PNERR_BAD_REQUEST: number;
					public static PNERR_HTTP_RC_ERROR: number;
					public static PNERR_NOT_FOUND: number;
					public static PNERR_HTTP_SUBSCRIBE_TIMEOUT: number;
					public static PNERR_INVALID_ARGUMENTS: number;
					public static PNERR_CHANNEL_MISSING: number;
					public static PNERR_CONNECTION_NOT_SET: number;
					public static PNERR_CHANNEL_GROUP_PARSING_ERROR: number;
					public static PNERR_CRYPTO_ERROR: number;
					public static PNERR_GROUP_MISSING: number;
					public static PNERR_AUTH_KEYS_MISSING: number;
					public static PNERR_SUBSCRIBE_KEY_MISSING: number;
					public static PNERR_PUBLISH_KEY_MISSING: number;
					public static PNERR_STATE_MISSING: number;
					public static PNERR_CHANNEL_AND_GROUP_MISSING: number;
					public static PNERR_MESSAGE_MISSING: number;
					public static PNERR_PUSH_TYPE_MISSING: number;
					public static PNERR_DEVICE_ID_MISSING: number;
					public static PNERR_TIMETOKEN_MISSING: number;
					public static PNERR_CHANNELS_TIMETOKEN_MISMATCH: number;
					public static PNERR_UUID_MISSING: number;
					public static PNERR_USER_ID_MISSING: number;
					public static PNERR_USER_NAME_MISSING: number;
					public static PNERR_SPACE_MISSING: number;
					public static PNERR_SPACE_ID_MISSING: number;
					public static PNERR_SPACE_NAME_MISSING: number;
					public static PNERR_RESOURCES_MISSING: number;
					public static PNERR_TTL_MISSING: number;
					public static PNERR_INVALID_META: number;
					public static PNERR_PERMISSION_MISSING: number;
					public static PNERR_INVALID_ACCESS_TOKEN: number;
					public static PNERR_MESSAGE_ACTION_MISSING: number;
					public static PNERR_MESSAGE_ACTION_TYPE_MISSING: number;
					public static PNERR_MESSAGE_ACTION_VALUE_MISSING: number;
					public static PNERR_MESSAGE_TIMETOKEN_MISSING: number;
					public static PNERR_MESSAGE_ACTION_TIMETOKEN_MISSING: number;
					public static PNERR_HISTORY_MESSAGE_ACTIONS_MULTIPLE_CHANNELS: number;
					public static PNERR_PUSH_TOPIC_MISSING: number;
					public static PNERR_PAGINATION_NEXT_OUT_OF_BOUNDS: number;
					public static PNERR_PAGINATION_PREV_OUT_OF_BOUNDS: number;
					public static PNERR_PAYLOAD_TOO_LARGE: number;
					public static PNERROBJ_TIMEOUT: com.pubnub.api.PubNubError;
					public static PNERROBJ_INTERNAL_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_ENCRYPTION_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_DECRYPTION_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_INVALID_JSON: com.pubnub.api.PubNubError;
					public static PNERROBJ_JSON_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_MALFORMED_URL: com.pubnub.api.PubNubError;
					public static PNERROBJ_PUBNUB_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_URL_OPEN: com.pubnub.api.PubNubError;
					public static PNERROBJ_PROTOCOL_EXCEPTION: com.pubnub.api.PubNubError;
					public static PNERROBJ_CONNECT_EXCEPTION: com.pubnub.api.PubNubError;
					public static PNERROBJ_HTTP_RC_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_GETINPUTSTREAM: com.pubnub.api.PubNubError;
					public static PNERROBJ_READINPUT: com.pubnub.api.PubNubError;
					public static PNERROBJ_BAD_REQUEST: com.pubnub.api.PubNubError;
					public static PNERROBJ_HTTP_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_BAD_GATEWAY: com.pubnub.api.PubNubError;
					public static PNERROBJ_CLIENT_TIMEOUT: com.pubnub.api.PubNubError;
					public static PNERROBJ_GATEWAY_TIMEOUT: com.pubnub.api.PubNubError;
					public static PNERROBJ_5023_INTERNAL_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_PARSING_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_PUBNUB_EXCEPTION: com.pubnub.api.PubNubError;
					public static PNERROBJ_DISCONNECT: com.pubnub.api.PubNubError;
					public static PNERROBJ_DISCONN_AND_RESUB: com.pubnub.api.PubNubError;
					public static PNERROBJ_FORBIDDEN: com.pubnub.api.PubNubError;
					public static PNERROBJ_UNAUTHORIZED: com.pubnub.api.PubNubError;
					public static PNERROBJ_SECRET_KEY_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_SUBSCRIBE_KEY_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_PUBLISH_KEY_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_ULSSIGN_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_5075_NETWORK_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_NOT_FOUND_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_SUBSCRIBE_TIMEOUT: com.pubnub.api.PubNubError;
					public static PNERROBJ_INVALID_ARGUMENTS: com.pubnub.api.PubNubError;
					public static PNERROBJ_CHANNEL_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_STATE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_PUSH_TYPE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_DEVICE_ID_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_CONNECTION_NOT_SET: com.pubnub.api.PubNubError;
					public static PNERROBJ_GROUP_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_CHANNEL_AND_GROUP_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_AUTH_KEYS_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_CHANNEL_GROUP_PARSING_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_CRYPTO_ERROR: com.pubnub.api.PubNubError;
					public static PNERROBJ_TIMETOKEN_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_CHANNELS_TIMETOKEN_MISMATCH: com.pubnub.api.PubNubError;
					public static PNERROBJ_UUID_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_USER_ID_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_USER_NAME_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_SPACE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_SPACE_ID_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_SPACE_NAME_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_RESOURCES_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_TTL_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_INVALID_META: com.pubnub.api.PubNubError;
					public static PNERROBJ_PERMISSION_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_INVALID_ACCESS_TOKEN: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_ACTION_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_ACTION_TYPE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_ACTION_VALUE_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_TIMETOKEN_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_MESSAGE_ACTION_TIMETOKEN_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_HISTORY_MESSAGE_ACTIONS_MULTIPLE_CHANNELS: com.pubnub.api.PubNubError;
					public static PNERROBJ_PUSH_TOPIC_MISSING: com.pubnub.api.PubNubError;
					public static PNERROBJ_PAGINATION_NEXT_OUT_OF_BOUNDS: com.pubnub.api.PubNubError;
					public static PNERROBJ_PAGINATION_PREV_OUT_OF_BOUNDS: com.pubnub.api.PubNubError;
					public static PNERROBJ_PAYLOAD_TOO_LARGE: com.pubnub.api.PubNubError;
					public static createCryptoError(param0: number, param1: string): com.pubnub.api.PubNubError;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export abstract class PubSubBuilder {
					public static class: java.lang.Class<com.pubnub.api.builder.PubSubBuilder>;
					public getChannelSubscriptions(): java.util.List<string>;
					public channels(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public execute(): void;
					public setChannelGroupSubscriptions(param0: java.util.List<string>): void;
					public getChannelGroupSubscriptions(): java.util.List<string>;
					public getSubscriptionManager(): com.pubnub.api.managers.SubscriptionManager;
					public setChannelSubscriptions(param0: java.util.List<string>): void;
					public setSubscriptionManager(param0: com.pubnub.api.managers.SubscriptionManager): void;
					public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public constructor(param0: com.pubnub.api.managers.SubscriptionManager);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export class SubscribeBuilder extends com.pubnub.api.builder.PubSubBuilder {
					public static class: java.lang.Class<com.pubnub.api.builder.SubscribeBuilder>;
					public withPresence(): com.pubnub.api.builder.SubscribeBuilder;
					public channels(param0: java.util.List<string>): com.pubnub.api.builder.SubscribeBuilder;
					public channels(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public execute(): void;
					public withTimetoken(param0: java.lang.Long): com.pubnub.api.builder.SubscribeBuilder;
					public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.SubscribeBuilder;
					public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.PubSubBuilder;
					public constructor(param0: com.pubnub.api.managers.SubscriptionManager);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export class UnsubscribeBuilder extends com.pubnub.api.builder.PubSubBuilder {
					public static class: java.lang.Class<com.pubnub.api.builder.UnsubscribeBuilder>;
					public execute(): void;
					public constructor(param0: com.pubnub.api.managers.SubscriptionManager);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export module dto {
					export class PresenceOperation {
						public static class: java.lang.Class<com.pubnub.api.builder.dto.PresenceOperation>;
						public static builder(): com.pubnub.api.builder.dto.PresenceOperation.PresenceOperationBuilder;
						public getChannelGroups(): java.util.List<string>;
						public getChannels(): java.util.List<string>;
						public isConnected(): boolean;
					}
					export module PresenceOperation {
						export class PresenceOperationBuilder {
							public static class: java.lang.Class<com.pubnub.api.builder.dto.PresenceOperation.PresenceOperationBuilder>;
							public connected(param0: boolean): com.pubnub.api.builder.dto.PresenceOperation.PresenceOperationBuilder;
							public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.dto.PresenceOperation.PresenceOperationBuilder;
							public build(): com.pubnub.api.builder.dto.PresenceOperation;
							public toString(): string;
							public channels(param0: java.util.List<string>): com.pubnub.api.builder.dto.PresenceOperation.PresenceOperationBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export module dto {
					export class StateOperation {
						public static class: java.lang.Class<com.pubnub.api.builder.dto.StateOperation>;
						public static builder(): com.pubnub.api.builder.dto.StateOperation.StateOperationBuilder;
						public getChannelGroups(): java.util.List<string>;
						public getChannels(): java.util.List<string>;
						public getState(): any;
					}
					export module StateOperation {
						export class StateOperationBuilder {
							public static class: java.lang.Class<com.pubnub.api.builder.dto.StateOperation.StateOperationBuilder>;
							public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.dto.StateOperation.StateOperationBuilder;
							public state(param0: any): com.pubnub.api.builder.dto.StateOperation.StateOperationBuilder;
							public toString(): string;
							public channels(param0: java.util.List<string>): com.pubnub.api.builder.dto.StateOperation.StateOperationBuilder;
							public build(): com.pubnub.api.builder.dto.StateOperation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export module dto {
					export class SubscribeOperation {
						public static class: java.lang.Class<com.pubnub.api.builder.dto.SubscribeOperation>;
						public getTimetoken(): java.lang.Long;
						public getChannelGroups(): java.util.List<string>;
						public getChannels(): java.util.List<string>;
						public static builder(): com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder;
						public isPresenceEnabled(): boolean;
					}
					export module SubscribeOperation {
						export class SubscribeOperationBuilder {
							public static class: java.lang.Class<com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder>;
							public timetoken(param0: java.lang.Long): com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder;
							public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder;
							public toString(): string;
							public channels(param0: java.util.List<string>): com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder;
							public presenceEnabled(param0: boolean): com.pubnub.api.builder.dto.SubscribeOperation.SubscribeOperationBuilder;
							public build(): com.pubnub.api.builder.dto.SubscribeOperation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module builder {
				export module dto {
					export class UnsubscribeOperation {
						public static class: java.lang.Class<com.pubnub.api.builder.dto.UnsubscribeOperation>;
						public getChannelGroups(): java.util.List<string>;
						public static builder(): com.pubnub.api.builder.dto.UnsubscribeOperation.UnsubscribeOperationBuilder;
						public getChannels(): java.util.List<string>;
					}
					export module UnsubscribeOperation {
						export class UnsubscribeOperationBuilder {
							public static class: java.lang.Class<com.pubnub.api.builder.dto.UnsubscribeOperation.UnsubscribeOperationBuilder>;
							public build(): com.pubnub.api.builder.dto.UnsubscribeOperation;
							public toString(): string;
							public channelGroups(param0: java.util.List<string>): com.pubnub.api.builder.dto.UnsubscribeOperation.UnsubscribeOperationBuilder;
							public channels(param0: java.util.List<string>): com.pubnub.api.builder.dto.UnsubscribeOperation.UnsubscribeOperationBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module callbacks {
				export class PNCallback<X> extends java.lang.Object {
					public static class: java.lang.Class<com.pubnub.api.callbacks.PNCallback<any>>;
					/**
					 * Constructs a new instance of the com.pubnub.api.callbacks.PNCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onResponse(param0: X, param1: com.pubnub.api.models.consumer.PNStatus): void });
					public constructor();
					public onResponse(param0: X, param1: com.pubnub.api.models.consumer.PNStatus): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module callbacks {
				export abstract class ReconnectionCallback {
					public static class: java.lang.Class<com.pubnub.api.callbacks.ReconnectionCallback>;
					public constructor();
					public onMaxReconnectionExhaustion(): void;
					public onReconnection(): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module callbacks {
				export abstract class SubscribeCallback {
					public static class: java.lang.Class<com.pubnub.api.callbacks.SubscribeCallback>;
					public presence(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult): void;
					public message(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNMessageResult): void;
					public signal(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNSignalResult): void;
					public uuid(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadataResult): void;
					public messageAction(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult): void;
					public constructor();
					public membership(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.membership.PNMembershipResult): void;
					public channel(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadataResult): void;
					public file(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult): void;
					public status(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.PNStatus): void;
				}
				export module SubscribeCallback {
					export class BaseSubscribeCallback extends com.pubnub.api.callbacks.SubscribeCallback {
						public static class: java.lang.Class<com.pubnub.api.callbacks.SubscribeCallback.BaseSubscribeCallback>;
						public constructor();
						public membership(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.membership.PNMembershipResult): void;
						public presence(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult): void;
						public file(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult): void;
						public message(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNMessageResult): void;
						public signal(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.PNSignalResult): void;
						public status(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.PNStatus): void;
						public uuid(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadataResult): void;
						public messageAction(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult): void;
						public channel(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadataResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module callbacks {
				export abstract class TimeCallback extends com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.consumer.PNTimeResult> {
					public static class: java.lang.Class<com.pubnub.api.callbacks.TimeCallback>;
					public constructor();
					public onResponse(param0: any, param1: com.pubnub.api.models.consumer.PNStatus): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module callbacks {
				export abstract class WhereNowCallback extends com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.consumer.presence.PNWhereNowResult> {
					public static class: java.lang.Class<com.pubnub.api.callbacks.WhereNowCallback>;
					public constructor();
					public onResponse(param0: any, param1: com.pubnub.api.models.consumer.PNStatus): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class BuilderSteps {
					public static class: java.lang.Class<com.pubnub.api.endpoints.BuilderSteps>;
					/**
					 * Constructs a new instance of the com.pubnub.api.endpoints.BuilderSteps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export module BuilderSteps {
					export class ChannelStep<T> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.endpoints.BuilderSteps.ChannelStep<any>>;
						/**
						 * Constructs a new instance of the com.pubnub.api.endpoints.BuilderSteps$ChannelStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { channel(param0: string): T });
						public constructor();
						public channel(param0: string): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class DeleteMessages extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.DeleteMessagesEnvelope, com.pubnub.api.models.consumer.history.PNDeleteMessagesResult> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.DeleteMessages>;
					public getAffectedChannelGroups(): java.util.List<string>;
					public isAuthRequired(): boolean;
					public getAffectedChannels(): java.util.List<string>;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.DeleteMessagesEnvelope>): com.pubnub.api.models.consumer.history.PNDeleteMessagesResult;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.DeleteMessagesEnvelope>;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public silentCancel(): void;
					public validateParams(): void;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public createResponse(param0: retrofit2.Response<any>): any;
					public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.DeleteMessages;
					public retry(): void;
					public start(param0: java.lang.Long): com.pubnub.api.endpoints.DeleteMessages;
					public end(param0: java.lang.Long): com.pubnub.api.endpoints.DeleteMessages;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export abstract class Endpoint<Input, Output> extends com.pubnub.api.endpoints.remoteaction.RemoteAction<any> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.Endpoint<any, any>>;
					public getAffectedChannelGroups(): java.util.List<string>;
					public queryParam(param0: java.util.Map<string, string>): com.pubnub.api.endpoints.Endpoint<any, any>;
					public isAuthRequired(): boolean;
					public isError(param0: retrofit2.Response<any>): boolean;
					public getAffectedChannels(): java.util.List<string>;
					public encodeParams(param0: java.util.Map<string, string>): java.util.Map<string, string>;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public silentCancel(): void;
					public validateParams(): void;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public getRetrofit(): com.pubnub.api.managers.RetrofitManager;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public getPubnub(): com.pubnub.api.PubNub;
					public createBaseParams(): java.util.Map<string, string>;
					public createResponse(param0: retrofit2.Response<any>): any;
					public retry(): void;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class FetchMessages extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.FetchMessagesEnvelope, com.pubnub.api.models.consumer.history.PNFetchMessagesResult> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.FetchMessages>;
					public getAffectedChannelGroups(): java.util.List<string>;
					public maximumPerChannel(param0: java.lang.Integer): com.pubnub.api.endpoints.FetchMessages;
					public includeMeta(param0: java.lang.Boolean): com.pubnub.api.endpoints.FetchMessages;
					public isAuthRequired(): boolean;
					public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.FetchMessagesEnvelope>): com.pubnub.api.models.consumer.history.PNFetchMessagesResult;
					public getAffectedChannels(): java.util.List<string>;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.FetchMessagesEnvelope>;
					public includeMessageType(param0: boolean): com.pubnub.api.endpoints.FetchMessages;
					public includeMessageActions(param0: java.lang.Boolean): com.pubnub.api.endpoints.FetchMessages;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.FetchMessages;
					public silentCancel(): void;
					public validateParams(): void;
					public start(param0: java.lang.Long): com.pubnub.api.endpoints.FetchMessages;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public end(param0: java.lang.Long): com.pubnub.api.endpoints.FetchMessages;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public createResponse(param0: retrofit2.Response<any>): any;
					public retry(): void;
					public includeUUID(param0: boolean): com.pubnub.api.endpoints.FetchMessages;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class History extends com.pubnub.api.endpoints.Endpoint<com.google.gson.JsonElement, com.pubnub.api.models.consumer.history.PNHistoryResult> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.History>;
					public count(param0: java.lang.Integer): com.pubnub.api.endpoints.History;
					public includeMeta(param0: java.lang.Boolean): com.pubnub.api.endpoints.History;
					public getAffectedChannelGroups(): java.util.List<string>;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
					public isAuthRequired(): boolean;
					public reverse(param0: java.lang.Boolean): com.pubnub.api.endpoints.History;
					public getAffectedChannels(): java.util.List<string>;
					public start(param0: java.lang.Long): com.pubnub.api.endpoints.History;
					public end(param0: java.lang.Long): com.pubnub.api.endpoints.History;
					public channel(param0: string): com.pubnub.api.endpoints.History;
					public includeTimetoken(param0: java.lang.Boolean): com.pubnub.api.endpoints.History;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public silentCancel(): void;
					public validateParams(): void;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public createResponse(param0: retrofit2.Response<any>): any;
					public createResponse(param0: retrofit2.Response<com.google.gson.JsonElement>): com.pubnub.api.models.consumer.history.PNHistoryResult;
					public retry(): void;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class MessageCounts extends com.pubnub.api.endpoints.Endpoint<com.google.gson.JsonElement, com.pubnub.api.models.consumer.history.PNMessageCountResult> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.MessageCounts>;
					public getAffectedChannelGroups(): java.util.List<string>;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
					public isAuthRequired(): boolean;
					public getAffectedChannels(): java.util.List<string>;
					public createResponse(param0: retrofit2.Response<com.google.gson.JsonElement>): com.pubnub.api.models.consumer.history.PNMessageCountResult;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public silentCancel(): void;
					public validateParams(): void;
					public channelsTimetoken(param0: java.util.List<java.lang.Long>): com.pubnub.api.endpoints.MessageCounts;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.MessageCounts;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public createResponse(param0: retrofit2.Response<any>): any;
					public retry(): void;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export class Time extends com.pubnub.api.endpoints.Endpoint<java.util.List<java.lang.Long>, com.pubnub.api.models.consumer.PNTimeResult> {
					public static class: java.lang.Class<com.pubnub.api.endpoints.Time>;
					public getAffectedChannelGroups(): java.util.List<string>;
					public isAuthRequired(): boolean;
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<java.lang.Long>>;
					public getAffectedChannels(): java.util.List<string>;
					public createResponse(param0: retrofit2.Response<java.util.List<java.lang.Long>>): com.pubnub.api.models.consumer.PNTimeResult;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
					public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					public silentCancel(): void;
					public validateParams(): void;
					public getOperationType(): com.pubnub.api.enums.PNOperationType;
					public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					public createResponse(param0: retrofit2.Response<any>): any;
					public retry(): void;
					public sync(): any;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module access {
					export class Grant extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>, com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.access.Grant>;
						public join(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>>): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public delete(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public manage(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public validateParams(): void;
						public read(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>>;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public get(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public isAuthRequired(): boolean;
						public update(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public silentCancel(): void;
						public authKeys(param0: java.util.List<string>): com.pubnub.api.endpoints.access.Grant;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.access.Grant;
						public uuids(param0: java.util.List<string>): com.pubnub.api.endpoints.access.Grant;
						public write(param0: boolean): com.pubnub.api.endpoints.access.Grant;
						public ttl(param0: java.lang.Integer): com.pubnub.api.endpoints.access.Grant;
						public retry(): void;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.access.Grant;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module channel_groups {
					export class AddChannelChannelGroup extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.channel_groups.AddChannelChannelGroup>;
						public channelGroup(param0: string): com.pubnub.api.endpoints.channel_groups.AddChannelChannelGroup;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.channel_groups.AddChannelChannelGroup;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module channel_groups {
					export class AllChannelsChannelGroup extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.channel_groups.AllChannelsChannelGroup>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public isAuthRequired(): boolean;
						public channelGroup(param0: string): com.pubnub.api.endpoints.channel_groups.AllChannelsChannelGroup;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module channel_groups {
					export class DeleteChannelGroup extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.channel_groups.DeleteChannelGroup>;
						public isAuthRequired(): boolean;
						public channelGroup(param0: string): com.pubnub.api.endpoints.channel_groups.DeleteChannelGroup;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module channel_groups {
					export class ListAllChannelGroup extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.channel_groups.ListAllChannelGroup>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module channel_groups {
					export class RemoveChannelChannelGroup extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.channel_groups.RemoveChannelChannelGroup>;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult;
						public isAuthRequired(): boolean;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.channel_groups.RemoveChannelChannelGroup;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public channelGroup(param0: string): com.pubnub.api.endpoints.channel_groups.RemoveChannelChannelGroup;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class DeleteFile extends com.pubnub.api.endpoints.Endpoint<java.lang.Void, com.pubnub.api.models.consumer.files.PNDeleteFileResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.DeleteFile>;
						public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.files.DeleteFile.Builder;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.lang.Void>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public createResponse(param0: retrofit2.Response<java.lang.Void>): com.pubnub.api.models.consumer.files.PNDeleteFileResult;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public constructor(param0: string, param1: string, param2: string, param3: com.pubnub.api.PubNub, param4: com.pubnub.api.managers.TelemetryManager, param5: com.pubnub.api.managers.RetrofitManager);
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
					export module DeleteFile {
						export class Builder extends com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder<com.pubnub.api.endpoints.files.DeleteFile> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.DeleteFile.Builder>;
							public channel(param0: string): any;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class DownloadFile extends com.pubnub.api.endpoints.Endpoint<okhttp3.ResponseBody, com.pubnub.api.models.consumer.files.PNDownloadFileResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.DownloadFile>;
						public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.files.DownloadFile.Builder;
						public cipherKey(param0: string): com.pubnub.api.endpoints.files.DownloadFile;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<okhttp3.ResponseBody>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public constructor(param0: string, param1: string, param2: string, param3: com.pubnub.api.PubNub, param4: com.pubnub.api.managers.TelemetryManager, param5: com.pubnub.api.managers.RetrofitManager);
						public createResponse(param0: retrofit2.Response<any>): any;
						public createResponse(param0: retrofit2.Response<okhttp3.ResponseBody>): com.pubnub.api.models.consumer.files.PNDownloadFileResult;
						public sync(): any;
						public retry(): void;
					}
					export module DownloadFile {
						export class Builder extends com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder<com.pubnub.api.endpoints.files.DownloadFile> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.DownloadFile.Builder>;
							public channel(param0: string): any;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class GenerateUploadUrl extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse, com.pubnub.api.models.server.files.FileUploadRequestDetails> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.GenerateUploadUrl>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse>;
						public sync(): any;
						public retry(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse>): com.pubnub.api.models.server.files.FileUploadRequestDetails;
					}
					export module GenerateUploadUrl {
						export class Factory {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.GenerateUploadUrl.Factory>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class GetFileUrl extends com.pubnub.api.endpoints.Endpoint<okhttp3.ResponseBody, com.pubnub.api.models.consumer.files.PNFileUrlResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.GetFileUrl>;
						public isAuthRequired(): boolean;
						public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.files.GetFileUrl.Builder;
						public async(param0: com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.consumer.files.PNFileUrlResult>): void;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<okhttp3.ResponseBody>;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public constructor(param0: string, param1: string, param2: string, param3: com.pubnub.api.PubNub, param4: com.pubnub.api.managers.TelemetryManager, param5: com.pubnub.api.managers.RetrofitManager);
						public createResponse(param0: retrofit2.Response<okhttp3.ResponseBody>): com.pubnub.api.models.consumer.files.PNFileUrlResult;
						public sync(): any;
						public createResponse(param0: retrofit2.Response<any>): any;
						public retry(): void;
						public sync(): com.pubnub.api.models.consumer.files.PNFileUrlResult;
					}
					export module GetFileUrl {
						export class Builder extends com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder<com.pubnub.api.endpoints.files.GetFileUrl> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.GetFileUrl.Builder>;
							public channel(param0: string): any;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class ListFiles extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.files.ListFilesResult, com.pubnub.api.models.consumer.files.PNListFilesResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.ListFiles>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.files.ListFilesResult>): com.pubnub.api.models.consumer.files.PNListFilesResult;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public limit(param0: java.lang.Integer): com.pubnub.api.endpoints.files.ListFiles;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.ListFilesResult>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public constructor(param0: string, param1: com.pubnub.api.PubNub, param2: com.pubnub.api.managers.TelemetryManager, param3: com.pubnub.api.managers.RetrofitManager);
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public next(param0: com.pubnub.api.models.consumer.PNPage.Next): com.pubnub.api.endpoints.files.ListFiles;
					}
					export module ListFiles {
						export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.files.ListFiles> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.ListFiles.Builder>;
							public channel(param0: string): any;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
							public channel(param0: string): com.pubnub.api.endpoints.files.ListFiles;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class PublishFileMessage extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.files.PNPublishFileMessageResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.PublishFileMessage>;
						public ttl(param0: java.lang.Integer): com.pubnub.api.endpoints.files.PublishFileMessage;
						public isAuthRequired(): boolean;
						public shouldStore(param0: java.lang.Boolean): com.pubnub.api.endpoints.files.PublishFileMessage;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.files.PNPublishFileMessageResult;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.files.PublishFileMessage.Builder;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public message(param0: any): com.pubnub.api.endpoints.files.PublishFileMessage;
						public validateParams(): void;
						public constructor(param0: string, param1: string, param2: string, param3: com.pubnub.api.PubNub, param4: com.pubnub.api.managers.TelemetryManager, param5: com.pubnub.api.managers.RetrofitManager);
						public meta(param0: any): com.pubnub.api.endpoints.files.PublishFileMessage;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					}
					export module PublishFileMessage {
						export class Builder extends com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder<com.pubnub.api.endpoints.files.PublishFileMessage> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.PublishFileMessage.Builder>;
							public channel(param0: string): any;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class SendFile extends com.pubnub.api.endpoints.remoteaction.RemoteAction<com.pubnub.api.models.consumer.files.PNFileUploadResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.SendFile>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.consumer.files.PNFileUploadResult>): void;
						public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.files.SendFile.Builder;
						public shouldStore(param0: java.lang.Boolean): com.pubnub.api.endpoints.files.SendFile;
						public ttl(param0: java.lang.Integer): com.pubnub.api.endpoints.files.SendFile;
						public meta(param0: any): com.pubnub.api.endpoints.files.SendFile;
						public silentCancel(): void;
						public sync(): com.pubnub.api.models.consumer.files.PNFileUploadResult;
						public retry(): void;
						public message(param0: any): com.pubnub.api.endpoints.files.SendFile;
						public sync(): any;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public cipherKey(param0: string): com.pubnub.api.endpoints.files.SendFile;
					}
					export module SendFile {
						export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep<com.pubnub.api.endpoints.files.SendFile>>> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.SendFile.Builder>;
							public channel(param0: string): any;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep<com.pubnub.api.endpoints.files.SendFile>>;
						}
						export module Builder {
							export class InnerBuilder extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.SendFile.Builder.InnerBuilder>;
								public inputStream(param0: java.io.InputStream): any;
								public inputStream(param0: java.io.InputStream): com.pubnub.api.endpoints.files.SendFile;
								public fileName(param0: string): any;
								public channel(param0: string): any;
								public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep<com.pubnub.api.endpoints.files.SendFile>>;
								public fileName(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep<com.pubnub.api.endpoints.files.SendFile>;
							}
							export class SendFileRequiredParams {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.SendFile.Builder.SendFileRequiredParams>;
								public inputStream(): java.io.InputStream;
								public toString(): string;
								public constructor(param0: string, param1: string, param2: java.io.InputStream);
								public canEqual(param0: any): boolean;
								public channel(): string;
								public fileName(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export class UploadFile extends com.pubnub.api.endpoints.remoteaction.RemoteAction<java.lang.Void> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.files.UploadFile>;
						public sync(): java.lang.Void;
						public silentCancel(): void;
						public retry(): void;
						public sync(): any;
						public async(param0: com.pubnub.api.callbacks.PNCallback<java.lang.Void>): void;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					}
					export module UploadFile {
						export class Factory {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.UploadFile.Factory>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export module requiredparambuilder {
						export abstract class ChannelFileNameFileIdBuilder<T> extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder<any>>;
							public channel(param0: string): any;
							public constructor(param0: com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>>);
							public static create(param0: com.pubnub.api.endpoints.remoteaction.PNFunction3<any, any, any, any>): com.pubnub.api.endpoints.BuilderSteps.ChannelStep<any>;
							public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
						}
						export module ChannelFileNameFileIdBuilder {
							export class InnerBuilder<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder.InnerBuilder<any>>;
								public channel(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<T>>;
								public fileName(param0: string): com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<T>;
								public channel(param0: string): T;
								public fileName(param0: string): T;
								public fileId(param0: string): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module files {
					export module requiredparambuilder {
						export class FilesBuilderSteps extends com.pubnub.api.endpoints.BuilderSteps {
							public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps>;
							/**
							 * Constructs a new instance of the com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export module FilesBuilderSteps {
							export class FileIdStep<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps$FileIdStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { fileId(param0: string): T });
								public constructor();
								public fileId(param0: string): T;
							}
							export class FileNameStep<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps$FileNameStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { fileName(param0: string): T });
								public constructor();
								public fileName(param0: string): T;
							}
							export class InputStreamStep<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps$InputStreamStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { inputStream(param0: java.io.InputStream): T });
								public constructor();
								public inputStream(param0: java.io.InputStream): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module message_actions {
					export class AddMessageAction extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.message_actions.PNMessageAction>, com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.message_actions.AddMessageAction>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.message_actions.PNMessageAction>>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public channel(param0: string): com.pubnub.api.endpoints.message_actions.AddMessageAction;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public messageAction(param0: com.pubnub.api.models.consumer.message_actions.PNMessageAction): com.pubnub.api.endpoints.message_actions.AddMessageAction;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.message_actions.PNMessageAction>>): com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module message_actions {
					export class GetMessageActions extends com.pubnub.api.endpoints.Endpoint<com.google.gson.JsonObject, com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.message_actions.GetMessageActions>;
						public channel(param0: string): com.pubnub.api.endpoints.message_actions.GetMessageActions;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonObject>;
						public start(param0: java.lang.Long): com.pubnub.api.endpoints.message_actions.GetMessageActions;
						public isAuthRequired(): boolean;
						public end(param0: java.lang.Long): com.pubnub.api.endpoints.message_actions.GetMessageActions;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public createResponse(param0: retrofit2.Response<com.google.gson.JsonObject>): com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public limit(param0: java.lang.Integer): com.pubnub.api.endpoints.message_actions.GetMessageActions;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module message_actions {
					export class RemoveMessageAction extends com.pubnub.api.endpoints.Endpoint<any, com.pubnub.api.models.consumer.message_actions.PNRemoveMessageActionResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.message_actions.RemoveMessageAction>;
						public channel(param0: string): com.pubnub.api.endpoints.message_actions.RemoveMessageAction;
						public messageTimetoken(param0: java.lang.Long): com.pubnub.api.endpoints.message_actions.RemoveMessageAction;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public createResponse(param0: retrofit2.Response<any>): com.pubnub.api.models.consumer.message_actions.PNRemoveMessageActionResult;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public actionTimetoken(param0: java.lang.Long): com.pubnub.api.endpoints.message_actions.RemoveMessageAction;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export abstract class ChannelEnpoint<INPUT, OUTPUT> extends com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint<any, any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.ChannelEnpoint<any, any>>;
						public channel: string;
						public validateParams(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						public silentCancel(): void;
						public sync(): any;
						public retry(): void;
						public constructor(param0: string, param1: com.pubnub.api.PubNub, param2: com.pubnub.api.managers.TelemetryManager, param3: com.pubnub.api.managers.RetrofitManager, param4: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export class CompositeParameterEnricher extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
						public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher>;
						public getInclude(): com.pubnub.api.endpoints.objects_api.utils.Include;
						public validateParameters(): void;
						public getTotalCounter(): com.pubnub.api.endpoints.objects_api.utils.TotalCounter;
						public getLimiter(): com.pubnub.api.endpoints.objects_api.utils.Limiter;
						public getSorter(): com.pubnub.api.endpoints.objects_api.utils.Sorter;
						public constructor(param0: com.pubnub.api.endpoints.objects_api.utils.Include, param1: com.pubnub.api.endpoints.objects_api.utils.Sorter, param2: com.pubnub.api.endpoints.objects_api.utils.Pager, param3: com.pubnub.api.endpoints.objects_api.utils.Filter, param4: com.pubnub.api.endpoints.objects_api.utils.TotalCounter, param5: com.pubnub.api.endpoints.objects_api.utils.Limiter);
						public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
						public getFilter(): com.pubnub.api.endpoints.objects_api.utils.Filter;
						public getPager(): com.pubnub.api.endpoints.objects_api.utils.Pager;
						public static createDefault(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export abstract class ObjectApiEndpoint<INPUT, OUTPUT> extends com.pubnub.api.endpoints.Endpoint<any, any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint<any, any>>;
						public isAuthRequired(): boolean;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						public silentCancel(): void;
						public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public validateParams(): void;
						public sync(): any;
						public retry(): void;
						public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export abstract class UUIDEndpoint<SELF, INPUT, OUTPUT> extends com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint<any, any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.UUIDEndpoint<any, any, any>>;
						public uuid(param0: string): any;
						public validateParams(): void;
						public effectiveUuid(): string;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						public silentCancel(): void;
						public sync(): any;
						public retry(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export abstract class GetAllChannelsMetadata extends com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>, com.pubnub.api.models.consumer.objects_api.channel.PNGetAllChannelsMetadataResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.GetAllChannelsMetadata>;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public static create(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.channel.GetAllChannelsMetadata;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export class GetAllChannelsMetadataCommand extends com.pubnub.api.endpoints.objects_api.channel.GetAllChannelsMetadata {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.GetAllChannelsMetadataCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>): com.pubnub.api.models.consumer.objects_api.channel.PNGetAllChannelsMetadataResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export abstract class GetChannelMetadata extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>, com.pubnub.api.models.consumer.objects_api.channel.PNGetChannelMetadataResult> implements com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata>;
							public silentCancel(): void;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata.Builder;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						}
						export module GetChannelMetadata {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata.Builder>;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channel(param0: string): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export class GetChannelMetadataCommand extends com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata implements com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.GetChannelMetadataCommand>;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>): com.pubnub.api.models.consumer.objects_api.channel.PNGetChannelMetadataResult;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export class RemoveChannelMetadata extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>, com.pubnub.api.models.consumer.objects_api.channel.PNRemoveChannelMetadataResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>): com.pubnub.api.models.consumer.objects_api.channel.PNRemoveChannelMetadataResult;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata.Builder;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						}
						export module RemoveChannelMetadata {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata.Builder>;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.channel.RemoveChannelMetadata;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channel(param0: string): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export abstract class SetChannelMetadata extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>, com.pubnub.api.models.consumer.objects_api.channel.PNSetChannelMetadataResult> implements com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata>;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata.Builder;
							public silentCancel(): void;
							public custom(param0: java.util.Map<string, any>): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public name(param0: string): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public description(param0: string): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
						}
						export module SetChannelMetadata {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata.Builder>;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
								public channel(param0: string): any;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module channel {
						export class SetChannelMetadataCommand extends com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata implements com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadataCommand>;
							public custom(param0: java.util.Map<string, any>): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>): com.pubnub.api.models.consumer.objects_api.channel.PNSetChannelMetadataResult;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
							public name(param0: string): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
							public description(param0: string): com.pubnub.api.endpoints.objects_api.channel.SetChannelMetadata;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export abstract class GetChannelMembers extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>, com.pubnub.api.models.consumer.objects_api.member.PNGetChannelMembersResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.GetChannelMembers>;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.members.GetChannelMembers.Builder;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
						export module GetChannelMembers {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.members.GetChannelMembers> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.GetChannelMembers.Builder>;
								public channel(param0: string): any;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.members.GetChannelMembers;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export class GetChannelMembersCommand extends com.pubnub.api.endpoints.objects_api.members.GetChannelMembers {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.GetChannelMembersCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>): com.pubnub.api.models.consumer.objects_api.member.PNGetChannelMembersResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export abstract class ManageChannelMembers extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>, com.pubnub.api.models.consumer.objects_api.member.PNManageChannelMembersResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers>;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers.Builder;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
						export module ManageChannelMembers {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep<com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers, com.pubnub.api.models.consumer.objects_api.member.PNUUID>> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers.Builder>;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep<com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers, com.pubnub.api.models.consumer.objects_api.member.PNUUID>;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channel(param0: string): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export class ManageChannelMembersCommand extends com.pubnub.api.endpoints.objects_api.members.ManageChannelMembers {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.ManageChannelMembersCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>): com.pubnub.api.models.consumer.objects_api.member.PNManageChannelMembersResult;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export abstract class RemoveChannelMembers extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>, com.pubnub.api.models.consumer.objects_api.member.PNRemoveChannelMembersResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers>;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers.Builder;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
						export module RemoveChannelMembers {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep<com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers>> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers.Builder>;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channel(param0: string): any;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep<com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export class RemoveChannelMembersCommand extends com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembers {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.RemoveChannelMembersCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>): com.pubnub.api.models.consumer.objects_api.member.PNRemoveChannelMembersResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export abstract class SetChannelMembers extends com.pubnub.api.endpoints.objects_api.ChannelEnpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>, com.pubnub.api.models.consumer.objects_api.member.PNSetChannelMembersResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.SetChannelMembers>;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.members.SetChannelMembers.Builder;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
						export module SetChannelMembers {
							export class Builder extends com.pubnub.api.endpoints.BuilderSteps.ChannelStep<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep<com.pubnub.api.endpoints.objects_api.members.SetChannelMembers>> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.SetChannelMembers.Builder>;
								public channel(param0: string): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep<com.pubnub.api.endpoints.objects_api.members.SetChannelMembers>;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channel(param0: string): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module members {
						export class SetChannelMembersCommand extends com.pubnub.api.endpoints.objects_api.members.SetChannelMembers {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.members.SetChannelMembersCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>): com.pubnub.api.models.consumer.objects_api.member.PNSetChannelMembersResult;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export abstract class GetMemberships extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.memberships.GetMemberships, com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>, com.pubnub.api.models.consumer.objects_api.membership.PNGetMembershipsResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.GetMemberships>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public static create(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.memberships.GetMemberships;
							public limit(param0: number): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
							public includeCustom(param0: boolean): any;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export class GetMembershipsCommand extends com.pubnub.api.endpoints.objects_api.memberships.GetMemberships {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.GetMembershipsCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>): com.pubnub.api.models.consumer.objects_api.membership.PNGetMembershipsResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export abstract class ManageMemberships extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships, com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>, com.pubnub.api.models.consumer.objects_api.membership.PNManageMembershipResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships>;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships.Builder;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
						}
						export module ManageMemberships {
							export class Builder extends com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships, com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships.Builder>;
								public set(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships, com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>;
								public remove(param0: java.util.Collection<any>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep<any, any>;
								public remove(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep<com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships, com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public set(param0: java.util.Collection<any>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep<any, any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export class ManageMembershipsCommand extends com.pubnub.api.endpoints.objects_api.memberships.ManageMemberships {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.ManageMembershipsCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>): com.pubnub.api.models.consumer.objects_api.membership.PNManageMembershipResult;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export abstract class RemoveMemberships extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships, com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>, com.pubnub.api.models.consumer.objects_api.membership.PNRemoveMembershipResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships>;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships.Builder;
							public silentCancel(): void;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
						}
						export module RemoveMemberships {
							export class Builder extends com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.ChannelMembershipsStep<com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships.Builder>;
								public channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export class RemoveMembershipsCommand extends com.pubnub.api.endpoints.objects_api.memberships.RemoveMemberships {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.RemoveMembershipsCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>): com.pubnub.api.models.consumer.objects_api.membership.PNRemoveMembershipResult;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export abstract class SetMemberships extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.memberships.SetMemberships, com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>, com.pubnub.api.models.consumer.objects_api.membership.PNSetMembershipResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.SetMemberships>;
							public includeTotalCount(param0: boolean): any;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public filter(param0: string): any;
							public silentCancel(): void;
							public limit(param0: number): any;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public static builder(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.memberships.SetMemberships.Builder;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
						}
						export module SetMemberships {
							export class Builder extends com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.ChannelMembershipsStep<com.pubnub.api.endpoints.objects_api.memberships.SetMemberships> {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.SetMemberships.Builder>;
								public channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): com.pubnub.api.endpoints.objects_api.memberships.SetMemberships;
								public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
								public channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module memberships {
						export class SetMembershipsCommand extends com.pubnub.api.endpoints.objects_api.memberships.SetMemberships {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.memberships.SetMembershipsCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): any;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>): com.pubnub.api.models.consumer.objects_api.membership.PNSetMembershipResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class Filter extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Filter>;
							public constructor();
							public setFilter(param0: string): void;
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
						}
						export module Filter {
							export class FilterAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Filter.FilterAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Filter$FilterAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { filter(param0: string): T });
								public constructor();
								public filter(param0: string): T;
							}
							export class HavingFilter<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Filter.HavingFilter<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Filter$HavingFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { filter(param0: string): T; filter(param0: string): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public filter(param0: string): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class HavingCompositeParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.HavingCompositeParameterEnricher>;
							/**
							 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.HavingCompositeParameterEnricher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
							public constructor();
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class Include extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include>;
							public constructor();
							public addInclusionFlag(param0: string): void;
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
						}
						export module Include {
							export class ChannelIncludeAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.ChannelIncludeAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$ChannelIncludeAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): T });
								public constructor();
								public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): T;
							}
							export class CustomIncludeAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$CustomIncludeAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeCustom(param0: boolean): T });
								public constructor();
								public includeCustom(param0: boolean): T;
							}
							export class HavingChannelInclude<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.HavingChannelInclude<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$HavingChannelInclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): T; includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
								public includeChannel(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel): T;
							}
							export class HavingCustomInclude<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$HavingCustomInclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeCustom(param0: boolean): T; includeCustom(param0: boolean): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
								public includeCustom(param0: boolean): T;
							}
							export class HavingUUIDInclude<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.HavingUUIDInclude<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$HavingUUIDInclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): T; includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class PNChannelDetailsLevel {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel>;
								public static CHANNEL: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel;
								public static CHANNEL_WITH_CUSTOM: com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel;
								public static values(): androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel>;
								public static valueOf(param0: string): com.pubnub.api.endpoints.objects_api.utils.Include.PNChannelDetailsLevel;
							}
							export class PNUUIDDetailsLevel {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel>;
								public static UUID: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel;
								public static UUID_WITH_CUSTOM: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel;
								public static values(): androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel>;
								public static valueOf(param0: string): com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel;
							}
							export class UUIDIncludeAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Include.UUIDIncludeAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Include$UUIDIncludeAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): T });
								public constructor();
								public includeUUID(param0: com.pubnub.api.endpoints.objects_api.utils.Include.PNUUIDDetailsLevel): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class Limiter extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Limiter>;
							public constructor();
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
							public setLimit(param0: number): void;
						}
						export module Limiter {
							export class HavingLimiter<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Limiter.HavingLimiter<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Limiter$HavingLimiter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { limit(param0: number): T; limit(param0: number): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public limit(param0: number): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class LimitAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Limiter.LimitAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Limiter$LimitAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { limit(param0: number): T });
								public constructor();
								public limit(param0: number): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class ListCapabilities {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ListCapabilities>;
							/**
							 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ListCapabilities interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export module ListCapabilities {
							export class HavingListCapabilites<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ListCapabilities.HavingListCapabilites<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ListCapabilities$HavingListCapabilites interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									limit(param0: number): T;
									includeTotalCount(param0: boolean): T;
									sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
									page(param0: com.pubnub.api.models.consumer.PNPage): T;
									filter(param0: string): T;
									limit(param0: number): T;
									getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
									includeTotalCount(param0: boolean): T;
									getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
									sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
									getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
									page(param0: com.pubnub.api.models.consumer.PNPage): T;
									getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
									filter(param0: string): T;
									getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
								});
								public constructor();
								public page(param0: com.pubnub.api.models.consumer.PNPage): T;
								public includeTotalCount(param0: boolean): T;
								public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
								public filter(param0: string): T;
								public limit(param0: number): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class ListCapabilitiesAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ListCapabilities.ListCapabilitiesAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ListCapabilities$ListCapabilitiesAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { limit(param0: number): T; includeTotalCount(param0: boolean): T; sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T; page(param0: com.pubnub.api.models.consumer.PNPage): T; filter(param0: string): T });
								public constructor();
								public page(param0: com.pubnub.api.models.consumer.PNPage): T;
								public includeTotalCount(param0: boolean): T;
								public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
								public filter(param0: string): T;
								public limit(param0: number): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class ObjectsBuilderSteps extends com.pubnub.api.endpoints.BuilderSteps {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps>;
							/**
							 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export module ObjectsBuilderSteps {
							export class ChannelMembershipsStep<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.ChannelMembershipsStep<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps$ChannelMembershipsStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): T });
								public constructor();
								public channelMemberships(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>): T;
							}
							export class RemoveOrSetStep<T, E> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep<any, any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps$RemoveOrSetStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { set(param0: java.util.Collection<E>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep<T, E>; remove(param0: java.util.Collection<E>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep<T, E> });
								public constructor();
								public set(param0: java.util.Collection<E>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep<T, E>;
								public remove(param0: java.util.Collection<E>): com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep<T, E>;
							}
							export module RemoveOrSetStep {
								export class RemoveStep<T, E> extends java.lang.Object {
									public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep<any, any>>;
									/**
									 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps$RemoveOrSetStep$RemoveStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { remove(param0: java.util.Collection<E>): T });
									public constructor();
									public remove(param0: java.util.Collection<E>): T;
								}
								export class SetStep<T, E> extends java.lang.Object {
									public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep<any, any>>;
									/**
									 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps$RemoveOrSetStep$SetStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { set(param0: java.util.Collection<E>): T });
									public constructor();
									public set(param0: java.util.Collection<E>): T;
								}
							}
							export class UUIDsStep<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps$UUIDsStep interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { uuids(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>): T });
								public constructor();
								public uuids(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class PNSortKey {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>;
							public static of(param0: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key, param1: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir): com.pubnub.api.endpoints.objects_api.utils.PNSortKey;
							public toSortParameter(): string;
							public static of(param0: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key): com.pubnub.api.endpoints.objects_api.utils.PNSortKey;
							public static desc(param0: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key): com.pubnub.api.endpoints.objects_api.utils.PNSortKey;
							public static asc(param0: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key): com.pubnub.api.endpoints.objects_api.utils.PNSortKey;
						}
						export module PNSortKey {
							export class Dir {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir>;
								public static ASC: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir;
								public static DESC: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir;
								public static values(): androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir>;
								public static valueOf(param0: string): com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Dir;
							}
							export class Key {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key>;
								public static ID: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key;
								public static NAME: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key;
								public static UPDATED: com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key;
								public static values(): androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key>;
								public static valueOf(param0: string): com.pubnub.api.endpoints.objects_api.utils.PNSortKey.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class Pager extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Pager>;
							public constructor();
							public setPage(param0: com.pubnub.api.models.consumer.PNPage): void;
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
						}
						export module Pager {
							export class HavingPager<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Pager.HavingPager<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Pager$HavingPager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { page(param0: com.pubnub.api.models.consumer.PNPage): T; page(param0: com.pubnub.api.models.consumer.PNPage): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public page(param0: com.pubnub.api.models.consumer.PNPage): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class PagingAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Pager.PagingAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Pager$PagingAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { page(param0: com.pubnub.api.models.consumer.PNPage): T });
								public constructor();
								public page(param0: com.pubnub.api.models.consumer.PNPage): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher>;
							/**
							 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>; validateParameters(): void });
							public constructor();
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class Sorter extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Sorter>;
							public constructor();
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public addSortKeys(param0: java.util.List<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): void;
							public validateParameters(): void;
						}
						export module Sorter {
							export class HavingSorter<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Sorter.HavingSorter<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Sorter$HavingSorter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T; sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class SortingAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.Sorter.SortingAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.Sorter$SortingAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T });
								public constructor();
								public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module utils {
						export class TotalCounter extends com.pubnub.api.endpoints.objects_api.utils.ParameterEnricher {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.TotalCounter>;
							public constructor();
							public setIncludeTotalCount(param0: boolean): void;
							public enrichParameters(param0: java.util.Map<string, string>): java.util.Map<string, string>;
							public validateParameters(): void;
						}
						export module TotalCounter {
							export class HavingTotalCounter<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.TotalCounter.HavingTotalCounter<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.TotalCounter$HavingTotalCounter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeTotalCount(param0: boolean): T; includeTotalCount(param0: boolean): T; getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher });
								public constructor();
								public includeTotalCount(param0: boolean): T;
								public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							}
							export class TotalCountAware<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.utils.TotalCounter.TotalCountAware<any>>;
								/**
								 * Constructs a new instance of the com.pubnub.api.endpoints.objects_api.utils.TotalCounter$TotalCountAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { includeTotalCount(param0: boolean): T });
								public constructor();
								public includeTotalCount(param0: boolean): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export abstract class GetAllUUIDMetadata extends com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>, com.pubnub.api.models.consumer.objects_api.uuid.PNGetAllUUIDMetadataResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.GetAllUUIDMetadata>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
							public static create(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.uuid.GetAllUUIDMetadata;
							public includeCustom(param0: boolean): any;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export class GetAllUUIDMetadataCommand extends com.pubnub.api.endpoints.objects_api.uuid.GetAllUUIDMetadata {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.GetAllUUIDMetadataCommand>;
							public includeTotalCount(param0: boolean): any;
							public filter(param0: string): any;
							public limit(param0: number): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public page(param0: com.pubnub.api.models.consumer.PNPage): any;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
							public sort(param0: androidNative.Array<com.pubnub.api.endpoints.objects_api.utils.PNSortKey>): any;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>): com.pubnub.api.models.consumer.objects_api.uuid.PNGetAllUUIDMetadataResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export abstract class GetUUIDMetadata extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata, com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>, com.pubnub.api.models.consumer.objects_api.uuid.PNGetUUIDMetadataResult> implements com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware<com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata>;
							public silentCancel(): void;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public static create(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export class GetUUIDMetadataCommand extends com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata implements com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude<com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.GetUUIDMetadataCommand>;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>): com.pubnub.api.models.consumer.objects_api.uuid.PNGetUUIDMetadataResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export class RemoveUUIDMetadata extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.uuid.RemoveUUIDMetadata, com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>, com.pubnub.api.models.consumer.objects_api.uuid.PNRemoveUUIDMetadataResult> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.RemoveUUIDMetadata>;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
							public createResponse(param0: retrofit2.Response<any>): any;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public sync(): any;
							public retry(): void;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>): com.pubnub.api.models.consumer.objects_api.uuid.PNRemoveUUIDMetadataResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager, param3: com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export abstract class SetUUIDMetadata extends com.pubnub.api.endpoints.objects_api.UUIDEndpoint<com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata, com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>, com.pubnub.api.models.consumer.objects_api.uuid.PNSetUUIDMetadataResult> implements com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware<com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata>;
							public custom(param0: java.util.Map<string, any>): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public silentCancel(): void;
							public profileUrl(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public externalId(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public email(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public includeCustom(param0: boolean): any;
							public sync(): any;
							public retry(): void;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public static create(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public name(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module objects_api {
					export module uuid {
						export class SetUUIDMetadataCommand extends com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata implements com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude<com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata> {
							public static class: java.lang.Class<com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadataCommand>;
							public custom(param0: java.util.Map<string, any>): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public profileUrl(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public externalId(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<any>;
							public email(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public sync(): any;
							public retry(): void;
							public executeCommand(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
							public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>): com.pubnub.api.models.consumer.objects_api.uuid.PNSetUUIDMetadataResult;
							public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
							public name(param0: string): com.pubnub.api.endpoints.objects_api.uuid.SetUUIDMetadata;
							public getCompositeParameterEnricher(): com.pubnub.api.endpoints.objects_api.CompositeParameterEnricher;
							public silentCancel(): void;
							public getOperationType(): com.pubnub.api.enums.PNOperationType;
							public createResponse(param0: retrofit2.Response<any>): any;
							public includeCustom(param0: boolean): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class GetState extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>, com.pubnub.api.models.consumer.presence.PNGetStateResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.GetState>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						public isAuthRequired(): boolean;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.GetState;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>): com.pubnub.api.models.consumer.presence.PNGetStateResult;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.GetState;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public uuid(param0: string): com.pubnub.api.endpoints.presence.GetState;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class Heartbeat extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, java.lang.Boolean> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.Heartbeat>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): java.lang.Boolean;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.Heartbeat;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.Heartbeat;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class HereNow extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>, com.pubnub.api.models.consumer.presence.PNHereNowResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.HereNow>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						public isAuthRequired(): boolean;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.HereNow;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>): com.pubnub.api.models.consumer.presence.PNHereNowResult;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.HereNow;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public includeUUIDs(param0: java.lang.Boolean): com.pubnub.api.endpoints.presence.HereNow;
						public includeState(param0: java.lang.Boolean): com.pubnub.api.endpoints.presence.HereNow;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class Leave extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<any>, java.lang.Boolean> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.Leave>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<any>>): java.lang.Boolean;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.Leave;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.Leave;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public getAffectedChannels(): java.util.List<string>;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class SetState extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>, com.pubnub.api.models.consumer.presence.PNSetStateResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.SetState>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						public isAuthRequired(): boolean;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.SetState;
						public silentCancel(): void;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.presence.SetState;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.SubscriptionManager, param2: com.pubnub.api.managers.TelemetryManager, param3: com.pubnub.api.managers.RetrofitManager);
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public uuid(param0: string): com.pubnub.api.endpoints.presence.SetState;
						public createResponse(param0: retrofit2.Response<any>): any;
						public state(param0: any): com.pubnub.api.endpoints.presence.SetState;
						public sync(): any;
						public retry(): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>): com.pubnub.api.models.consumer.presence.PNSetStateResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module presence {
					export class WhereNow extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.presence.WhereNowPayload>, com.pubnub.api.models.consumer.presence.PNWhereNowResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.presence.WhereNow>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.presence.WhereNowPayload>>): com.pubnub.api.models.consumer.presence.PNWhereNowResult;
						public getAffectedChannelGroups(): java.util.List<string>;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.presence.WhereNowPayload>>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public uuid(param0: string): com.pubnub.api.endpoints.presence.WhereNow;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module pubsub {
					export class Publish extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.PNPublishResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.pubsub.Publish>;
						public ttl(param0: java.lang.Integer): com.pubnub.api.endpoints.pubsub.Publish;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.PNPublishResult;
						public usePOST(param0: java.lang.Boolean): com.pubnub.api.endpoints.pubsub.Publish;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.PublishSequenceManager, param2: com.pubnub.api.managers.TelemetryManager, param3: com.pubnub.api.managers.RetrofitManager);
						public replicate(param0: java.lang.Boolean): com.pubnub.api.endpoints.pubsub.Publish;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public shouldStore(param0: java.lang.Boolean): com.pubnub.api.endpoints.pubsub.Publish;
						public getAffectedChannelGroups(): java.util.List<string>;
						public meta(param0: any): com.pubnub.api.endpoints.pubsub.Publish;
						public channel(param0: string): com.pubnub.api.endpoints.pubsub.Publish;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						public message(param0: any): com.pubnub.api.endpoints.pubsub.Publish;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module pubsub {
					export class Signal extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.PNPublishResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.pubsub.Signal>;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.PNPublishResult;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public message(param0: any): com.pubnub.api.endpoints.pubsub.Signal;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public channel(param0: string): com.pubnub.api.endpoints.pubsub.Signal;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module pubsub {
					export class Subscribe extends com.pubnub.api.endpoints.Endpoint<com.pubnub.api.models.server.SubscribeEnvelope, com.pubnub.api.models.server.SubscribeEnvelope> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.pubsub.Subscribe>;
						public isAuthRequired(): boolean;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.SubscribeEnvelope>;
						public silentCancel(): void;
						public channelGroups(param0: java.util.List<string>): com.pubnub.api.endpoints.pubsub.Subscribe;
						public timetoken(param0: java.lang.Long): com.pubnub.api.endpoints.pubsub.Subscribe;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public getAffectedChannelGroups(): java.util.List<string>;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.RetrofitManager);
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public createResponse(param0: retrofit2.Response<com.pubnub.api.models.server.SubscribeEnvelope>): com.pubnub.api.models.server.SubscribeEnvelope;
						public validateParams(): void;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.pubsub.Subscribe;
						public async(param0: com.pubnub.api.callbacks.PNCallback<com.pubnub.api.models.server.SubscribeEnvelope>): void;
						public filterExpression(param0: string): com.pubnub.api.endpoints.pubsub.Subscribe;
						public createResponse(param0: retrofit2.Response<any>): any;
						public region(param0: string): com.pubnub.api.endpoints.pubsub.Subscribe;
						public sync(): any;
						public retry(): void;
						public state(param0: any): com.pubnub.api.endpoints.pubsub.Subscribe;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module push {
					export class AddChannelsToPush extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.push.PNPushAddChannelResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.push.AddChannelsToPush>;
						public pushType(param0: com.pubnub.api.enums.PNPushType): com.pubnub.api.endpoints.push.AddChannelsToPush;
						public environment(param0: com.pubnub.api.enums.PNPushEnvironment): com.pubnub.api.endpoints.push.AddChannelsToPush;
						public deviceId(param0: string): com.pubnub.api.endpoints.push.AddChannelsToPush;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.push.AddChannelsToPush;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.push.PNPushAddChannelResult;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						public topic(param0: string): com.pubnub.api.endpoints.push.AddChannelsToPush;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module push {
					export class ListPushProvisions extends com.pubnub.api.endpoints.Endpoint<java.util.List<string>, com.pubnub.api.models.consumer.push.PNPushListProvisionsResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.push.ListPushProvisions>;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<string>>;
						public topic(param0: string): com.pubnub.api.endpoints.push.ListPushProvisions;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public pushType(param0: com.pubnub.api.enums.PNPushType): com.pubnub.api.endpoints.push.ListPushProvisions;
						public createResponse(param0: retrofit2.Response<java.util.List<string>>): com.pubnub.api.models.consumer.push.PNPushListProvisionsResult;
						public deviceId(param0: string): com.pubnub.api.endpoints.push.ListPushProvisions;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public environment(param0: com.pubnub.api.enums.PNPushEnvironment): com.pubnub.api.endpoints.push.ListPushProvisions;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module push {
					export class RemoveAllPushChannelsForDevice extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice>;
						public environment(param0: com.pubnub.api.enums.PNPushEnvironment): com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public deviceId(param0: string): com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public pushType(param0: com.pubnub.api.enums.PNPushType): com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice;
						public validateParams(): void;
						public topic(param0: string): com.pubnub.api.endpoints.push.RemoveAllPushChannelsForDevice;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module push {
					export class RemoveChannelsFromPush extends com.pubnub.api.endpoints.Endpoint<java.util.List<any>, com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.push.RemoveChannelsFromPush>;
						public channels(param0: java.util.List<string>): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
						public isAuthRequired(): boolean;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.TelemetryManager, param2: com.pubnub.api.managers.RetrofitManager);
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOperationType(): com.pubnub.api.enums.PNOperationType;
						public validateParams(): void;
						public pushType(param0: com.pubnub.api.enums.PNPushType): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
						public createResponse(param0: retrofit2.Response<any>): any;
						public sync(): any;
						public retry(): void;
						public doWork(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						public createResponse(param0: retrofit2.Response<java.util.List<any>>): com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult;
						public deviceId(param0: string): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
						public environment(param0: com.pubnub.api.enums.PNPushEnvironment): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
						public topic(param0: string): com.pubnub.api.endpoints.push.RemoveChannelsFromPush;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class ComposableRemoteAction<T, U> extends com.pubnub.api.endpoints.remoteaction.RemoteAction<any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction<any, any>>;
						public then(param0: com.pubnub.api.endpoints.remoteaction.RemoteActionFactory<any, any>): com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction<any, any>;
						public silentCancel(): void;
						public constructor(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<any>, param1: com.pubnub.api.endpoints.remoteaction.RemoteActionFactory<any, any>, param2: java.lang.Boolean);
						public sync(): any;
						public retry(): void;
						public checkpoint(): com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction<any, any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public static firstDo(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<any>): com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction.ComposableBuilder<any>;
					}
					export module ComposableRemoteAction {
						export class ComposableBuilder<T> extends java.lang.Object {
							public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction.ComposableBuilder<any>>;
							public checkpoint(): com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction.ComposableBuilder<T>;
							public constructor(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<T>);
							public then(param0: com.pubnub.api.endpoints.remoteaction.RemoteActionFactory<any, any>): com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction<any, any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class MappingRemoteAction<T, U> extends com.pubnub.api.endpoints.remoteaction.RemoteAction<any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.MappingRemoteAction<any, any>>;
						public silentCancel(): void;
						public sync(): any;
						public retry(): void;
						public static map(param0: any, param1: com.pubnub.api.endpoints.remoteaction.PNFunction<any, any>): com.pubnub.api.endpoints.remoteaction.RemoteAction<any>;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class PNFunction<INPUT, OUTPUT> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.PNFunction<any, any>>;
						/**
						 * Constructs a new instance of the com.pubnub.api.endpoints.remoteaction.PNFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { invoke(param0: INPUT): OUTPUT });
						public constructor();
						public invoke(param0: INPUT): OUTPUT;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class PNFunction3<INPUT1, INPUT2, INPUT3, OUTPUT> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.PNFunction3<any, any, any, any>>;
						/**
						 * Constructs a new instance of the com.pubnub.api.endpoints.remoteaction.PNFunction3<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { invoke(param0: INPUT1, param1: INPUT2, param2: INPUT3): OUTPUT });
						public constructor();
						public invoke(param0: INPUT1, param1: INPUT2, param2: INPUT3): OUTPUT;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class RemoteAction<Output> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.RemoteAction<any>>;
						/**
						 * Constructs a new instance of the com.pubnub.api.endpoints.remoteaction.RemoteAction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { sync(): Output; async(param0: com.pubnub.api.callbacks.PNCallback<Output>): void; retry(): void; silentCancel(): void });
						public constructor();
						public async(param0: com.pubnub.api.callbacks.PNCallback<Output>): void;
						public silentCancel(): void;
						public retry(): void;
						public sync(): Output;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class RemoteActionFactory<T, U> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.RemoteActionFactory<any, any>>;
						/**
						 * Constructs a new instance of the com.pubnub.api.endpoints.remoteaction.RemoteActionFactory<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { create(param0: T): com.pubnub.api.endpoints.remoteaction.RemoteAction<U> });
						public constructor();
						public create(param0: T): com.pubnub.api.endpoints.remoteaction.RemoteAction<U>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module remoteaction {
					export class RetryingRemoteAction<T> extends com.pubnub.api.endpoints.remoteaction.RemoteAction<any> {
						public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.RetryingRemoteAction<any>>;
						public static autoRetry(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<any>, param1: number, param2: com.pubnub.api.enums.PNOperationType, param3: java.util.concurrent.ExecutorService): com.pubnub.api.endpoints.remoteaction.RetryingRemoteAction<any>;
						public silentCancel(): void;
						public sync(): any;
						public retry(): void;
						public async(param0: com.pubnub.api.callbacks.PNCallback<any>): void;
						public constructor(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<any>, param1: number, param2: com.pubnub.api.enums.PNOperationType, param3: java.util.concurrent.ExecutorService);
					}
					export module RetryingRemoteAction {
						export class ResultAndStatus<T> extends java.lang.Object {
							public static class: java.lang.Class<com.pubnub.api.endpoints.remoteaction.RetryingRemoteAction.ResultAndStatus<any>>;
							public getResult(): T;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: T, param1: com.pubnub.api.models.consumer.PNStatus);
							public getStatus(): com.pubnub.api.models.consumer.PNStatus;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module endpoints {
				export module vendor {
					export class AppEngineFactory {
						public static class: java.lang.Class<com.pubnub.api.endpoints.vendor.AppEngineFactory>;
						public timeout(): okio.Timeout;
						public cancel(): void;
						public isCanceled(): boolean;
						public enqueue(param0: okhttp3.Callback): void;
						public isExecuted(): boolean;
						public request(): okhttp3.Request;
						public execute(): okhttp3.Response;
						public clone(): okhttp3.Call;
					}
					export module AppEngineFactory {
						export class Factory {
							public static class: java.lang.Class<com.pubnub.api.endpoints.vendor.AppEngineFactory.Factory>;
							public newCall(param0: okhttp3.Request): okhttp3.Call;
							public constructor(param0: com.pubnub.api.PubNub);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNHeartbeatNotificationOptions {
					public static class: java.lang.Class<com.pubnub.api.enums.PNHeartbeatNotificationOptions>;
					public static NONE: com.pubnub.api.enums.PNHeartbeatNotificationOptions;
					public static FAILURES: com.pubnub.api.enums.PNHeartbeatNotificationOptions;
					public static ALL: com.pubnub.api.enums.PNHeartbeatNotificationOptions;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNHeartbeatNotificationOptions>;
					public static valueOf(param0: string): com.pubnub.api.enums.PNHeartbeatNotificationOptions;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNLogVerbosity {
					public static class: java.lang.Class<com.pubnub.api.enums.PNLogVerbosity>;
					public static NONE: com.pubnub.api.enums.PNLogVerbosity;
					public static BODY: com.pubnub.api.enums.PNLogVerbosity;
					public static valueOf(param0: string): com.pubnub.api.enums.PNLogVerbosity;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNLogVerbosity>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNMemberFields {
					public static class: java.lang.Class<com.pubnub.api.enums.PNMemberFields>;
					public static CUSTOM: com.pubnub.api.enums.PNMemberFields;
					public static USER: com.pubnub.api.enums.PNMemberFields;
					public static USER_CUSTOM: com.pubnub.api.enums.PNMemberFields;
					public toString(): string;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNMemberFields>;
					public static valueOf(param0: string): com.pubnub.api.enums.PNMemberFields;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNMembershipFields {
					public static class: java.lang.Class<com.pubnub.api.enums.PNMembershipFields>;
					public static CUSTOM: com.pubnub.api.enums.PNMembershipFields;
					public static SPACE: com.pubnub.api.enums.PNMembershipFields;
					public static SPACE_CUSTOM: com.pubnub.api.enums.PNMembershipFields;
					public toString(): string;
					public static valueOf(param0: string): com.pubnub.api.enums.PNMembershipFields;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNMembershipFields>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNOperationType {
					public static class: java.lang.Class<com.pubnub.api.enums.PNOperationType>;
					public static PNSubscribeOperation: com.pubnub.api.enums.PNOperationType;
					public static PNUnsubscribeOperation: com.pubnub.api.enums.PNOperationType;
					public static PNPublishOperation: com.pubnub.api.enums.PNOperationType;
					public static PNSignalOperation: com.pubnub.api.enums.PNOperationType;
					public static PNHistoryOperation: com.pubnub.api.enums.PNOperationType;
					public static PNFetchMessagesOperation: com.pubnub.api.enums.PNOperationType;
					public static PNDeleteMessagesOperation: com.pubnub.api.enums.PNOperationType;
					public static PNMessageCountOperation: com.pubnub.api.enums.PNOperationType;
					public static PNWhereNowOperation: com.pubnub.api.enums.PNOperationType;
					public static PNHeartbeatOperation: com.pubnub.api.enums.PNOperationType;
					public static PNSetStateOperation: com.pubnub.api.enums.PNOperationType;
					public static PNAddChannelsToGroupOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveChannelsFromGroupOperation: com.pubnub.api.enums.PNOperationType;
					public static PNChannelGroupsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveGroupOperation: com.pubnub.api.enums.PNOperationType;
					public static PNChannelsForGroupOperation: com.pubnub.api.enums.PNOperationType;
					public static PNPushNotificationEnabledChannelsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNAddPushNotificationsOnChannelsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemovePushNotificationsFromChannelsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveAllPushNotificationsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNTimeOperation: com.pubnub.api.enums.PNOperationType;
					public static PNHereNowOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetState: com.pubnub.api.enums.PNOperationType;
					public static PNAccessManagerAudit: com.pubnub.api.enums.PNOperationType;
					public static PNAccessManagerGrant: com.pubnub.api.enums.PNOperationType;
					public static PNSetUuidMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetUuidMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetAllUuidMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveUuidMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNSetChannelMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetChannelMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetAllChannelsMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveChannelMetadataOperation: com.pubnub.api.enums.PNOperationType;
					public static PNSetMembershipsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetMembershipsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveMembershipsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNManageMembershipsOperation: com.pubnub.api.enums.PNOperationType;
					public static PNSetChannelMembersOperation: com.pubnub.api.enums.PNOperationType;
					public static PNGetChannelMembersOperation: com.pubnub.api.enums.PNOperationType;
					public static PNRemoveChannelMembersOperation: com.pubnub.api.enums.PNOperationType;
					public static PNManageChannelMembersOperation: com.pubnub.api.enums.PNOperationType;
					public static PNAccessManagerGrantToken: com.pubnub.api.enums.PNOperationType;
					public static PNAddMessageAction: com.pubnub.api.enums.PNOperationType;
					public static PNGetMessageActions: com.pubnub.api.enums.PNOperationType;
					public static PNDeleteMessageAction: com.pubnub.api.enums.PNOperationType;
					public static PNFileAction: com.pubnub.api.enums.PNOperationType;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNOperationType>;
					public static valueOf(param0: string): com.pubnub.api.enums.PNOperationType;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNPushEnvironment {
					public static class: java.lang.Class<com.pubnub.api.enums.PNPushEnvironment>;
					public static DEVELOPMENT: com.pubnub.api.enums.PNPushEnvironment;
					public static PRODUCTION: com.pubnub.api.enums.PNPushEnvironment;
					public static valueOf(param0: string): com.pubnub.api.enums.PNPushEnvironment;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNPushEnvironment>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNPushType {
					public static class: java.lang.Class<com.pubnub.api.enums.PNPushType>;
					public static APNS: com.pubnub.api.enums.PNPushType;
					public static MPNS: com.pubnub.api.enums.PNPushType;
					public static GCM: com.pubnub.api.enums.PNPushType;
					public static FCM: com.pubnub.api.enums.PNPushType;
					public static APNS2: com.pubnub.api.enums.PNPushType;
					public toString(): string;
					public static valueOf(param0: string): com.pubnub.api.enums.PNPushType;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNPushType>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNReconnectionPolicy {
					public static class: java.lang.Class<com.pubnub.api.enums.PNReconnectionPolicy>;
					public static NONE: com.pubnub.api.enums.PNReconnectionPolicy;
					public static LINEAR: com.pubnub.api.enums.PNReconnectionPolicy;
					public static EXPONENTIAL: com.pubnub.api.enums.PNReconnectionPolicy;
					public static valueOf(param0: string): com.pubnub.api.enums.PNReconnectionPolicy;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNReconnectionPolicy>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNSpaceFields {
					public static class: java.lang.Class<com.pubnub.api.enums.PNSpaceFields>;
					public static CUSTOM: com.pubnub.api.enums.PNSpaceFields;
					public toString(): string;
					public static valueOf(param0: string): com.pubnub.api.enums.PNSpaceFields;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNSpaceFields>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNStatusCategory {
					public static class: java.lang.Class<com.pubnub.api.enums.PNStatusCategory>;
					public static PNUnknownCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNAcknowledgmentCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNAccessDeniedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNTimeoutCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNNetworkIssuesCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNConnectedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNReconnectedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNDisconnectedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNUnexpectedDisconnectCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNCancelledCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNBadRequestCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNURITooLongCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNMalformedFilterExpressionCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNMalformedResponseCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNDecryptionErrorCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNTLSConnectionFailedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNTLSUntrustedCertificateCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNRequestMessageCountExceededCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNReconnectionAttemptsExhaustedCategory: com.pubnub.api.enums.PNStatusCategory;
					public static PNRateLimitExceededCategory: com.pubnub.api.enums.PNStatusCategory;
					public static valueOf(param0: string): com.pubnub.api.enums.PNStatusCategory;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNStatusCategory>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module enums {
				export class PNUserFields {
					public static class: java.lang.Class<com.pubnub.api.enums.PNUserFields>;
					public static CUSTOM: com.pubnub.api.enums.PNUserFields;
					public toString(): string;
					public static valueOf(param0: string): com.pubnub.api.enums.PNUserFields;
					public static values(): androidNative.Array<com.pubnub.api.enums.PNUserFields>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module interceptors {
				export class SignatureInterceptor {
					public static class: java.lang.Class<com.pubnub.api.interceptors.SignatureInterceptor>;
					public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					public constructor(param0: com.pubnub.api.PubNub);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class BasePathManager {
					public static class: java.lang.Class<com.pubnub.api.managers.BasePathManager>;
					public getBasePath(): string;
					public constructor(param0: com.pubnub.api.PNConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class DelayedReconnectionManager {
					public static class: java.lang.Class<com.pubnub.api.managers.DelayedReconnectionManager>;
					public scheduleDelayedReconnection(): void;
					public constructor(param0: com.pubnub.api.PubNub);
					public setReconnectionListener(param0: com.pubnub.api.callbacks.ReconnectionCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class DuplicationManager {
					public static class: java.lang.Class<com.pubnub.api.managers.DuplicationManager>;
					public addEntry(param0: com.pubnub.api.models.server.SubscribeMessage): void;
					public isDuplicate(param0: com.pubnub.api.models.server.SubscribeMessage): boolean;
					public clearHistory(): void;
					public constructor(param0: com.pubnub.api.PNConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class ListenerManager {
					public static class: java.lang.Class<com.pubnub.api.managers.ListenerManager>;
					public announce(param0: com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadataResult): void;
					public announce(param0: com.pubnub.api.models.consumer.pubsub.PNSignalResult): void;
					public announce(param0: com.pubnub.api.models.consumer.objects_api.membership.PNMembershipResult): void;
					public announce(param0: com.pubnub.api.models.consumer.pubsub.PNMessageResult): void;
					public addListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
					public removeListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
					public announce(param0: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadataResult): void;
					public announce(param0: com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult): void;
					public announce(param0: com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult): void;
					public constructor(param0: com.pubnub.api.PubNub);
					public announce(param0: com.pubnub.api.models.consumer.PNStatus): void;
					public announce(param0: com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class MapperManager {
					public static class: java.lang.Class<com.pubnub.api.managers.MapperManager>;
					public putOnObject(param0: com.google.gson.JsonObject, param1: string, param2: com.google.gson.JsonElement): void;
					public hasField(param0: com.google.gson.JsonElement, param1: string): boolean;
					public getObjectMapper(): com.google.gson.Gson;
					public convertValue(param0: any, param1: java.lang.Class): any;
					public constructor();
					public elementToString(param0: com.google.gson.JsonElement, param1: string): string;
					public getAsBoolean(param0: com.google.gson.JsonElement, param1: string): boolean;
					public elementToLong(param0: com.google.gson.JsonElement): java.lang.Long;
					public getArrayIterator(param0: com.google.gson.JsonElement, param1: string): java.util.Iterator<com.google.gson.JsonElement>;
					public isJsonObject(param0: com.google.gson.JsonElement): boolean;
					public getField(param0: com.google.gson.JsonElement, param1: string): com.google.gson.JsonElement;
					public elementToString(param0: com.google.gson.JsonElement): string;
					public getObjectIterator(param0: com.google.gson.JsonElement): java.util.Iterator<java.util.Map.Entry<string, com.google.gson.JsonElement>>;
					public convertValue(param0: com.google.gson.JsonElement, param1: java.lang.Class): any;
					public getArrayElement(param0: com.google.gson.JsonElement, param1: number): com.google.gson.JsonElement;
					public toJsonUsinJackson(param0: any): string;
					public getConverterFactory(): retrofit2.Converter.Factory;
					public getObjectIterator(param0: com.google.gson.JsonElement, param1: string): java.util.Iterator<java.util.Map.Entry<string, com.google.gson.JsonElement>>;
					public elementToLong(param0: com.google.gson.JsonElement, param1: string): java.lang.Long;
					public fromJson(param0: string, param1: java.lang.Class): any;
					public getAsArray(param0: com.google.gson.JsonElement): com.google.gson.JsonArray;
					public getArrayIterator(param0: com.google.gson.JsonElement): java.util.Iterator<com.google.gson.JsonElement>;
					public elementToInt(param0: com.google.gson.JsonElement, param1: string): number;
					public toJson(param0: any): string;
					public getAsObject(param0: com.google.gson.JsonElement): com.google.gson.JsonObject;
					public isValidJsonObject(param0: any): void;
				}
				export module MapperManager {
					export class JSONArrayAdapter extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.managers.MapperManager.JSONArrayAdapter>;
						public serialize(param0: org.json.JSONArray, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): org.json.JSONArray;
					}
					export class JSONObjectAdapter extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.managers.MapperManager.JSONObjectAdapter>;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): org.json.JSONObject;
						public serialize(param0: org.json.JSONObject, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class PublishSequenceManager {
					public static class: java.lang.Class<com.pubnub.api.managers.PublishSequenceManager>;
					public getNextSequence(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class ReconnectionManager {
					public static class: java.lang.Class<com.pubnub.api.managers.ReconnectionManager>;
					public startPolling(): void;
					public constructor(param0: com.pubnub.api.PubNub);
					public setReconnectionListener(param0: com.pubnub.api.callbacks.ReconnectionCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class RetrofitManager {
					public static class: java.lang.Class<com.pubnub.api.managers.RetrofitManager>;
					public getHistoryService(): com.pubnub.api.services.HistoryService;
					public getPublishService(): com.pubnub.api.services.PublishService;
					public getSignalService(): com.pubnub.api.services.SignalService;
					public getTransactionClientExecutorService(): java.util.concurrent.ExecutorService;
					public getChannelGroupService(): com.pubnub.api.services.ChannelGroupService;
					public getTimeService(): com.pubnub.api.services.TimeService;
					public destroy(param0: boolean): void;
					public getAccessManagerService(): com.pubnub.api.services.AccessManagerService;
					public getTransactionInstance(): retrofit2.Retrofit;
					public getS3Service(): com.pubnub.api.services.S3Service;
					public getNoSignatureInstance(): retrofit2.Retrofit;
					public getMessageActionService(): com.pubnub.api.services.MessageActionService;
					public getPresenceService(): com.pubnub.api.services.PresenceService;
					public getChannelMetadataService(): com.pubnub.api.services.ChannelMetadataService;
					public getSubscriptionInstance(): retrofit2.Retrofit;
					public constructor(param0: com.pubnub.api.PubNub);
					public getUuidMetadataService(): com.pubnub.api.services.UUIDMetadataService;
					public getFilesService(): com.pubnub.api.services.FilesService;
					public getPushService(): com.pubnub.api.services.PushService;
					public getSubscribeService(): com.pubnub.api.services.SubscribeService;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class StateManager {
					public static class: java.lang.Class<com.pubnub.api.managers.StateManager>;
					public addTemporaryUnavailableChannelGroup(param0: string): void;
					public adaptUnsubscribeBuilder(param0: com.pubnub.api.builder.dto.UnsubscribeOperation): void;
					public isEmpty(): boolean;
					public removeTemporaryUnavailableChannel(param0: string): void;
					public addTemporaryUnavailableChannel(param0: string): void;
					public subscribedToOnlyTemporaryUnavailable(): boolean;
					public effectiveChannelGroups(): java.util.List<string>;
					public adaptPresenceBuilder(param0: com.pubnub.api.builder.dto.PresenceOperation): void;
					public resetTemporaryUnavailableChannelsAndGroups(): void;
					public adaptStateBuilder(param0: com.pubnub.api.builder.dto.StateOperation): void;
					public createStatePayload(): java.util.Map<string, any>;
					public prepareTargetChannelGroupList(param0: boolean): java.util.List<string>;
					public prepareTargetChannelList(param0: boolean): java.util.List<string>;
					public prepareTargetHeartbeatChannelList(param0: boolean): java.util.List<string>;
					public constructor(param0: com.pubnub.api.PubNub);
					public effectiveChannels(): java.util.List<string>;
					public adaptSubscribeBuilder(param0: com.pubnub.api.builder.dto.SubscribeOperation): void;
					public removeTemporaryUnavailableChannelGroup(param0: string): void;
					public prepareTargetHeartbeatChannelGroupList(param0: boolean): java.util.List<string>;
					public hasAnythingToSubscribe(): boolean;
				}
				export module StateManager {
					export class TemporaryUnavailableItem {
						public static class: java.lang.Class<com.pubnub.api.managers.StateManager.TemporaryUnavailableItem>;
						public setTimestamp(param0: java.util.Date): void;
						public constructor(param0: string, param1: java.util.Date);
						public getTimestamp(): java.util.Date;
						public getItem(): string;
						public equals(param0: any): boolean;
						public canEqual(param0: any): boolean;
						public hashCode(): number;
						public setItem(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class SubscriptionManager {
					public static class: java.lang.Class<com.pubnub.api.managers.SubscriptionManager>;
					public adaptUnsubscribeBuilder(param0: com.pubnub.api.builder.dto.UnsubscribeOperation): void;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.RetrofitManager, param2: com.pubnub.api.managers.TelemetryManager);
					public removeListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
					public reconnect(): void;
					public destroy(param0: boolean): void;
					public adaptPresenceBuilder(param0: com.pubnub.api.builder.dto.PresenceOperation): void;
					public adaptStateBuilder(param0: com.pubnub.api.builder.dto.StateOperation): void;
					public getSubscribedChannels(): java.util.List<string>;
					public addListener(param0: com.pubnub.api.callbacks.SubscribeCallback): void;
					public unsubscribeAll(): void;
					public getSubscribedChannelGroups(): java.util.List<string>;
					/** @deprecated */
					public stop(): void;
					public disconnect(): void;
					public adaptSubscribeBuilder(param0: com.pubnub.api.builder.dto.SubscribeOperation): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module managers {
				export class TelemetryManager {
					public static class: java.lang.Class<com.pubnub.api.managers.TelemetryManager>;
					public storeLatency(param0: number, param1: com.pubnub.api.enums.PNOperationType): void;
					public constructor();
					public operationsLatency(): java.util.Map<string, string>;
					public stopCleanUpTimer(): void;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export class SubscriptionItem {
					public static class: java.lang.Class<com.pubnub.api.models.SubscriptionItem>;
					public constructor();
					public getName(): string;
					public getState(): any;
					public setName(param0: string): com.pubnub.api.models.SubscriptionItem;
					public setState(param0: any): com.pubnub.api.models.SubscriptionItem;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export class PNErrorData {
						public static class: java.lang.Class<com.pubnub.api.models.consumer.PNErrorData>;
						public constructor(param0: string, param1: java.lang.Exception);
						public getThrowable(): java.lang.Exception;
						public getInformation(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export abstract class PNPage {
						public static class: java.lang.Class<com.pubnub.api.models.consumer.PNPage>;
						public hash: string;
						public getHash(): string;
						public static next(param0: string): com.pubnub.api.models.consumer.PNPage.Next;
						public static previous(param0: string): com.pubnub.api.models.consumer.PNPage.Previous;
						public constructor(param0: string);
					}
					export module PNPage {
						export class Next extends com.pubnub.api.models.consumer.PNPage {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.PNPage.Next>;
						}
						export class Previous extends com.pubnub.api.models.consumer.PNPage {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.PNPage.Previous>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export class PNPublishResult {
						public static class: java.lang.Class<com.pubnub.api.models.consumer.PNPublishResult>;
						public getTimetoken(): java.lang.Long;
						public static builder(): com.pubnub.api.models.consumer.PNPublishResult.PNPublishResultBuilder;
						public equals(param0: any): boolean;
						public canEqual(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module PNPublishResult {
						export class PNPublishResultBuilder {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.PNPublishResult.PNPublishResultBuilder>;
							public toString(): string;
							public build(): com.pubnub.api.models.consumer.PNPublishResult;
							public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.PNPublishResult.PNPublishResultBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export class PNStatus {
						public static class: java.lang.Class<com.pubnub.api.models.consumer.PNStatus>;
						public getStatusCode(): number;
						public getUuid(): string;
						public getCategory(): com.pubnub.api.enums.PNStatusCategory;
						public getErrorData(): com.pubnub.api.models.consumer.PNErrorData;
						public isError(): boolean;
						public static builder(): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
						public toString(): string;
						public getAffectedChannelGroups(): java.util.List<string>;
						public getAffectedChannels(): java.util.List<string>;
						public getOrigin(): string;
						public getAuthKey(): string;
						public retry(): void;
						public getClientRequest(): any;
						public getOperation(): com.pubnub.api.enums.PNOperationType;
						public toBuilder(): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
						public isTlsEnabled(): boolean;
					}
					export module PNStatus {
						export class PNStatusBuilder {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder>;
							public operation(param0: com.pubnub.api.enums.PNOperationType): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public tlsEnabled(param0: boolean): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public uuid(param0: string): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public executedEndpoint(param0: com.pubnub.api.endpoints.remoteaction.RemoteAction<any>): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public affectedChannelGroups(param0: java.util.List<string>): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public build(): com.pubnub.api.models.consumer.PNStatus;
							public toString(): string;
							public clientRequest(param0: any): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public category(param0: com.pubnub.api.enums.PNStatusCategory): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public affectedChannels(param0: java.util.List<string>): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public error(param0: boolean): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public authKey(param0: string): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public errorData(param0: com.pubnub.api.models.consumer.PNErrorData): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public origin(param0: string): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
							public statusCode(param0: number): com.pubnub.api.models.consumer.PNStatus.PNStatusBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export class PNTimeResult {
						public static class: java.lang.Class<com.pubnub.api.models.consumer.PNTimeResult>;
						public getTimetoken(): java.lang.Long;
						public toString(): string;
						public static builder(): com.pubnub.api.models.consumer.PNTimeResult.PNTimeResultBuilder;
					}
					export module PNTimeResult {
						export class PNTimeResultBuilder {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.PNTimeResult.PNTimeResultBuilder>;
							public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.PNTimeResult.PNTimeResultBuilder;
							public build(): com.pubnub.api.models.consumer.PNTimeResult;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export class PNAccessManagerGrantResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult>;
							public setUuids(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): void;
							public hashCode(): number;
							public getLevel(): string;
							public setTtl(param0: number): void;
							public getChannels(): java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>;
							public toString(): string;
							public static builder(): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
							public setLevel(param0: string): void;
							public getUuids(): java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>;
							public setChannelGroups(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): void;
							public getSubscribeKey(): string;
							public setChannels(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): void;
							public getTtl(): number;
							public getChannelGroups(): java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>;
							public setSubscribeKey(param0: string): void;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
						export module PNAccessManagerGrantResult {
							export class PNAccessManagerGrantResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder>;
								public subscribeKey(param0: string): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
								public channelGroups(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
								public build(): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult;
								public toString(): string;
								public uuids(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
								public channels(param0: java.util.Map<string, java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>>): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
								public level(param0: string): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
								public ttl(param0: number): com.pubnub.api.models.consumer.access_manager.PNAccessManagerGrantResult.PNAccessManagerGrantResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export class PNAccessManagerKeyData {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>;
							public toBuilder(): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
							public setUpdateEnabled(param0: boolean): void;
							public setGetEnabled(param0: boolean): void;
							public hashCode(): number;
							public setDeleteEnabled(param0: boolean): void;
							public toString(): string;
							public isManageEnabled(): boolean;
							public isGetEnabled(): boolean;
							public isWriteEnabled(): boolean;
							public setReadEnabled(param0: boolean): void;
							public setManageEnabled(param0: boolean): void;
							public isReadEnabled(): boolean;
							public isDeleteEnabled(): boolean;
							public isUpdateEnabled(): boolean;
							public isJoinEnabled(): boolean;
							public setJoinEnabled(param0: boolean): void;
							public setWriteEnabled(param0: boolean): void;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
							public static builder(): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
						}
						export module PNAccessManagerKeyData {
							export class PNAccessManagerKeyDataBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder>;
								public readEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public getEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public manageEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public toString(): string;
								public joinEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public deleteEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public build(): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData;
								public updateEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
								public writeEnabled(param0: boolean): com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData.PNAccessManagerKeyDataBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export class PNAccessManagerKeysData {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeysData>;
							public constructor();
							public getAuthKeys(): java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export class Channel extends com.pubnub.api.models.consumer.access_manager.v3.PNResource<com.pubnub.api.models.consumer.access_manager.v3.Channel> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.Channel>;
								public read(): com.pubnub.api.models.consumer.access_manager.v3.Channel;
								public static name(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Channel;
								public read(): any;
								public delete(): any;
								public delete(): com.pubnub.api.models.consumer.access_manager.v3.Channel;
								public write(): com.pubnub.api.models.consumer.access_manager.v3.Channel;
								public static pattern(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Channel;
								public write(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export class Group extends com.pubnub.api.models.consumer.access_manager.v3.PNResource<com.pubnub.api.models.consumer.access_manager.v3.Group> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.Group>;
								public static id(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Group;
								public read(): com.pubnub.api.models.consumer.access_manager.v3.Group;
								public manage(): any;
								public read(): any;
								public manage(): com.pubnub.api.models.consumer.access_manager.v3.Group;
								public static pattern(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Group;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export class PNGrantTokenResult {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.PNGrantTokenResult>;
								public toString(): string;
								public static builder(): com.pubnub.api.models.consumer.access_manager.v3.PNGrantTokenResult.PNGrantTokenResultBuilder;
								public getToken(): string;
							}
							export module PNGrantTokenResult {
								export class PNGrantTokenResultBuilder {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.PNGrantTokenResult.PNGrantTokenResultBuilder>;
									public toString(): string;
									public token(param0: string): com.pubnub.api.models.consumer.access_manager.v3.PNGrantTokenResult.PNGrantTokenResultBuilder;
									public build(): com.pubnub.api.models.consumer.access_manager.v3.PNGrantTokenResult;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export abstract class PNResource<T> extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.PNResource<any>>;
								public resourceName: string;
								public resourcePattern: string;
								public isCreate(): boolean;
								public manage(): T;
								public isRead(): boolean;
								public isPatternResource(): boolean;
								public constructor();
								public isDelete(): boolean;
								public read(): T;
								public delete(): T;
								public isWrite(): boolean;
								public isManage(): boolean;
								public create(): T;
								public write(): T;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export class Space extends com.pubnub.api.models.consumer.access_manager.v3.PNResource<com.pubnub.api.models.consumer.access_manager.v3.Space> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.Space>;
								public read(): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public static id(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public delete(): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public create(): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public manage(): any;
								public create(): any;
								public read(): any;
								public delete(): any;
								public manage(): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public write(): any;
								public write(): com.pubnub.api.models.consumer.access_manager.v3.Space;
								public static pattern(param0: string): com.pubnub.api.models.consumer.access_manager.v3.Space;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module access_manager {
						export module v3 {
							export class User extends com.pubnub.api.models.consumer.access_manager.v3.PNResource<com.pubnub.api.models.consumer.access_manager.v3.User> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.access_manager.v3.User>;
								public write(): com.pubnub.api.models.consumer.access_manager.v3.User;
								public manage(): any;
								public create(): any;
								public read(): com.pubnub.api.models.consumer.access_manager.v3.User;
								public manage(): com.pubnub.api.models.consumer.access_manager.v3.User;
								public static pattern(param0: string): com.pubnub.api.models.consumer.access_manager.v3.User;
								public read(): any;
								public create(): com.pubnub.api.models.consumer.access_manager.v3.User;
								public delete(): any;
								public delete(): com.pubnub.api.models.consumer.access_manager.v3.User;
								public static id(param0: string): com.pubnub.api.models.consumer.access_manager.v3.User;
								public write(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module channel_group {
						export class PNChannelGroupsAddChannelResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult>;
							public static builder(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult.PNChannelGroupsAddChannelResultBuilder;
							public toString(): string;
						}
						export module PNChannelGroupsAddChannelResult {
							export class PNChannelGroupsAddChannelResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult.PNChannelGroupsAddChannelResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAddChannelResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module channel_group {
						export class PNChannelGroupsAllChannelsResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult>;
							public getChannels(): java.util.List<string>;
							public static builder(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult.PNChannelGroupsAllChannelsResultBuilder;
							public toString(): string;
						}
						export module PNChannelGroupsAllChannelsResult {
							export class PNChannelGroupsAllChannelsResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult.PNChannelGroupsAllChannelsResultBuilder>;
								public toString(): string;
								public channels(param0: java.util.List<string>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult.PNChannelGroupsAllChannelsResultBuilder;
								public build(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsAllChannelsResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module channel_group {
						export class PNChannelGroupsDeleteGroupResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult>;
							public static builder(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult.PNChannelGroupsDeleteGroupResultBuilder;
							public toString(): string;
						}
						export module PNChannelGroupsDeleteGroupResult {
							export class PNChannelGroupsDeleteGroupResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult.PNChannelGroupsDeleteGroupResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsDeleteGroupResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module channel_group {
						export class PNChannelGroupsListAllResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult>;
							public getGroups(): java.util.List<string>;
							public static builder(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult.PNChannelGroupsListAllResultBuilder;
							public toString(): string;
						}
						export module PNChannelGroupsListAllResult {
							export class PNChannelGroupsListAllResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult.PNChannelGroupsListAllResultBuilder>;
								public toString(): string;
								public groups(param0: java.util.List<string>): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult.PNChannelGroupsListAllResultBuilder;
								public build(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsListAllResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module channel_group {
						export class PNChannelGroupsRemoveChannelResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult>;
							public static builder(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult.PNChannelGroupsRemoveChannelResultBuilder;
							public toString(): string;
						}
						export module PNChannelGroupsRemoveChannelResult {
							export class PNChannelGroupsRemoveChannelResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult.PNChannelGroupsRemoveChannelResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.channel_group.PNChannelGroupsRemoveChannelResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNBaseFile extends com.pubnub.api.models.consumer.files.PNFile {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNBaseFile>;
							public hashCode(): number;
							public getId(): string;
							public constructor(param0: string, param1: string);
							public getName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNDeleteFileResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNDeleteFileResult>;
							public getStatus(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNDownloadFileResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNDownloadFileResult>;
							public constructor(param0: string, param1: java.io.InputStream);
							public hashCode(): number;
							public getFileName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public getByteStream(): java.io.InputStream;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNDownloadableFile extends com.pubnub.api.models.consumer.files.PNFile {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNDownloadableFile>;
							public hashCode(): number;
							public getId(): string;
							public getUrl(): string;
							public getName(): string;
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNFile {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNFile>;
							/**
							 * Constructs a new instance of the com.pubnub.api.models.consumer.files.PNFile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getId(): string; getName(): string });
							public constructor();
							public getId(): string;
							public getName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNFileUploadResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNFileUploadResult>;
							public getStatus(): number;
							public getFile(): com.pubnub.api.models.consumer.files.PNBaseFile;
							public hashCode(): number;
							public getTimetoken(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: com.pubnub.api.models.consumer.files.PNBaseFile);
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNFileUrlResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNFileUrlResult>;
							public hashCode(): number;
							public constructor(param0: string);
							public getUrl(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNListFilesResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNListFilesResult>;
							public getNext(): com.pubnub.api.models.consumer.PNPage.Next;
							public getStatus(): number;
							public hashCode(): number;
							public getData(): java.util.Collection<com.pubnub.api.models.consumer.files.PNUploadedFile>;
							public constructor(param0: number, param1: com.pubnub.api.models.consumer.PNPage.Next, param2: number, param3: java.util.Collection<com.pubnub.api.models.consumer.files.PNUploadedFile>);
							public toString(): string;
							public getCount(): number;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNPublishFileMessageResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNPublishFileMessageResult>;
							public hashCode(): number;
							public getTimetoken(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module files {
						export class PNUploadedFile extends com.pubnub.api.models.consumer.files.PNFile {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.files.PNUploadedFile>;
							public hashCode(): number;
							public getId(): string;
							public getName(): string;
							public getSize(): java.lang.Integer;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: string);
							public getCreated(): string;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNDeleteMessagesResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNDeleteMessagesResult>;
							public static builder(): com.pubnub.api.models.consumer.history.PNDeleteMessagesResult.PNDeleteMessagesResultBuilder;
							public toString(): string;
						}
						export module PNDeleteMessagesResult {
							export class PNDeleteMessagesResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNDeleteMessagesResult.PNDeleteMessagesResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.history.PNDeleteMessagesResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNFetchMessageItem {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNFetchMessageItem>;
							public hashCode(): number;
							public getActions(): java.util.HashMap<string, java.util.HashMap<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem.Action>>>;
							public toBuilder(): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
							public getMessage(): com.google.gson.JsonElement;
							public toString(): string;
							public static builder(): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
							public getUuid(): string;
							public equals(param0: any): boolean;
							public getMeta(): com.google.gson.JsonElement;
							public getTimetoken(): java.lang.Long;
							public canEqual(param0: any): boolean;
						}
						export module PNFetchMessageItem {
							export class Action {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNFetchMessageItem.Action>;
								public toString(): string;
								public canEqual(param0: any): boolean;
								public constructor(param0: string, param1: string);
								public equals(param0: any): boolean;
								public getUuid(): string;
								public getActionTimetoken(): string;
								public hashCode(): number;
							}
							export class PNFetchMessageItemBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder>;
								public messageType(param0: string): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
								public toString(): string;
								public uuid(param0: string): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
								public meta(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
								public actions(param0: java.util.HashMap<string, java.util.HashMap<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem.Action>>>): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
								public build(): com.pubnub.api.models.consumer.history.PNFetchMessageItem;
								public message(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
								public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.history.PNFetchMessageItem.PNFetchMessageItemBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNFetchMessagesResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNFetchMessagesResult>;
							public static builder(): com.pubnub.api.models.consumer.history.PNFetchMessagesResult.PNFetchMessagesResultBuilder;
							public toString(): string;
							public getChannels(): java.util.Map<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem>>;
						}
						export module PNFetchMessagesResult {
							export class PNFetchMessagesResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNFetchMessagesResult.PNFetchMessagesResultBuilder>;
								public toString(): string;
								public channels(param0: java.util.Map<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem>>): com.pubnub.api.models.consumer.history.PNFetchMessagesResult.PNFetchMessagesResultBuilder;
								public build(): com.pubnub.api.models.consumer.history.PNFetchMessagesResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNHistoryItemResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNHistoryItemResult>;
							public getEntry(): com.google.gson.JsonElement;
							public toString(): string;
							public static builder(): com.pubnub.api.models.consumer.history.PNHistoryItemResult.PNHistoryItemResultBuilder;
							public getTimetoken(): java.lang.Long;
							public getMeta(): com.google.gson.JsonElement;
						}
						export module PNHistoryItemResult {
							export class PNHistoryItemResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNHistoryItemResult.PNHistoryItemResultBuilder>;
								public build(): com.pubnub.api.models.consumer.history.PNHistoryItemResult;
								public toString(): string;
								public entry(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.history.PNHistoryItemResult.PNHistoryItemResultBuilder;
								public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.history.PNHistoryItemResult.PNHistoryItemResultBuilder;
								public meta(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.history.PNHistoryItemResult.PNHistoryItemResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNHistoryResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNHistoryResult>;
							public getStartTimetoken(): java.lang.Long;
							public getEndTimetoken(): java.lang.Long;
							public toString(): string;
							public getMessages(): java.util.List<com.pubnub.api.models.consumer.history.PNHistoryItemResult>;
							public static builder(): com.pubnub.api.models.consumer.history.PNHistoryResult.PNHistoryResultBuilder;
						}
						export module PNHistoryResult {
							export class PNHistoryResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNHistoryResult.PNHistoryResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.history.PNHistoryResult;
								public endTimetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.history.PNHistoryResult.PNHistoryResultBuilder;
								public messages(param0: java.util.List<com.pubnub.api.models.consumer.history.PNHistoryItemResult>): com.pubnub.api.models.consumer.history.PNHistoryResult.PNHistoryResultBuilder;
								public startTimetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.history.PNHistoryResult.PNHistoryResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module history {
						export class PNMessageCountResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNMessageCountResult>;
							public static builder(): com.pubnub.api.models.consumer.history.PNMessageCountResult.PNMessageCountResultBuilder;
							public toString(): string;
							public getChannels(): java.util.Map<string, java.lang.Long>;
						}
						export module PNMessageCountResult {
							export class PNMessageCountResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.history.PNMessageCountResult.PNMessageCountResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.history.PNMessageCountResult;
								public channels(param0: java.util.Map<string, java.lang.Long>): com.pubnub.api.models.consumer.history.PNMessageCountResult.PNMessageCountResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module message_actions {
						export class PNAddMessageActionResult extends com.pubnub.api.models.consumer.message_actions.PNMessageAction {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult>;
							public static builder(): com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult.PNAddMessageActionResultBuilder;
						}
						export module PNAddMessageActionResult {
							export class PNAddMessageActionResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult.PNAddMessageActionResultBuilder>;
								public build(): com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult;
								public toString(): string;
								public pnMessageAction(param0: com.pubnub.api.models.consumer.message_actions.PNMessageAction): com.pubnub.api.models.consumer.message_actions.PNAddMessageActionResult.PNAddMessageActionResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module message_actions {
						export class PNGetMessageActionsResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult>;
							public static builder(): com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult.PNGetMessageActionsResultBuilder;
							public getActions(): java.util.List<com.pubnub.api.models.consumer.message_actions.PNMessageAction>;
						}
						export module PNGetMessageActionsResult {
							export class PNGetMessageActionsResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult.PNGetMessageActionsResultBuilder>;
								public toString(): string;
								public actions(param0: java.util.List<com.pubnub.api.models.consumer.message_actions.PNMessageAction>): com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult.PNGetMessageActionsResultBuilder;
								public build(): com.pubnub.api.models.consumer.message_actions.PNGetMessageActionsResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module message_actions {
						export class PNMessageAction {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNMessageAction>;
							public constructor();
							public setMessageTimetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.message_actions.PNMessageAction;
							public setValue(param0: string): com.pubnub.api.models.consumer.message_actions.PNMessageAction;
							public setType(param0: string): com.pubnub.api.models.consumer.message_actions.PNMessageAction;
							public getValue(): string;
							public toString(): string;
							public getMessageTimetoken(): java.lang.Long;
							public getActionTimetoken(): java.lang.Long;
							public getUuid(): string;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module message_actions {
						export class PNRemoveMessageActionResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.message_actions.PNRemoveMessageActionResult>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export class PNObject {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.PNObject>;
							public id: string;
							public custom: any;
							public updated: string;
							public eTag: string;
							public constructor();
							public setCustom(param0: any): com.pubnub.api.models.consumer.objects_api.PNObject;
							public getCustom(): any;
							public hashCode(): number;
							public constructor(param0: string);
							public getId(): string;
							public getUpdated(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public getETag(): string;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNChannelMetadata extends com.pubnub.api.models.consumer.objects_api.PNObject {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>;
								public setDescription(param0: string): com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata;
								public toString(): string;
								public setCustom(param0: any): com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata;
								public getName(): string;
								public equals(param0: any): boolean;
								public constructor();
								public constructor(param0: string, param1: string, param2: string);
								public setCustom(param0: any): com.pubnub.api.models.consumer.objects_api.PNObject;
								public setName(param0: string): com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata;
								public canEqual(param0: any): boolean;
								public constructor(param0: string, param1: string);
								public getDescription(): string;
								public constructor(param0: string);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNChannelMetadataResult extends com.pubnub.api.models.consumer.pubsub.objects.ObjectResult<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadataResult>;
								public toString(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: any);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNGetAllChannelsMetadataResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNGetAllChannelsMetadataResult>;
								public toString(): string;
								public constructor();
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNGetChannelMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNGetChannelMetadataResult>;
								public toString(): string;
								public constructor();
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNRemoveChannelMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNRemoveChannelMetadataResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module channel {
							export class PNSetChannelMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.channel.PNSetChannelMetadataResult>;
								public toString(): string;
								public constructor();
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export class PNGetChannelMembersResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNGetChannelMembersResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export class PNManageChannelMembersResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNManageChannelMembersResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export class PNMembers {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNMembers>;
								public custom: any;
								public updated: string;
								public eTag: string;
								public toString(): string;
								public getUuid(): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
								public canEqual(param0: any): boolean;
								public getUpdated(): string;
								public getCustom(): any;
								public equals(param0: any): boolean;
								public constructor();
								public hashCode(): number;
								public getETag(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export class PNRemoveChannelMembersResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNRemoveChannelMembersResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export class PNSetChannelMembersResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNSetChannelMembersResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module member {
							export abstract class PNUUID {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNUUID>;
								public static uuid(param0: string): com.pubnub.api.models.consumer.objects_api.member.PNUUID;
								public static uuidWithCustom(param0: string, param1: java.util.Map<string, any>): com.pubnub.api.models.consumer.objects_api.member.PNUUID;
								public constructor(param0: com.pubnub.api.models.consumer.objects_api.member.PNUUID.UUIDId);
								public getUuid(): com.pubnub.api.models.consumer.objects_api.member.PNUUID.UUIDId;
							}
							export module PNUUID {
								export class JustUUID extends com.pubnub.api.models.consumer.objects_api.member.PNUUID {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNUUID.JustUUID>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public canEqual(param0: any): boolean;
								}
								export class UUIDId {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNUUID.UUIDId>;
									public constructor(param0: string);
									public hashCode(): number;
									public getId(): string;
									public equals(param0: any): boolean;
									public canEqual(param0: any): boolean;
								}
								export class UUIDWithCustom extends com.pubnub.api.models.consumer.objects_api.member.PNUUID {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.member.PNUUID.UUIDWithCustom>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public getCustom(): any;
									public canEqual(param0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export abstract class PNChannelMembership {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>;
								public static channelWithCustom(param0: string, param1: java.util.Map<string, any>): com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership;
								public static channel(param0: string): com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership;
								public getChannel(): com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership.ChannelId;
								public constructor(param0: com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership.ChannelId);
							}
							export module PNChannelMembership {
								export class ChannelId {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership.ChannelId>;
									public constructor(param0: string);
									public hashCode(): number;
									public getId(): string;
									public equals(param0: any): boolean;
									public canEqual(param0: any): boolean;
								}
								export class ChannelWithCustom extends com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership.ChannelWithCustom>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public getCustom(): any;
									public canEqual(param0: any): boolean;
								}
								export class JustChannel extends com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership.JustChannel>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public canEqual(param0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNGetMemberships extends com.pubnub.api.models.consumer.objects_api.PNObject {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNGetMemberships>;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNGetMembershipsResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNGetMembershipsResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNManageMembershipResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNManageMembershipResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNMembership {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>;
								public custom: any;
								public updated: string;
								public eTag: string;
								public toString(): string;
								public canEqual(param0: any): boolean;
								public constructor(param0: com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata);
								public getUpdated(): string;
								public getCustom(): any;
								public equals(param0: any): boolean;
								public getChannel(): com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata;
								public hashCode(): number;
								public getETag(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNMembershipResult extends com.pubnub.api.models.consumer.pubsub.objects.ObjectResult<com.pubnub.api.models.consumer.objects_api.membership.PNMembership> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNMembershipResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: com.pubnub.api.models.consumer.objects_api.membership.PNMembership);
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: any);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNRemoveMembershipResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNRemoveMembershipResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module membership {
							export class PNSetMembershipResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.membership.PNSetMembershipResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module util {
							export class CustomPayloadJsonInterceptor extends java.lang.Object {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.util.CustomPayloadJsonInterceptor>;
								public constructor();
								public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
								public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNGetAllUUIDMetadataResult extends com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNGetAllUUIDMetadataResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNGetUUIDMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNGetUUIDMetadataResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNRemoveUUIDMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNRemoveUUIDMetadataResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNSetUUIDMetadataResult extends com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNSetUUIDMetadataResult>;
								public toString(): string;
								public constructor(param0: com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNUUIDMetadata extends com.pubnub.api.models.consumer.objects_api.PNObject {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>;
								public toString(): string;
								public getName(): string;
								public equals(param0: any): boolean;
								public setExternalId(param0: string): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
								public getExternalId(): string;
								public constructor();
								public setProfileUrl(param0: string): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
								public setEmail(param0: string): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
								public setCustom(param0: any): com.pubnub.api.models.consumer.objects_api.PNObject;
								public getEmail(): string;
								public canEqual(param0: any): boolean;
								public getProfileUrl(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: string);
								public hashCode(): number;
								public setCustom(param0: any): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
								public setName(param0: string): com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module objects_api {
						export module uuid {
							export class PNUUIDMetadataResult extends com.pubnub.api.models.consumer.pubsub.objects.ObjectResult<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadataResult>;
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata);
								public toString(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: any);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNGetStateResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNGetStateResult>;
							public static builder(): com.pubnub.api.models.consumer.presence.PNGetStateResult.PNGetStateResultBuilder;
							public getStateByUUID(): java.util.Map<string, com.google.gson.JsonElement>;
							public toString(): string;
						}
						export module PNGetStateResult {
							export class PNGetStateResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNGetStateResult.PNGetStateResultBuilder>;
								public toString(): string;
								public stateByUUID(param0: java.util.Map<string, com.google.gson.JsonElement>): com.pubnub.api.models.consumer.presence.PNGetStateResult.PNGetStateResultBuilder;
								public build(): com.pubnub.api.models.consumer.presence.PNGetStateResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNHereNowChannelData {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowChannelData>;
							public getChannelName(): string;
							public getOccupancy(): number;
							public getOccupants(): java.util.List<com.pubnub.api.models.consumer.presence.PNHereNowOccupantData>;
							public toString(): string;
							public static builder(): com.pubnub.api.models.consumer.presence.PNHereNowChannelData.PNHereNowChannelDataBuilder;
						}
						export module PNHereNowChannelData {
							export class PNHereNowChannelDataBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowChannelData.PNHereNowChannelDataBuilder>;
								public occupants(param0: java.util.List<com.pubnub.api.models.consumer.presence.PNHereNowOccupantData>): com.pubnub.api.models.consumer.presence.PNHereNowChannelData.PNHereNowChannelDataBuilder;
								public toString(): string;
								public occupancy(param0: number): com.pubnub.api.models.consumer.presence.PNHereNowChannelData.PNHereNowChannelDataBuilder;
								public channelName(param0: string): com.pubnub.api.models.consumer.presence.PNHereNowChannelData.PNHereNowChannelDataBuilder;
								public build(): com.pubnub.api.models.consumer.presence.PNHereNowChannelData;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNHereNowOccupantData {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowOccupantData>;
							public static builder(): com.pubnub.api.models.consumer.presence.PNHereNowOccupantData.PNHereNowOccupantDataBuilder;
							public getState(): com.google.gson.JsonElement;
							public toString(): string;
							public getUuid(): string;
						}
						export module PNHereNowOccupantData {
							export class PNHereNowOccupantDataBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowOccupantData.PNHereNowOccupantDataBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.presence.PNHereNowOccupantData;
								public uuid(param0: string): com.pubnub.api.models.consumer.presence.PNHereNowOccupantData.PNHereNowOccupantDataBuilder;
								public state(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.presence.PNHereNowOccupantData.PNHereNowOccupantDataBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNHereNowResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowResult>;
							public static builder(): com.pubnub.api.models.consumer.presence.PNHereNowResult.PNHereNowResultBuilder;
							public getChannels(): java.util.Map<string, com.pubnub.api.models.consumer.presence.PNHereNowChannelData>;
							public toString(): string;
							public getTotalChannels(): number;
							public getTotalOccupancy(): number;
						}
						export module PNHereNowResult {
							export class PNHereNowResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNHereNowResult.PNHereNowResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.presence.PNHereNowResult;
								public totalOccupancy(param0: number): com.pubnub.api.models.consumer.presence.PNHereNowResult.PNHereNowResultBuilder;
								public totalChannels(param0: number): com.pubnub.api.models.consumer.presence.PNHereNowResult.PNHereNowResultBuilder;
								public channels(param0: java.util.Map<string, com.pubnub.api.models.consumer.presence.PNHereNowChannelData>): com.pubnub.api.models.consumer.presence.PNHereNowResult.PNHereNowResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNSetStateResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNSetStateResult>;
							public static builder(): com.pubnub.api.models.consumer.presence.PNSetStateResult.PNSetStateResultBuilder;
							public getState(): com.google.gson.JsonElement;
							public toString(): string;
						}
						export module PNSetStateResult {
							export class PNSetStateResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNSetStateResult.PNSetStateResultBuilder>;
								public toString(): string;
								public state(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.presence.PNSetStateResult.PNSetStateResultBuilder;
								public build(): com.pubnub.api.models.consumer.presence.PNSetStateResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module presence {
						export class PNWhereNowResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNWhereNowResult>;
							public static builder(): com.pubnub.api.models.consumer.presence.PNWhereNowResult.PNWhereNowResultBuilder;
							public getChannels(): java.util.List<string>;
							public toString(): string;
						}
						export module PNWhereNowResult {
							export class PNWhereNowResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.presence.PNWhereNowResult.PNWhereNowResultBuilder>;
								public toString(): string;
								public channels(param0: java.util.List<string>): com.pubnub.api.models.consumer.presence.PNWhereNowResult.PNWhereNowResultBuilder;
								public build(): com.pubnub.api.models.consumer.presence.PNWhereNowResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export class BasePubSubResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.BasePubSubResult>;
							public getSubscription(): string;
							public getPublisher(): string;
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							/** @deprecated */
							public getActualChannel(): string;
							public getUserMetadata(): com.google.gson.JsonElement;
							public static builder(): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
							/** @deprecated */
							public getSubscribedChannel(): string;
							public getChannel(): string;
							public toString(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
							public getTimetoken(): java.lang.Long;
						}
						export module BasePubSubResult {
							export class BasePubSubResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder>;
								public toString(): string;
								public channel(param0: string): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								public userMetadata(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								public publisher(param0: string): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								/** @deprecated */
								public subscribedChannel(param0: string): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								/** @deprecated */
								public actualChannel(param0: string): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								public subscription(param0: string): com.pubnub.api.models.consumer.pubsub.BasePubSubResult.BasePubSubResultBuilder;
								public build(): com.pubnub.api.models.consumer.pubsub.BasePubSubResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export class MessageResult extends com.pubnub.api.models.consumer.pubsub.BasePubSubResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.MessageResult>;
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: com.google.gson.JsonElement);
							public getMessage(): com.google.gson.JsonElement;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export class PNMessageResult extends com.pubnub.api.models.consumer.pubsub.MessageResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.PNMessageResult>;
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: com.google.gson.JsonElement);
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export class PNPresenceEventResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult>;
							public getSubscription(): string;
							public getLeave(): java.util.List<string>;
							public getOccupancy(): java.lang.Integer;
							public toString(): string;
							public getTimestamp(): java.lang.Long;
							public static builder(): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
							public getEvent(): string;
							public getJoin(): java.util.List<string>;
							public getTimeout(): java.util.List<string>;
							public getUserMetadata(): any;
							/** @deprecated */
							public getActualChannel(): string;
							public getHereNowRefresh(): java.lang.Boolean;
							/** @deprecated */
							public getSubscribedChannel(): string;
							public getState(): com.google.gson.JsonElement;
							public getChannel(): string;
							public getUuid(): string;
							public getTimetoken(): java.lang.Long;
						}
						export module PNPresenceEventResult {
							export class PNPresenceEventResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder>;
								public build(): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult;
								public subscription(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public toString(): string;
								public leave(param0: java.util.List<string>): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public hereNowRefresh(param0: java.lang.Boolean): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public timestamp(param0: java.lang.Long): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public timeout(param0: java.util.List<string>): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public userMetadata(param0: any): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public uuid(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public state(param0: com.google.gson.JsonElement): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public channel(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public occupancy(param0: java.lang.Integer): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								/** @deprecated */
								public subscribedChannel(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public join(param0: java.util.List<string>): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								/** @deprecated */
								public actualChannel(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
								public event(param0: string): com.pubnub.api.models.consumer.pubsub.PNPresenceEventResult.PNPresenceEventResultBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export class PNSignalResult extends com.pubnub.api.models.consumer.pubsub.MessageResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.PNSignalResult>;
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
							public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: com.google.gson.JsonElement);
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export module files {
							export class PNFileEventResult {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult>;
								public getPublisher(): string;
								public toString(): string;
								public canEqual(param0: any): boolean;
								public getChannel(): string;
								public getTimetoken(): java.lang.Long;
								public static builder(): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
								public equals(param0: any): boolean;
								public getFile(): com.pubnub.api.models.consumer.files.PNDownloadableFile;
								public hashCode(): number;
								public getMessage(): any;
							}
							export module PNFileEventResult {
								export class PNFileEventResultBuilder {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder>;
									public channel(param0: string): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
									public timetoken(param0: java.lang.Long): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
									public publisher(param0: string): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
									public toString(): string;
									public build(): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult;
									public file(param0: com.pubnub.api.models.consumer.files.PNDownloadableFile): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
									public message(param0: any): com.pubnub.api.models.consumer.pubsub.files.PNFileEventResult.PNFileEventResultBuilder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export module message_actions {
							export class PNMessageActionResult extends com.pubnub.api.models.consumer.pubsub.objects.ObjectResult<com.pubnub.api.models.consumer.message_actions.PNMessageAction> {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult>;
								public toString(): string;
								public static actionBuilder(): com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult.PNMessageActionResultBuilder;
								public getMessageAction(): com.pubnub.api.models.consumer.message_actions.PNMessageAction;
							}
							export module PNMessageActionResult {
								export class PNMessageActionResultBuilder {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult.PNMessageActionResultBuilder>;
									public event(param0: string): com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult.PNMessageActionResultBuilder;
									public data(param0: com.pubnub.api.models.consumer.message_actions.PNMessageAction): com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult.PNMessageActionResultBuilder;
									public toString(): string;
									public result(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult): com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult.PNMessageActionResultBuilder;
									public build(): com.pubnub.api.models.consumer.pubsub.message_actions.PNMessageActionResult;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export module objects {
							export class ObjectPayload {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.objects.ObjectPayload>;
								public setData(param0: com.google.gson.JsonElement): void;
								public getData(): com.google.gson.JsonElement;
								public toString(): string;
								public equals(param0: any): boolean;
								public getEvent(): string;
								public constructor();
								public setVersion(param0: string): void;
								public getVersion(): string;
								public setSource(param0: string): void;
								public canEqual(param0: any): boolean;
								public setType(param0: string): void;
								public hashCode(): number;
								public getSource(): string;
								public getType(): string;
								public setEvent(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module pubsub {
						export module objects {
							export abstract class ObjectResult<T> extends com.pubnub.api.models.consumer.pubsub.BasePubSubResult {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.pubsub.objects.ObjectResult<any>>;
								public event: string;
								public data: any;
								public toString(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: com.google.gson.JsonElement, param6: string);
								public getEvent(): string;
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult);
								public constructor(param0: com.pubnub.api.models.consumer.pubsub.BasePubSubResult, param1: string, param2: any);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export class PNPushAddChannelResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushAddChannelResult>;
							public static builder(): com.pubnub.api.models.consumer.push.PNPushAddChannelResult.PNPushAddChannelResultBuilder;
							public toString(): string;
						}
						export module PNPushAddChannelResult {
							export class PNPushAddChannelResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushAddChannelResult.PNPushAddChannelResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.push.PNPushAddChannelResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export class PNPushListProvisionsResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushListProvisionsResult>;
							public static builder(): com.pubnub.api.models.consumer.push.PNPushListProvisionsResult.PNPushListProvisionsResultBuilder;
							public getChannels(): java.util.List<string>;
							public toString(): string;
						}
						export module PNPushListProvisionsResult {
							export class PNPushListProvisionsResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushListProvisionsResult.PNPushListProvisionsResultBuilder>;
								public toString(): string;
								public channels(param0: java.util.List<string>): com.pubnub.api.models.consumer.push.PNPushListProvisionsResult.PNPushListProvisionsResultBuilder;
								public build(): com.pubnub.api.models.consumer.push.PNPushListProvisionsResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export class PNPushRemoveAllChannelsResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult>;
							public static builder(): com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult.PNPushRemoveAllChannelsResultBuilder;
							public toString(): string;
						}
						export module PNPushRemoveAllChannelsResult {
							export class PNPushRemoveAllChannelsResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult.PNPushRemoveAllChannelsResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.push.PNPushRemoveAllChannelsResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export class PNPushRemoveChannelResult {
							public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult>;
							public static builder(): com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult.PNPushRemoveChannelResultBuilder;
							public toString(): string;
						}
						export module PNPushRemoveChannelResult {
							export class PNPushRemoveChannelResultBuilder {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult.PNPushRemoveChannelResultBuilder>;
								public toString(): string;
								public build(): com.pubnub.api.models.consumer.push.PNPushRemoveChannelResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export module payload {
							export class PushPayloadHelper {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper>;
								public setFcmPayload(param0: com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper;
								public build(): java.util.Map<string, any>;
								public constructor();
								public setApnsPayload(param0: com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper;
								public setCommonPayload(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper;
								public setMpnsPayload(param0: com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper;
							}
							export module PushPayloadHelper {
								export class APNSPayload extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload>;
									public constructor();
									public setApns2Configurations(param0: java.util.List<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload;
									public toMap(): java.util.Map<string, any>;
									public setCustom(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload;
									public setAps(param0: com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APS): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload;
								}
								export module APNSPayload {
									export class APNS2Configuration extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
										public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration>;
										public setCollapseId(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration;
										public toMap(): java.util.Map<string, any>;
										public constructor();
										public setExpiration(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration;
										public setTargets(param0: java.util.List<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration.Target>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration;
										public setVersion(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration;
									}
									export module APNS2Configuration {
										export class Target extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
											public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration.Target>;
											public setTopic(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration.Target;
											public toMap(): java.util.Map<string, any>;
											public setEnvironment(param0: com.pubnub.api.enums.PNPushEnvironment): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration.Target;
											public setExcludeDevices(param0: java.util.List<string>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APNS2Configuration.Target;
											public constructor();
										}
									}
									export class APS extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
										public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APS>;
										public setAlert(param0: any): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APS;
										public toMap(): java.util.Map<string, any>;
										public constructor();
										public setSound(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APS;
										public setBadge(param0: java.lang.Integer): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.APNSPayload.APS;
									}
								}
								export class FCMPayload extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload>;
									public constructor();
									public setCustom(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload;
									public setNotification(param0: com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload;
									public setData(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload;
									public toMap(): java.util.Map<string, any>;
								}
								export module FCMPayload {
									export class Notification extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
										public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification>;
										public setTitle(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
										public setClickAction(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
										public set(param0: string, param1: any): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
										public setImage(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
										public toMap(): java.util.Map<string, any>;
										public setBody(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
										public constructor();
										public setParametersMap(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.FCMPayload.Notification;
									}
								}
								export class MPNSPayload extends com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer {
									public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload>;
									public setType(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
									public constructor();
									public setCount(param0: java.lang.Integer): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
									public setBackTitle(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
									public toMap(): java.util.Map<string, any>;
									public setBackContent(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
									public setTitle(param0: string): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
									public setCustom(param0: java.util.Map<string, any>): com.pubnub.api.models.consumer.push.payload.PushPayloadHelper.MPNSPayload;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module consumer {
					export module push {
						export module payload {
							export class PushPayloadSerializer {
								public static class: java.lang.Class<com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer>;
								/**
								 * Constructs a new instance of the com.pubnub.api.models.consumer.push.payload.PushPayloadSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { toMap(): java.util.Map<string, any> });
								public constructor();
								public toMap(): java.util.Map<string, any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class DeleteMessagesEnvelope {
						public static class: java.lang.Class<com.pubnub.api.models.server.DeleteMessagesEnvelope>;
						public getErrorMessage(): string;
						public constructor();
						public setStatus(param0: java.lang.Integer): void;
						public isError(): boolean;
						public setError(param0: boolean): void;
						public getStatus(): java.lang.Integer;
						public setErrorMessage(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class Envelope<T> extends java.lang.Object {
						public static class: java.lang.Class<com.pubnub.api.models.server.Envelope<any>>;
						public getAction(): string;
						public getMessage(): string;
						public setMessage(param0: string): void;
						public constructor();
						public setUuids(param0: com.google.gson.JsonElement): void;
						public getService(): string;
						public isError(): boolean;
						public setError(param0: boolean): void;
						public setService(param0: string): void;
						public getPayload(): T;
						public setPayload(param0: T): void;
						public setStatus(param0: number): void;
						public setOccupancy(param0: number): void;
						public setAction(param0: string): void;
						public getOccupancy(): number;
						public getUuids(): com.google.gson.JsonElement;
						public getStatus(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class FetchMessagesEnvelope {
						public static class: java.lang.Class<com.pubnub.api.models.server.FetchMessagesEnvelope>;
						public constructor();
						public getChannels(): java.util.Map<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem>>;
						public setChannels(param0: java.util.Map<string, java.util.List<com.pubnub.api.models.consumer.history.PNFetchMessageItem>>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class OriginationMetaData {
						public static class: java.lang.Class<com.pubnub.api.models.server.OriginationMetaData>;
						public getTimetoken(): java.lang.Long;
						public constructor();
						public getRegion(): java.lang.Integer;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class PresenceEnvelope {
						public static class: java.lang.Class<com.pubnub.api.models.server.PresenceEnvelope>;
						public getAction(): string;
						public getOccupancy(): java.lang.Integer;
						public constructor();
						public getUuid(): string;
						public getTimestamp(): java.lang.Long;
						public getData(): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class PublishMetaData {
						public static class: java.lang.Class<com.pubnub.api.models.server.PublishMetaData>;
						public constructor();
						public getRegion(): java.lang.Integer;
						public getPublishTimetoken(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class SubscribeEnvelope {
						public static class: java.lang.Class<com.pubnub.api.models.server.SubscribeEnvelope>;
						public constructor();
						public getMessages(): java.util.List<com.pubnub.api.models.server.SubscribeMessage>;
						public getMetadata(): com.pubnub.api.models.server.SubscribeMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class SubscribeMessage {
						public static class: java.lang.Class<com.pubnub.api.models.server.SubscribeMessage>;
						public constructor();
						public getShard(): string;
						public getChannel(): string;
						public getSubscribeKey(): string;
						public getType(): java.lang.Integer;
						public supportsEncryption(): boolean;
						public getPayload(): com.google.gson.JsonElement;
						public getOriginationMetadata(): com.pubnub.api.models.server.OriginationMetaData;
						public getFlags(): string;
						public getSubscriptionMatch(): string;
						public getPublishMetaData(): com.pubnub.api.models.server.PublishMetaData;
						public getIssuingClientId(): string;
						public getUserMetadata(): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export class SubscribeMetadata {
						public static class: java.lang.Class<com.pubnub.api.models.server.SubscribeMetadata>;
						public getTimetoken(): java.lang.Long;
						public constructor();
						public getRegion(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module access_manager {
						export class AccessManagerGrantPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>;
							public constructor();
							public getChannels(): java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeysData>;
							public getAuthKeys(): java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeyData>;
							public getSubscribeKey(): string;
							public getLevel(): string;
							public getUuids(): java.util.Map<string, com.pubnub.api.models.consumer.access_manager.PNAccessManagerKeysData>;
							public getTtl(): number;
							public getChannel(): string;
							public getChannelGroups(): com.google.gson.JsonElement;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module access_manager {
						export module v3 {
							export class GrantTokenRequestBody {
								public static class: java.lang.Class<com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody>;
								public assemble(): com.google.gson.JsonObject;
								public static builder(): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
							}
							export module GrantTokenRequestBody {
								export class GrantTokenRequestBodyBuilder {
									public static class: java.lang.Class<com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder>;
									public users(param0: java.util.List<com.pubnub.api.models.consumer.access_manager.v3.User>): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public channels(param0: java.util.List<com.pubnub.api.models.consumer.access_manager.v3.Channel>): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public groups(param0: java.util.List<com.pubnub.api.models.consumer.access_manager.v3.Group>): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public ttl(param0: java.lang.Integer): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public pubNub(param0: com.pubnub.api.PubNub): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public build(): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody;
									public toString(): string;
									public meta(param0: any): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
									public spaces(param0: java.util.List<com.pubnub.api.models.consumer.access_manager.v3.Space>): com.pubnub.api.models.server.access_manager.v3.GrantTokenRequestBody.GrantTokenRequestBodyBuilder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class FileUploadNotification {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.FileUploadNotification>;
							public getFile(): com.pubnub.api.models.consumer.files.PNBaseFile;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: any, param1: com.pubnub.api.models.consumer.files.PNBaseFile);
							public getMessage(): any;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class FileUploadRequestDetails {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.FileUploadRequestDetails>;
							public getKeyFormField(): com.pubnub.api.models.server.files.FormField;
							public getData(): com.pubnub.api.models.consumer.files.PNFile;
							public getMethod(): string;
							public hashCode(): number;
							public getUrl(): string;
							public getFormFields(): java.util.List<com.pubnub.api.models.server.files.FormField>;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: java.lang.Integer, param1: com.pubnub.api.models.consumer.files.PNFile, param2: string, param3: string, param4: string, param5: com.pubnub.api.models.server.files.FormField, param6: java.util.List<com.pubnub.api.models.server.files.FormField>);
							public getStatus(): java.lang.Integer;
							public getExpirationDate(): string;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class FormField {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.FormField>;
							public getKey(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public getValue(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class GenerateUploadUrlPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.GenerateUploadUrlPayload>;
							public hashCode(): number;
							public constructor(param0: string);
							public getName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class GeneratedUploadUrlResponse {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse>;
							public getFileUploadRequest(): com.pubnub.api.models.server.files.GeneratedUploadUrlResponse.FileUploadRequest;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: java.lang.Integer, param1: com.pubnub.api.models.consumer.files.PNUploadedFile, param2: com.pubnub.api.models.server.files.GeneratedUploadUrlResponse.FileUploadRequest);
							public getStatus(): java.lang.Integer;
							public getData(): com.pubnub.api.models.consumer.files.PNUploadedFile;
							public canEqual(param0: any): boolean;
						}
						export module GeneratedUploadUrlResponse {
							export class FileUploadRequest {
								public static class: java.lang.Class<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse.FileUploadRequest>;
								public toString(): string;
								public constructor(param0: string, param1: string, param2: string, param3: java.util.List<com.pubnub.api.models.server.files.FormField>);
								public canEqual(param0: any): boolean;
								public getMethod(): string;
								public getFormFields(): java.util.List<com.pubnub.api.models.server.files.FormField>;
								public equals(param0: any): boolean;
								public getUrl(): string;
								public getExpirationDate(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module files {
						export class ListFilesResult {
							public static class: java.lang.Class<com.pubnub.api.models.server.files.ListFilesResult>;
							public getStatus(): number;
							public hashCode(): number;
							public getData(): java.util.Collection<com.pubnub.api.models.consumer.files.PNUploadedFile>;
							public toString(): string;
							public constructor(param0: number, param1: string, param2: number, param3: java.util.Collection<com.pubnub.api.models.consumer.files.PNUploadedFile>);
							public getCount(): number;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
							public getNext(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class EntityArrayEnvelope<T> extends com.pubnub.api.models.server.objects_api.EntityEnvelope<java.util.List<any>> {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<any>>;
							public totalCount: java.lang.Integer;
							public next: string;
							public prev: string;
							public constructor();
							public nextPage(): com.pubnub.api.models.consumer.PNPage;
							public getPrev(): string;
							public toString(): string;
							public previousPage(): com.pubnub.api.models.consumer.PNPage;
							public getTotalCount(): java.lang.Integer;
							public getNext(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class EntityEnvelope<T> extends java.lang.Object {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.EntityEnvelope<any>>;
							public status: number;
							public data: T;
							public constructor();
							public getStatus(): number;
							public getData(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class PatchMemberPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.PatchMemberPayload>;
							public getDelete(): java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>;
							public hashCode(): number;
							public getSet(): java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
							public constructor(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>, param1: java.util.Collection<com.pubnub.api.models.consumer.objects_api.member.PNUUID>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class PatchMembershipPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.PatchMembershipPayload>;
							public getDelete(): java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>;
							public hashCode(): number;
							public constructor(param0: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>, param1: java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>);
							public getSet(): java.util.Collection<com.pubnub.api.models.consumer.objects_api.membership.PNChannelMembership>;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class SetChannelMetadataPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.SetChannelMetadataPayload>;
							public getCustom(): any;
							public getName(): string;
							public toString(): string;
							public getDescription(): string;
							public constructor(param0: string, param1: string, param2: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module objects_api {
						export class SetUUIDMetadataPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.objects_api.SetUUIDMetadataPayload>;
							public getCustom(): any;
							public getProfileUrl(): string;
							public getName(): string;
							public getEmail(): string;
							public toString(): string;
							public getExternalId(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module models {
				export module server {
					export module presence {
						export class WhereNowPayload {
							public static class: java.lang.Class<com.pubnub.api.models.server.presence.WhereNowPayload>;
							public constructor();
							public hashCode(): number;
							public getChannels(): java.util.List<string>;
							public toString(): string;
							public setChannels(param0: java.util.List<string>): void;
							public equals(param0: any): boolean;
							public canEqual(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class AccessManagerService {
					public static class: java.lang.Class<com.pubnub.api.services.AccessManagerService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.AccessManagerService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { grant(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>>; grantToken(param0: string, param1: any, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonObject> });
					public constructor();
					public grant(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.access_manager.AccessManagerGrantPayload>>;
					public grantToken(param0: string, param1: any, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonObject>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class ChannelGroupService {
					public static class: java.lang.Class<com.pubnub.api.services.ChannelGroupService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.ChannelGroupService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						listAllChannelGroup(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						allChannelsChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						addChannelChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						removeChannel(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						deleteChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					});
					public constructor();
					public deleteChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public allChannelsChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public listAllChannelGroup(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public removeChannel(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public addChannelChannelGroup(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class ChannelMetadataService {
					public static class: java.lang.Class<com.pubnub.api.services.ChannelMetadataService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.ChannelMetadataService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChannelMetadata(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
						getChannelMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
						setChannelsMetadata(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.SetChannelMetadataPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
						deleteChannelMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
						getMembers(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
						patchMembers(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.PatchMemberPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
					});
					public constructor();
					public patchMembers(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.PatchMemberPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
					public getChannelMetadata(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
					public deleteChannelMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
					public setChannelsMetadata(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.SetChannelMetadataPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
					public getMembers(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.member.PNMembers>>;
					public getChannelMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.channel.PNChannelMetadata>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class FilesService {
					public static class: java.lang.Class<com.pubnub.api.services.FilesService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.FilesService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generateUploadUrl(param0: string, param1: string, param2: com.pubnub.api.models.server.files.GenerateUploadUrlPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse>;
						notifyAboutFileUpload(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						listFiles(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.ListFilesResult>;
						downloadFile(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<okhttp3.ResponseBody>;
						deleteFile(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.lang.Void>;
					});
					public constructor();
					public static GET_FILE_URL: string;
					public notifyAboutFileUpload(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					public generateUploadUrl(param0: string, param1: string, param2: com.pubnub.api.models.server.files.GenerateUploadUrlPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.GeneratedUploadUrlResponse>;
					public listFiles(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.files.ListFilesResult>;
					public downloadFile(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<okhttp3.ResponseBody>;
					public deleteFile(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class HistoryService {
					public static class: java.lang.Class<com.pubnub.api.services.HistoryService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.HistoryService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchHistory(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
						deleteMessages(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.DeleteMessagesEnvelope>;
						fetchMessages(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.FetchMessagesEnvelope>;
						fetchMessagesWithActions(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.FetchMessagesEnvelope>;
						fetchCount(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
					});
					public constructor();
					public fetchMessagesWithActions(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.FetchMessagesEnvelope>;
					public fetchHistory(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
					public deleteMessages(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.DeleteMessagesEnvelope>;
					public fetchCount(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonElement>;
					public fetchMessages(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.FetchMessagesEnvelope>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class MessageActionService {
					public static class: java.lang.Class<com.pubnub.api.services.MessageActionService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.MessageActionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { addMessageAction(param0: string, param1: string, param2: string, param3: any, param4: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.message_actions.PNMessageAction>>; getMessageActions(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonObject>; deleteMessageAction(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<any> });
					public constructor();
					public getMessageActions(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.google.gson.JsonObject>;
					public addMessageAction(param0: string, param1: string, param2: string, param3: any, param4: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.message_actions.PNMessageAction>>;
					public deleteMessageAction(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<any>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class PresenceService {
					public static class: java.lang.Class<com.pubnub.api.services.PresenceService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.PresenceService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						leave(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						heartbeat(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
						whereNow(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.presence.WhereNowPayload>>;
						globalHereNow(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						hereNow(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						getState(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
						setState(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
					});
					public constructor();
					public getState(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
					public leave(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public setState(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
					public globalHereNow(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
					public hereNow(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.google.gson.JsonElement>>;
					public heartbeat(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<any>>;
					public whereNow(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.Envelope<com.pubnub.api.models.server.presence.WhereNowPayload>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class PublishService {
					public static class: java.lang.Class<com.pubnub.api.services.PublishService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.PublishService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { publish(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>; publishWithPost(param0: string, param1: string, param2: string, param3: any, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>> });
					public constructor();
					public publishWithPost(param0: string, param1: string, param2: string, param3: any, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					public publish(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class PushService {
					public static class: java.lang.Class<com.pubnub.api.services.PushService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.PushService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						modifyChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						removeAllChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						listChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<string>>;
						modifyChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
						listChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<string>>;
						removeAllChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					});
					public constructor();
					public removeAllChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					public listChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<string>>;
					public removeAllChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					public modifyChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
					public listChannelsForDeviceApns2(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<string>>;
					public modifyChannelsForDevice(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class S3Service {
					public static class: java.lang.Class<com.pubnub.api.services.S3Service>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.S3Service interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { upload(param0: string, param1: okhttp3.MultipartBody): retrofit2.Call<java.lang.Void> });
					public constructor();
					public upload(param0: string, param1: okhttp3.MultipartBody): retrofit2.Call<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class SignalService {
					public static class: java.lang.Class<com.pubnub.api.services.SignalService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.SignalService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { signal(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>> });
					public constructor();
					public signal(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, string>): retrofit2.Call<java.util.List<any>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class SubscribeService {
					public static class: java.lang.Class<com.pubnub.api.services.SubscribeService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.SubscribeService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { subscribe(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.SubscribeEnvelope> });
					public constructor();
					public subscribe(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.SubscribeEnvelope>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class TimeService {
					public static class: java.lang.Class<com.pubnub.api.services.TimeService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.TimeService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchTime(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<java.lang.Long>> });
					public constructor();
					public fetchTime(param0: java.util.Map<string, string>): retrofit2.Call<java.util.List<java.lang.Long>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module services {
				export class UUIDMetadataService {
					public static class: java.lang.Class<com.pubnub.api.services.UUIDMetadataService>;
					/**
					 * Constructs a new instance of the com.pubnub.api.services.UUIDMetadataService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUUIDMetadata(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
						getUUIDMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
						setUUIDsMetadata(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.SetUUIDMetadataPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
						deleteUUIDMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
						getMemberships(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
						patchMembership(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.PatchMembershipPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
					});
					public constructor();
					public deleteUUIDMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.google.gson.JsonElement>>;
					public patchMembership(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.PatchMembershipPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
					public getMemberships(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.membership.PNMembership>>;
					public getUUIDMetadata(param0: string, param1: string, param2: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
					public getUUIDMetadata(param0: string, param1: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityArrayEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
					public setUUIDsMetadata(param0: string, param1: string, param2: com.pubnub.api.models.server.objects_api.SetUUIDMetadataPayload, param3: java.util.Map<string, string>): retrofit2.Call<com.pubnub.api.models.server.objects_api.EntityEnvelope<com.pubnub.api.models.consumer.objects_api.uuid.PNUUIDMetadata>>;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module vendor {
				export class Base64 {
					public static class: java.lang.Class<com.pubnub.api.vendor.Base64>;
					public static DEFAULT: number;
					public static NO_PADDING: number;
					public static NO_WRAP: number;
					public static CRLF: number;
					public static URL_SAFE: number;
					public static NO_CLOSE: number;
					public static decode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					public static encodeToString(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): string;
					public static encodeToString(param0: androidNative.Array<number>, param1: number): string;
					public static decode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
					public static decode(param0: string, param1: number): androidNative.Array<number>;
					public static encode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
					public static encode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				}
				export module Base64 {
					export abstract class Coder {
						public static class: java.lang.Class<com.pubnub.api.vendor.Base64.Coder>;
						public output: androidNative.Array<number>;
						public op: number;
						public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
					}
					export class Decoder extends com.pubnub.api.vendor.Base64.Coder {
						public static class: java.lang.Class<com.pubnub.api.vendor.Base64.Decoder>;
						public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: androidNative.Array<number>);
					}
					export class Encoder extends com.pubnub.api.vendor.Base64.Coder {
						public static class: java.lang.Class<com.pubnub.api.vendor.Base64.Encoder>;
						public static LINE_GROUPS: number;
						public do_padding: boolean;
						public do_newline: boolean;
						public do_cr: boolean;
						public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: androidNative.Array<number>);
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module vendor {
				export class Crypto {
					public static class: java.lang.Class<com.pubnub.api.vendor.Crypto>;
					public constructor(param0: string, param1: string);
					public constructor(param0: string);
					public decrypt(param0: string): string;
					public constructor(param0: string, param1: boolean);
					public static md5(param0: string): androidNative.Array<number>;
					public static sha256(param0: androidNative.Array<number>): androidNative.Array<number>;
					public static hexStringToByteArray(param0: string): androidNative.Array<number>;
					public static hexEncode(param0: androidNative.Array<number>): androidNative.Array<number>;
					public encrypt(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module vendor {
				export class FileEncryptionUtil {
					public static class: java.lang.Class<com.pubnub.api.vendor.FileEncryptionUtil>;
					public static BUFFER_SIZE_BYTES: number;
					public static loadFromInputStream(param0: java.io.InputStream): androidNative.Array<number>;
					public static encryptToBytes(param0: string, param1: java.io.InputStream): androidNative.Array<number>;
					public static encrypt(param0: string, param1: java.io.InputStream): java.io.InputStream;
					public static decrypt(param0: string, param1: java.io.InputStream): java.io.InputStream;
					public static effectiveCipherKey(param0: com.pubnub.api.PubNub, param1: string): string;
				}
				export module FileEncryptionUtil {
					export class IvAndData {
						public static class: java.lang.Class<com.pubnub.api.vendor.FileEncryptionUtil.IvAndData>;
						public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>);
						public getDataToDecrypt(): androidNative.Array<number>;
						public getIvBytes(): androidNative.Array<number>;
						public equals(param0: any): boolean;
						public canEqual(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pubnub {
		export module api {
			export module workers {
				export class SubscribeMessageWorker {
					public static class: java.lang.Class<com.pubnub.api.workers.SubscribeMessageWorker>;
					public static TYPE_MESSAGE: number;
					public static TYPE_FILES: number;
					public constructor(param0: com.pubnub.api.PubNub, param1: com.pubnub.api.managers.ListenerManager, param2: java.util.concurrent.LinkedBlockingQueue<com.pubnub.api.models.server.SubscribeMessage>, param3: com.pubnub.api.managers.DuplicationManager);
					public run(): void;
				}
			}
		}
	}
}

//Generics information:
//com.pubnub.api.callbacks.PNCallback:1
//com.pubnub.api.endpoints.BuilderSteps.ChannelStep:1
//com.pubnub.api.endpoints.Endpoint:2
//com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder:1
//com.pubnub.api.endpoints.files.requiredparambuilder.ChannelFileNameFileIdBuilder.InnerBuilder:1
//com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileIdStep:1
//com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.FileNameStep:1
//com.pubnub.api.endpoints.files.requiredparambuilder.FilesBuilderSteps.InputStreamStep:1
//com.pubnub.api.endpoints.objects_api.ChannelEnpoint:2
//com.pubnub.api.endpoints.objects_api.ObjectApiEndpoint:2
//com.pubnub.api.endpoints.objects_api.UUIDEndpoint:3
//com.pubnub.api.endpoints.objects_api.utils.Filter.FilterAware:1
//com.pubnub.api.endpoints.objects_api.utils.Filter.HavingFilter:1
//com.pubnub.api.endpoints.objects_api.utils.Include.ChannelIncludeAware:1
//com.pubnub.api.endpoints.objects_api.utils.Include.CustomIncludeAware:1
//com.pubnub.api.endpoints.objects_api.utils.Include.HavingChannelInclude:1
//com.pubnub.api.endpoints.objects_api.utils.Include.HavingCustomInclude:1
//com.pubnub.api.endpoints.objects_api.utils.Include.HavingUUIDInclude:1
//com.pubnub.api.endpoints.objects_api.utils.Include.UUIDIncludeAware:1
//com.pubnub.api.endpoints.objects_api.utils.Limiter.HavingLimiter:1
//com.pubnub.api.endpoints.objects_api.utils.Limiter.LimitAware:1
//com.pubnub.api.endpoints.objects_api.utils.ListCapabilities.HavingListCapabilites:1
//com.pubnub.api.endpoints.objects_api.utils.ListCapabilities.ListCapabilitiesAware:1
//com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.ChannelMembershipsStep:1
//com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep:2
//com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.RemoveStep:2
//com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.RemoveOrSetStep.SetStep:2
//com.pubnub.api.endpoints.objects_api.utils.ObjectsBuilderSteps.UUIDsStep:1
//com.pubnub.api.endpoints.objects_api.utils.Pager.HavingPager:1
//com.pubnub.api.endpoints.objects_api.utils.Pager.PagingAware:1
//com.pubnub.api.endpoints.objects_api.utils.Sorter.HavingSorter:1
//com.pubnub.api.endpoints.objects_api.utils.Sorter.SortingAware:1
//com.pubnub.api.endpoints.objects_api.utils.TotalCounter.HavingTotalCounter:1
//com.pubnub.api.endpoints.objects_api.utils.TotalCounter.TotalCountAware:1
//com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction:2
//com.pubnub.api.endpoints.remoteaction.ComposableRemoteAction.ComposableBuilder:1
//com.pubnub.api.endpoints.remoteaction.MappingRemoteAction:2
//com.pubnub.api.endpoints.remoteaction.PNFunction:2
//com.pubnub.api.endpoints.remoteaction.PNFunction3:4
//com.pubnub.api.endpoints.remoteaction.RemoteAction:1
//com.pubnub.api.endpoints.remoteaction.RemoteActionFactory:2
//com.pubnub.api.endpoints.remoteaction.RetryingRemoteAction:1
//com.pubnub.api.endpoints.remoteaction.RetryingRemoteAction.ResultAndStatus:1
//com.pubnub.api.models.consumer.access_manager.v3.PNResource:1
//com.pubnub.api.models.consumer.pubsub.objects.ObjectResult:1
//com.pubnub.api.models.server.Envelope:1
//com.pubnub.api.models.server.objects_api.EntityArrayEnvelope:1
//com.pubnub.api.models.server.objects_api.EntityEnvelope:1
