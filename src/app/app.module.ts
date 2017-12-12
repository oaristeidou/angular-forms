import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
