import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';

@NgModule({
  declarations: [
    RowComponent,
    ColComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RowComponent,
    ColComponent
  ]
})

export class DisplayComponentsModule { }
