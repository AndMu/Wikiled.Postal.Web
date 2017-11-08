import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { AppComponent } from './app.component';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatProgressSpinnerModule

  } from '@angular/material';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import the ButtonsModule

import 'hammerjs';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AddressComponent } from './tabs/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AddressComponent
  ],
  imports: [
    DialogModule,
    LayoutModule,
    PanelBarModule,
    MatProgressSpinnerModule,
    DropDownsModule,
    MatListModule,
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
    InputsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
