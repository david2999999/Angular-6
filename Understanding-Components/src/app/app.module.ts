import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import {PaIteratorDirective} from "./common/directives/iterator.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import {PaCellColorSwitcher} from "./common/directives/cellColorSwitcher.directive";
import {PaCellColor} from "./common/directives/cellColor.directive";
import {PaStructureDirective} from "./common/directives/structure.directive";
import {addTaxPipe} from "./common/pipe/addTax.pipe";
import {categoryFilterPipe} from "./common/pipe/categoryFilter.pipe";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import { DiscountDisplayComponent } from './product/discount-display/discount-display.component';
import { DiscountEditorComponent } from './product/discount-editor/discount-editor.component';
import {DiscountService} from "./common/service/discount.service";
import {DiscountPipe} from "./common/pipe/discount.pipe";
import {DiscountAmountDirective} from "./common/directives/discountAmount.directive";
import {SimpleDataSource} from "./model/datasource.model";
import {Model} from "./model/repository.model";
import {LOG_LEVEL, LOG_SERVICE, LogLevel, LogService, SpecialLogService} from "./common/service/log.service";
import {PaDisplayValueDirective, VALUE_SERVICE} from "./common/directives/valueDisplay.directive";
import {ModelModule} from "./model/model.module";
import {CommonModule} from "./common/common.module";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductFormComponent,
    ProductComponent,
    ToggleViewComponent,
    DiscountDisplayComponent,
    DiscountEditorComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
