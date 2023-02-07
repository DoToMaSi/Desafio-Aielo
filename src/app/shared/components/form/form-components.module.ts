import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcInputComponent } from './ac-input/ac-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcSelectComponent } from './ac-select/ac-select.component';
import { AcInputCpfComponent } from './ac-input-cpf/ac-input-cpf.component';

@NgModule({
  declarations: [
    AcInputComponent,
    AcSelectComponent,
    AcInputCpfComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AcInputComponent,
    AcSelectComponent,
    AcInputCpfComponent
  ]
})

export class FormComponentsModule { }
