import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "../common/common.module";
import {NgModule} from "@angular/core";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {ProductTableComponent} from "./product/product-table/product-table.component";
import {DiscountDisplayComponent} from "./product/discount-display/discount-display.component";
import {DiscountEditorComponent} from "./product/discount-editor/discount-editor.component";
import {ProductComponent} from "./product/product.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [DiscountDisplayComponent, DiscountEditorComponent,
    ProductFormComponent, ProductTableComponent, ProductComponent],
  exports: [ProductComponent]
})
export class ComponentsModule { }
