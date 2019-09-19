import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from "./component/product.component";
import { DirectiveComponent } from './directive/directive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ModelBasedFormComponent } from './model-based-form/model-based-form.component';
import { TemplateComponent } from './attribute-directives/template/template.component';
import {PaAttrDirective} from "./attribute-directives/directives/attr.directive";
import {PaModel} from "./attribute-directives/directives/twoway.directive";
import { StructuralTemplateComponent } from './structural-directives/structural-template/structural-template.component';
import {PaStructureDirective} from "./attribute-directives/directives/structure.directive";
import {PaIteratorDirective} from "./attribute-directives/directives/iterator.directive";
import {PaCellColor} from "./attribute-directives/directives/cellColor.directive";
import {PaCellColorSwitcher} from "./attribute-directives/directives/cellColorSwitcher.directive";

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DirectiveComponent, FormComponent, ProductFormComponent,
    ModelBasedFormComponent, TemplateComponent, PaAttrDirective, PaModel, StructuralTemplateComponent,
    PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
