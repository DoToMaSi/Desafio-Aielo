import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcStepperComponent } from './ac-stepper.component';

describe('AcStepperComponent', () => {
  let component: AcStepperComponent;
  let fixture: ComponentFixture<AcStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
