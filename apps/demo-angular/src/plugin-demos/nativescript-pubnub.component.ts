import { Component, NgZone } from '@angular/core';
import { DemoSharedPubNub } from '@demo/shared';
import { PubNubNS, PNConfiguration, PNEventListener } from '@groupsosimple/nativescript-pubnub';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class PubNubComponent {
	demoShared: DemoSharedPubNub;
	pubnub: PubNubNS;
	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPubNub();

		this.pubnub = new PubNubNS(<PNConfiguration>{ publishKey: 'demo', subscribeKey: 'demo' });
		this.pubnub.addEventListener(<PNEventListener>{
			status: function (event) {
				console.log('status: ', event);
			},
			message: function (event) {
				console.log('message: ', event.message);
			},
			presence: function (event) {
				console.log('pres: ', event.event);
			},
		});

		this.pubnub.subscribe(['teste'], true);

		this.pubnub.publish('teste', { teste: 'teste123' }, (status) => {
			console.log('pub: ', status);
		});
	}

	ngOnDestroy() {
		delete this.pubnub;
	}
}
