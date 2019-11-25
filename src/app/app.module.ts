import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from './navbar/navbar.component';


import { environment } from '../environments/environment';
import { API_BASE_URL } from './app.tokens';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
   
  ],
  providers: [
      // Interceptors
      // Resolvers
      // Environment related configurations
      { provide: API_BASE_URL, useValue: environment.apiBaseUrl }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
