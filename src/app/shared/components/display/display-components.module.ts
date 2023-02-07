import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    RowComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RowComponent
  ]
})

export class DisplayComponentsModule { }
