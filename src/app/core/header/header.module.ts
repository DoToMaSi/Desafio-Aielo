import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcHeaderComponent } from './ac-header/ac-header.component';

@NgModule({
  declarations: [
    AcHeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    AcHeaderComponent
  ]
})

export class HeaderModule { }
