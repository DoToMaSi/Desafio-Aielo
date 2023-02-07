import { Component, SkipSelf } from '@angular/core';
import { AdmissaoHandler } from '../handler/admissao.handler';

@Component({
  selector: 'buscar-cpf',
  templateUrl: './buscar-cpf.component.html',
  styleUrls: ['./buscar-cpf.component.scss']
})

export class BuscarCpfComponent {

  constructor(@SkipSelf() public handler: AdmissaoHandler) { }

  searchCpf() {
    // something
  }

}
