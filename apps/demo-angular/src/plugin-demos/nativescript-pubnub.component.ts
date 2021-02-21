import { Component, NgZone } from '@angular/core';
import { DemoSharedPubNub } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class PubNubComponent extends DemoSharedPubNub {
	constructor(private _ngZone: NgZone) {
		super();
	}

	ngOnInit() {}

	addNewMessage(message) {
		this._ngZone.run(() => {
			super.addNewMessage(message);
		});
	}
}
