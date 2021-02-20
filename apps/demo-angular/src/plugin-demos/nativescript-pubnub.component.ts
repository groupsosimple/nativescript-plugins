import { Component, NgZone } from '@angular/core';
import { DemoSharedPubNub } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-pubnub',
	templateUrl: 'nativescript-pubnub.component.html',
})
export class PubNubComponent {
	demoShared: DemoSharedPubNub;
	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPubNub();
	}
}
