import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ValidateBrService } from 'ngx-validate-br';

@Injectable()

export class AdmissaoHandler {

  public formAdmissao = new FormGroup({
    documento: new FormControl(null, [Validators.required, this.validateBrService.cpf])
  })

  constructor(private validateBrService: ValidateBrService) { }
}
