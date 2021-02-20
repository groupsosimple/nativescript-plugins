import { DemoSharedBase } from '../utils';
import { PubNub, PNConfiguration } from '@groupsosimple/nativescript-pubnub';

export class DemoSharedPubNub extends DemoSharedBase {
	pubnub = new PubNub(<PNConfiguration>{ publishKey: 'demo', subscribeKey: 'demo' });

	constructor() {
		super();
		this.pubnub.addEventListener({
			status: function (event) {
				console.log('Status Event: ', event);
			},
			message: function (event) {
				console.log('Message Event: ', event);
			},
			presence: function (event) {
				console.log('Presence Event: ', event);
			},
		});

		this.pubnub.subscribe(['myChannel'], true);
	}

	testIt() {
		console.log('Teste');
		this.pubnub.publish('tradeja.votesCounting.questId:test', 'My test message!', (status) => {
			console.log('Publish Status:', status);
		});
	}
}
