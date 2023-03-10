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
import { ValidateBrService } from 'ngx-validate-br';
import { AdmissaoService } from './service/admissao.service';
import { NgxLoadingModule } from 'ngx-loading';
import { AdmissaoCardInfoComponent } from './components/admissao-card-info/admissao-card-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdmissaoComponent,
    BuscarCpfComponent,
    AdmissaoCardInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayComponentsModule,
    FormComponentsModule,
    FontAwesomeModule,
    StepperModule,
    NgxLoadingModule,
    AdmissaoRoutingModule
  ],
  providers: [
    AdmissaoHandler,
    AdmissaoService,
    ValidateBrService
  ]
})
export class AdmissaoModule { }
