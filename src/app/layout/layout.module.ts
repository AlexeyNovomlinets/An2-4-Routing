import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AboutComponent,
  LoginComponent,
  MessagesComponent,
  PathNotFoundComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    MessagesComponent,
    LoginComponent
  ]
})
export class LayoutModule { }
