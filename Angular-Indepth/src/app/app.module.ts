import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from "./component/product.component";
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
