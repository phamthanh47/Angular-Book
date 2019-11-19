import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ABookComponent } from './a-book/a-book.component';
import { AddABookComponent } from './add-a-book/add-a-book.component';
import { UpdateABookComponent } from './update-a-book/update-a-book.component';
import { DeleteABookComponent } from './delete-a-book/delete-a-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    ABookComponent,
    AddABookComponent,
    UpdateABookComponent,
    DeleteABookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
