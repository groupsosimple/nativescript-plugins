import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PubNubComponent } from './nativescript-pubnub.component';
import { PubNubService } from '@groupsosimple/nativescript-pubnub/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PubNubComponent }])],
	declarations: [PubNubComponent],
	schemas: [NO_ERRORS_SCHEMA],
	providers: [PubNubService],
})
export class NativescriptPubNubModule {}
