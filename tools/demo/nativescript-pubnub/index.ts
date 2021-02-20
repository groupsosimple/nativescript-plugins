import { DemoSharedBase } from '../utils';
import { PubNub, PNConfiguration } from '@groupsosimple/nativescript-pubnub';
import { fromObject } from '@nativescript/core';

export class DemoSharedPubNub extends DemoSharedBase {
	pubnub = new PubNub(<PNConfiguration>{ publishKey: 'demo', subscribeKey: 'demo' });
	channel = 'myChannel';
	messages = fromObject({
		received: '',
	});
	constructor() {
		super();
		this.pubnub.addEventListener({
			status: (event) => {
				console.log('Status Event: ', event);
			},
			message: (event) => {
				console.log('Message Event: ', event);
				this.messages['received'] = this.messages['received'] + '\n' + JSON.stringify(event.message);
			},
			presence: (event) => {
				console.log('Presence Event: ', event);
			},
		});

		this.pubnub.subscribe([this.channel], true);
	}

	testIt() {
		this.pubnub.publish(this.channel, 'My test message!', (status) => {
			console.log('Publish Status:', status);
		});
	}
}
