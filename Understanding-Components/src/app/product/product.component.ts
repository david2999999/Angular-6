import { Component, OnInit } from '@angular/core';
import {Model} from "../../../../Angular-Indepth/src/app/model/repository.model";
import {Product} from "../../../../Angular-Indepth/src/app/model/product.model";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model: Model = new Model();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
}
