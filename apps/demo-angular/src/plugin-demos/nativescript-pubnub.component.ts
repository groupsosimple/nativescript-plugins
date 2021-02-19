import { Component, NgZone } from '@angular/core';
import { DemoSharedPubNub } from '@demo/shared';
import { PubNub, PubNubConfig, PubNubEventListener } from '@groupsosimple/nativescript-pubnub';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class PubNubComponent {
	demoShared: DemoSharedPubNub;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPubNub();

		let pubnub = new PubNub(<PubNubConfig>{ publishKey: 'demo', subscribeKey: 'demo' });
		pubnub.addEventListener(<PubNubEventListener>{
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

		pubnub.publish('teste', 'teste123', null);
	}
}
