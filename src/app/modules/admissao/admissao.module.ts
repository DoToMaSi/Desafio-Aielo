import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissaoRoutingModule } from './admissao-routing.module';
import { AdmissaoComponent } from './admissao.component';
import { BuscarCpfComponent } from './buscar-cpf/buscar-cpf.component';


@NgModule({
  declarations: [
    AdmissaoComponent,
    BuscarCpfComponent
  ],
  imports: [
    CommonModule,
    AdmissaoRoutingModule
  ]
})
export class AdmissaoModule { }
