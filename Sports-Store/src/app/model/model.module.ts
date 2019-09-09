import {ProductRepository} from "./product/product.repository";
import {StaticDataSource} from "./datasource/static.datasource";
import {NgModule} from "@angular/core";
import {Cart} from "./cart/cart.model";
import {Order} from "./order/order.model";
import {OrderRepository} from "./order/order.repository";
import {RestDataSource} from "./datasource/rest.datasource";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource, AuthService]
})
export class ModelModule { }
