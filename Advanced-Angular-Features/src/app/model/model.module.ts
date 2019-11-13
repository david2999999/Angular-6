import {NgModule} from "@angular/core";
import {Model} from "./repository.model";
import {HttpClientModule} from "@angular/common/http";
import {REST_URL, RestDataSource} from "./rest.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [Model, RestDataSource,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})
export class ModelModule { }
