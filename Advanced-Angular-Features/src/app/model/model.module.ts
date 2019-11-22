import {NgModule} from "@angular/core";
import {Model} from "./repository.model";
import {HttpClientModule} from "@angular/common/http";
import {REST_URL, RestDataSource} from "./rest.datasource";
import {ModelResolver} from "./model.resolver";

@NgModule({
  imports: [HttpClientModule],
  providers: [Model, RestDataSource, ModelResolver,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})
export class ModelModule { }
