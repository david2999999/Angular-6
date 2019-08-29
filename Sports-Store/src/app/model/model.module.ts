import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {NgModule} from "@angular/core";

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
