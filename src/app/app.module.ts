import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular http requests
import { HttpClientModule } from '@angular/common/http'
// Angular material forms
import { FormsModule }   from '@angular/forms';
// Angular material button
import {MatButtonModule} from '@angular/material/button'; 
// Angular material icon
import {MatIconModule} from '@angular/material/icon'; 
// Sort Items 
import { NgpSortModule } from "ngp-sort-pipe";
// Angular snackBar material
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
// Angular material toolbar
import {MatToolbarModule} from '@angular/material/toolbar'; 
// Angular material menu
import {MatMenuModule} from '@angular/material/menu'; 
// filter library 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    NgpSortModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
