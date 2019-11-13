import {NgModule} from "@angular/core";
import {Model} from "./repository.model";
import {StaticDataSource} from "./static.datasource";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [Model, StaticDataSource]
})
export class ModelModule { }
