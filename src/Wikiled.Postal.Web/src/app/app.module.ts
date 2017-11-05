import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatProgressSpinnerModule

  } from '@angular/material';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import the ButtonsModule

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DialogModule,
    MatProgressSpinnerModule,
    DropDownsModule,
    LabelModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ButtonsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
