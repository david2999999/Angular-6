import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Model} from "../../model/repository.model";
import {Product} from "../../model/product.model";
import {PaCellColor} from "../../directives/cellColor.directive";

@Component({
  selector: 'paProductTable',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  @Input("model")
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
}
