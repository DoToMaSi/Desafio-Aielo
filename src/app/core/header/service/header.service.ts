import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _title = new BehaviorSubject('');
  private _breadcrumbs = new BehaviorSubject('');

  constructor() {
    this.title.next('Nova Admissão Cooperado');
    this.breadcrumbs.next('Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado');
  }

  get title() {
    return this._title;
  }

  get breadcrumbs() {
    return this._breadcrumbs;
  }
}
