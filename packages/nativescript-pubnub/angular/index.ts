import { Injectable } from '@angular/core';
import { PubNub } from '@groupsosimple/nativescript-pubnub';

@Injectable({
	providedIn: 'root',
})
export class PubNubService extends PubNub {}
