import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcHeaderComponent } from './ac-header/ac-header.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AcHeaderComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    FontAwesomeModule
  ],
  exports: [
    AcHeaderComponent
  ]
})

export class HeaderModule { }
