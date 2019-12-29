import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { GlobalComponent } from './global/global.component';
import { SearchPipe } from './pipes/search.pipe';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    ViewPersonComponent,
    HeaderComponent,
    GlobalComponent,
    SearchPipe,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  TextMaskModule, 
  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
