import { DemoSharedBase } from '../utils';
import { PubNub, PNConfiguration } from '@groupsosimple/nativescript-pubnub';
import { fromObject } from '@nativescript/core';

export class DemoSharedPubNub extends DemoSharedBase {
	pubnubConfig = <PNConfiguration>{ publishKey: 'demo', subscribeKey: 'demo' };
	channel = 'myChannel';
	messages = fromObject({
		received: '',
	});
	constructor(private pubnub: PubNub) {
		super();
		this.pubnub.configuration(this.pubnubConfig);
		this.pubnub.addEventListener({
			status: (event) => {
				console.log('Status Event: ', event);
			},
			message: (event) => {
				console.log('Message Event: ', event);
				this.addNewMessage(event.message);
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

	addNewMessage(message) {
		this.messages['received'] = this.messages['received'] + '\n' + JSON.stringify(message);
	}
}
