import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from "./component/product.component";
import { DirectiveComponent } from './directive/directive.component';
import {FormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DirectiveComponent, FormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
