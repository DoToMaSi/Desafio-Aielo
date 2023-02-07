import { Component } from '@angular/core';
import { AdmissaoHandler } from './handler/admissao.handler';

@Component({
  selector: 'admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})

export class AdmissaoComponent {

  constructor(public handler: AdmissaoHandler) { }

}
