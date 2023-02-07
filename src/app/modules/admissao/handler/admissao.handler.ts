import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()

export class AdmissaoHandler {

  public formAdmissao = new FormGroup({
    documento: new FormControl(null, [Validators.required])
  })

  // constructor() { }
}
