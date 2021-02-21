export * from './common';
import { PubNubNSApi as PubNubApi, PNConfiguration, PNEventListener, PNPublishResponse, PNStatus } from './common';

export declare class PubNub implements PubNubApi {
	constructor(config: PNConfiguration);
	subscribe(channels: string[], withPresence: boolean): void;
	subscribeToChannelGroups(groups: string[], withPresence: boolean): void;
	unsubscribe(channels: string[]): void;
	unsubscribeFromAll(): void;
	unsubscribeFromChannelGroups(groups: string[]): void;
	publish(channel: string, message: Object, responseListener: (status: PNStatus) => void): void;
	addEventListener(event: PNEventListener): void;
	destroy(): void;
}
