import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { PreserveWhitespacesTrueComponent } from './preserve-whitespaces/preserve-whitespaces-true/preserve-whitespaces-true.component';
import { PreserveWhitespacesFalseComponent } from './preserve-whitespaces/preserve-whitespaces-false/preserve-whitespaces-false.component';
import { HttpComponent } from './http/http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    Form01Component,
    Form02Component,
    PreserveWhitespacesTrueComponent,
    PreserveWhitespacesFalseComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
