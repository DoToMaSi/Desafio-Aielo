import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcSidemenuComponent } from './ac-sidemenu/ac-sidemenu.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AcSidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule,
    FontAwesomeModule
  ],
  exports: [
    AcSidemenuComponent
  ]
})

export class SidemenuModule { }
