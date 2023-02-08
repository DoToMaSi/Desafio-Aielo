import { Component, SkipSelf } from '@angular/core';
import { AdmissaoHandler } from '../handler/admissao.handler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'buscar-cpf',
  templateUrl: './buscar-cpf.component.html',
  styleUrls: ['./buscar-cpf.component.scss']
})

export class BuscarCpfComponent {

  constructor(
    @SkipSelf() public handler: AdmissaoHandler,
    private toastrService: ToastrService
  ) { }

  get loading() {
    return this.handler.loading.value
  }

  get admissoes() {
    return this.handler.admissoes.value
  }

  searchCpf() {
    this.handler.formAdmissao.markAllAsTouched();
    if (this.handler.formAdmissao.valid) {
      this.handler.getOnboardings();
    } else {
      this.toastrService.show('Verifique o Formulário! Há dados errados ou não preenchidos.');
    }
  }
}
