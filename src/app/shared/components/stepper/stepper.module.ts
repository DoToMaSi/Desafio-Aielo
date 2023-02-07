import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcStepperComponent } from './ac-stepper/ac-stepper.component';
import { StepperService } from './service/stepper.service';

@NgModule({
  declarations: [
    AcStepperComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StepperService
  ],
  exports: [
    AcStepperComponent
  ]
})

export class StepperModule { }
