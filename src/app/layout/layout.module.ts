import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, AboutComponent, PathNotFoundComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AboutComponent, PathNotFoundComponent]
})
export class LayoutModule { }
