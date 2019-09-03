import {StoreComponent} from "./store.component";
import {NgModule} from "@angular/core";
import {ModelModule} from "../model/model.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CounterDirective} from "./counter.directive";
import {CartSummaryComponent} from "./cartSummary/cartSummary.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
