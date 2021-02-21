import { PubNubNS } from './pubnub.ios';

/**
 * Since the Objective C PubNub SDK classes
 * have the same name as ours, we need to rename after the implementation.
 * The implementation is located at the pubnub.ios.ts file
 */

export class PubNub extends PubNubNS {}
