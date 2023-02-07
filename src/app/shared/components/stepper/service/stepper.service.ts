import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stepper } from '../models/stepper.model';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private _steps = new BehaviorSubject<Stepper[]>([]);
  private _currentIndex = new BehaviorSubject<number>(-1);

  get steps() {
    return this._steps;
  }

  get currentIndex() {
    return this._currentIndex;
  }
}
