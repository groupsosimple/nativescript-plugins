import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPubNub } from '@demo/shared';
import { PubNub, PNConfiguration, PNEventListener } from '@groupsosimple/nativescript-pubnub';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPubNub {
	constructor() {
		super();
		let pubnub = new PubNub(<PNConfiguration>{ publishKey: 'demo', subscribeKey: 'demo' });
		pubnub.addEventListener(<PNEventListener>{
			status: function (event) {
				console.log(event);
			},
			message: function (event) {
				console.log(event);
			},
			presence: function (event) {
				console.log(event);
			},
		});

		pubnub.subscribe(['teste'], true);

		pubnub.publish('teste', 'teste123', (result, status) => {
			console.log(status);
		});
	}
}
