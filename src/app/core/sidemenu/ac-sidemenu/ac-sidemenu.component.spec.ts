import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSidemenuComponent } from './ac-sidemenu.component';

describe('AcSidemenuComponent', () => {
  let component: AcSidemenuComponent;
  let fixture: ComponentFixture<AcSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
