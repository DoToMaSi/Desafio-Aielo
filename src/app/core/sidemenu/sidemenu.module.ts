import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcSidemenuComponent } from './ac-sidemenu/ac-sidemenu.component';

@NgModule({
  declarations: [
    AcSidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AcSidemenuComponent
  ]
})

export class SidemenuModule { }
