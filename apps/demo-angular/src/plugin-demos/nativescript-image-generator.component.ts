import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptImageGenerator } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-image-generator',
	templateUrl: 'nativescript-image-generator.component.html',
})
export class NativescriptImageGeneratorComponent {
	demoShared: DemoSharedNativescriptImageGenerator;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptImageGenerator();
	}
}
