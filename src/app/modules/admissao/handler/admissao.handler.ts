import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ValidateBrService } from 'ngx-validate-br';
import { BehaviorSubject, lastValueFrom } from "rxjs";

import { Admissao } from "../models/admissao.model";
import { AdmissaoService } from "../service/admissao.service";

import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class AdmissaoHandler {

  private _loading = new BehaviorSubject(false);
  private _admissoes = new BehaviorSubject<Admissao[]>([]);
  public formAdmissao = new FormGroup({
    documento: new FormControl(null, [Validators.required, this.validateBrService.cpf])
  })

  constructor(
    private validateBrService: ValidateBrService,
    private admissaoService: AdmissaoService,
    private toastrService: ToastrService
  ) { }

  get loading() {
    return this._loading;
  }

  get admissoes() {
    return this._admissoes;
  }

  async getOnboardings() {
    this.loading.next(true);
    try {
      const request = await lastValueFrom(this.admissaoService.getOnboardingsByCpf());
      if (request?.length > 0) {
        this.admissoes.next(request);
      }
    } catch (error: any) {
      this.toastrService.error(error.statusText, 'Erro ao Buscar o CPF');
    } finally {
      this.loading.next(false);
    }
  }
}
