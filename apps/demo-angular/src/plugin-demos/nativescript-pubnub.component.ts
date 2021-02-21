import { Component, NgZone } from '@angular/core';
import { DemoSharedPubNub } from '@demo/shared';
import { PubNubService } from '@groupsosimple/nativescript-pubnub/angular';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class PubNubComponent extends DemoSharedPubNub {
	constructor(private _ngZone: NgZone, private pubnubService: PubNubService) {
		super(pubnubService);
	}

	ngOnInit() {}

	addNewMessage(message) {
		this._ngZone.run(() => {
			super.addNewMessage(message);
		});
	}
}
