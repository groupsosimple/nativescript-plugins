import { DemoSharedBase } from '../utils';
import { PubNub, PNConfiguration } from '@groupsosimple/nativescript-pubnub';
import { fromObject } from '@nativescript/core';

export class DemoSharedPubNub extends DemoSharedBase {
	pubnubConfig = <PNConfiguration>{ publishKey: 'pub-c-90d98513-c938-415d-a030-bd94dce95a9e', subscribeKey: 'sub-c-abc7754a-550d-11eb-bf6e-f20b4949e6d2' };
	channel = 'tradeja.votesCounting.questId:test';
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
