import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcInputComponent } from './ac-input/ac-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcSelectComponent } from './ac-select/ac-select.component';



@NgModule({
  declarations: [
    AcInputComponent,
    AcSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AcInputComponent,
    AcSelectComponent
  ]
})
export class FormComponentsModule { }
