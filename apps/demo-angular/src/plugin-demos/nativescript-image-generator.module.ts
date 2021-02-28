import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptImageGeneratorComponent } from './nativescript-image-generator.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptImageGeneratorComponent }])],
	declarations: [NativescriptImageGeneratorComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptImageGeneratorModule {}
