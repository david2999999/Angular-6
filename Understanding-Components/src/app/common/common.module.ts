import {NgModule} from "@angular/core";
import {ModelModule} from "../model/model.module";
import {LogService} from "./service/log.service";
import {DiscountService} from "./service/discount.service";
import {PaDisplayValueDirective, VALUE_SERVICE} from "./directives/valueDisplay.directive";
import {PaAttrDirective} from "./directives/attr.directive";
import {PaCellColor} from "./directives/cellColor.directive";
import {PaCellColorSwitcher} from "./directives/cellColorSwitcher.directive";
import {DiscountAmountDirective} from "./directives/discountAmount.directive";
import {PaIteratorDirective} from "./directives/iterator.directive";
import {PaStructureDirective} from "./directives/structure.directive";
import {PaModel} from "./directives/twoway.directive";
import {DiscountPipe} from "./pipe/discount.pipe";
import {categoryFilterPipe} from "./pipe/categoryFilter.pipe";
import {addTaxPipe} from "./pipe/addTax.pipe";

@NgModule({
  imports: [ModelModule],
  providers: [LogService, DiscountService,
    { provide: VALUE_SERVICE, useValue: "Apples" }],
  declarations: [addTaxPipe, PaAttrDirective, categoryFilterPipe,
    PaCellColor, PaCellColorSwitcher, DiscountPipe,
    DiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
    PaModel, PaDisplayValueDirective],
  exports: [addTaxPipe, PaAttrDirective, categoryFilterPipe,
    PaCellColor, PaCellColorSwitcher, DiscountPipe,
    DiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
    PaModel, PaDisplayValueDirective]
})
export class CommonModule { }
