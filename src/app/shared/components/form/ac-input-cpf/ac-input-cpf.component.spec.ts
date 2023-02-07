import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcInputCpfComponent } from './ac-input-cpf.component';

describe('AcInputCpfComponent', () => {
  let component: AcInputCpfComponent;
  let fixture: ComponentFixture<AcInputCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcInputCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcInputCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
