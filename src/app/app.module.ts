import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FlightSearchFormComponent } from 'src/app/components/flight-search-form/flight-search-form.component';
import { SearchResultComponent } from 'src/app/components/search-result/search-result.component';
import { FlightCardComponent } from 'src/app/components/flight-card/flight-card.component';
import { CustomMaterialModule } from 'src/app/material.module'; 
import { HttpClientModule } from '@angular/common/http';
// import { APIService } from 'src/app/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightSearchFormComponent,
    SearchResultComponent,
    FlightCardComponent,
    // APIService
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
