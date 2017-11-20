import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient, 
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
