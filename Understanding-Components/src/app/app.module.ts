import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';
import {PaIteratorDirective} from "./common/directives/iterator.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import {PaCellColorSwitcher} from "./common/directives/cellColorSwitcher.directive";
import {PaCellColor} from "./common/directives/cellColor.directive";
import {PaStructureDirective} from "./common/directives/structure.directive";
import {addTaxPipe} from "./common/pipe/addTax.pipe";
import {categoryFilterPipe} from "./common/pipe/categoryFilter.pipe";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import { DiscountDisplayComponent } from './components/product/discount-display/discount-display.component';
import { DiscountEditorComponent } from './components/product/discount-editor/discount-editor.component';
import {DiscountService} from "./common/service/discount.service";
import {DiscountPipe} from "./common/pipe/discount.pipe";
import {DiscountAmountDirective} from "./common/directives/discountAmount.directive";
import {SimpleDataSource} from "./model/datasource.model";
import {Model} from "./model/repository.model";
import {LOG_LEVEL, LOG_SERVICE, LogLevel, LogService, SpecialLogService} from "./common/service/log.service";
import {PaDisplayValueDirective, VALUE_SERVICE} from "./common/directives/valueDisplay.directive";
import {ModelModule} from "./model/model.module";
import {CommonModule} from "./common/common.module";
import {ComponentsModule} from "./components/components.module";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule, ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
