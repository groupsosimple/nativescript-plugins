export * from './common';
import { PubNubApi } from './common';

export declare class PubNub implements PubNubApi {
	constructor(config: PNConfiguration);
	subscribe(channels: string[], withPresence: boolean): void;
	subscribeToChannelGroups(groups: string[], withPresence: boolean): void;
	unsubscribe(channels: string[]): void;
	unsubscribeFromAll(): void;
	unsubscribeFromChannelGroups(groups: string[]): void;
	publish(channel: string, message: Object, responseListener: (result: PNPublishResponse, status: PNStatus) => void): void;
	addEventListener(event: PNEventListener): void;
}
