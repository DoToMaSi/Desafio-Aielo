import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputMaskModule } from '@ngneat/input-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { SidemenuModule } from './core/sidemenu/sidemenu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HeaderModule,
    SidemenuModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
