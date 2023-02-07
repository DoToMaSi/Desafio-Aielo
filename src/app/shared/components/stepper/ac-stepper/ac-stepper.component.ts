import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stepper } from '../models/stepper.model';
import { StepperService } from '../service/stepper.service';

@Component({
  selector: 'ac-stepper',
  templateUrl: './ac-stepper.component.html',
  styleUrls: ['./ac-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AcStepperComponent {

  constructor(public stepperService: StepperService) { }

  get steps() {
    return this.stepperService.steps
  }

  get stepsLength() {
    return this.steps.value.length
  }

  get currentStepIndex() {
    return this.stepperService.currentIndex.value
  }
}
