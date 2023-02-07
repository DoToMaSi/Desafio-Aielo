import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissaoRoutingModule } from './admissao-routing.module';
import { AdmissaoComponent } from './admissao.component';
import { BuscarCpfComponent } from './buscar-cpf/buscar-cpf.component';
import { AdmissaoHandler } from './handler/admissao.handler';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentsModule } from 'src/app/shared/components/form/form-components.module';
import { DisplayComponentsModule } from 'src/app/shared/components/display/display-components.module';
import { StepperModule } from 'src/app/shared/components/stepper/stepper.module';


@NgModule({
  declarations: [
    AdmissaoComponent,
    BuscarCpfComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayComponentsModule,
    FormComponentsModule,
    StepperModule,
    AdmissaoRoutingModule
  ],
  providers: [
    AdmissaoHandler
  ]
})
export class AdmissaoModule { }
