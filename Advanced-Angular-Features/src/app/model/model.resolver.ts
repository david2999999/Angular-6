import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Model } from "./repository.model"
import { RestDataSource } from "./rest.datasource";
import { Product } from "./product.model";

@Injectable()
export class ModelResolver {
  constructor(private model: Model, private dataSource: RestDataSource) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Product[]> {
    return this.model.getProducts().length == 0
      ? this.dataSource.getData() : null;
  }
}
