import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissaoCardInfoComponent } from './admissao-card-info.component';

describe('AdmissaoCardInfoComponent', () => {
  let component: AdmissaoCardInfoComponent;
  let fixture: ComponentFixture<AdmissaoCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissaoCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissaoCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
