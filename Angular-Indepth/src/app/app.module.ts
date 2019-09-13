import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from "./component/product.component";
import { DirectiveComponent } from './directive/directive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ModelBasedFormComponent } from './model-based-form/model-based-form.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DirectiveComponent, FormComponent, ProductFormComponent, ModelBasedFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
