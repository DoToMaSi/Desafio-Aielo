import { Component } from '@angular/core';
import { StepperService } from 'src/app/shared/components/stepper/service/stepper.service';
import { AdmissaoHandler } from './handler/admissao.handler';
import { AdmissaoService } from './service/admissao.service';

@Component({
  selector: 'admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})

export class AdmissaoComponent {

  constructor(
    public handler: AdmissaoHandler,
    public stepperService: StepperService,
    public admissaoService: AdmissaoService
  ) {
    this.stepperService.steps.next([
      {
        index: 0,
        title: 'Início'
      },
      {
        index: 1,
        title: 'Documentos'
      },
      {
        index: 2,
        title: 'Dados Cadastrais'
      },
      {
        index: 3,
        title: 'Admissão'
      },
    ]);

    this.stepperService.currentIndex.next(0);
  }

}
