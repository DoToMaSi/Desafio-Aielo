import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissaoRoutingModule } from './admissao-routing.module';
import { AdmissaoComponent } from './admissao.component';


@NgModule({
  declarations: [
    AdmissaoComponent
  ],
  imports: [
    CommonModule,
    AdmissaoRoutingModule
  ]
})
export class AdmissaoModule { }
