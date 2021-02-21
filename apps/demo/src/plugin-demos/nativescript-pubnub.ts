import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPubNub } from '@demo/shared';
import { PubNub } from '@groupsosimple/nativescript-pubnub';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPubNub {
	constructor() {
		super(new PubNub());
	}
}
