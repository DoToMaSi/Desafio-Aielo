import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCpfComponent } from './buscar-cpf.component';

describe('BuscarCpfComponent', () => {
  let component: BuscarCpfComponent;
  let fixture: ComponentFixture<BuscarCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
