import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'nativescript-image-generator', loadChildren: () => import('./plugin-demos/nativescript-image-generator.module').then((m) => m.NativescriptImageGeneratorModule) },
	{ path: 'nativescript-pubnub', loadChildren: () => import('./plugin-demos/nativescript-pubnub.module').then((m) => m.NativescriptPubnubModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
