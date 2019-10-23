import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import {PaIteratorDirective} from "./directives/iterator.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import {PaCellColorSwitcher} from "./directives/cellColorSwitcher.directive";
import {PaCellColor} from "./directives/cellColor.directive";
import {PaStructureDirective} from "./directives/structure.directive";
import {addTaxPipe} from "./pipe/addTax.pipe";
import {categoryFilterPipe} from "./pipe/ategoryFilter.pipe";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductFormComponent,
    ProductComponent,
    PaIteratorDirective,
    ToggleViewComponent,
    PaCellColorSwitcher,
    PaCellColor,
    PaStructureDirective,
    addTaxPipe,
    categoryFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  // providers: [{
  //   provide: LOCALE_ID, useValue: "fr-FR"
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
