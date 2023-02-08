import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admissao } from '../models/admissao.model';

@Injectable()

export class AdmissaoService {

  private admissaoUrl = 'https://63e295e5109336b6cb0b0992.mockapi.io/onboarding'

  constructor(private httpClient: HttpClient) { }

  getOnboardingsByCpf() {
    return this.httpClient.get<Admissao[]>(`${this.admissaoUrl}`)
  }
}
