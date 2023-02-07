import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcInputComponent } from './ac-input/ac-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcInputCpfComponent } from './ac-input-cpf/ac-input-cpf.component';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    AcInputComponent,
    AcInputCpfComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  exports: [
    AcInputComponent,
    AcInputCpfComponent
  ]
})

export class FormComponentsModule { }
