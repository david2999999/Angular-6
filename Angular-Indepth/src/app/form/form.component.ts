import { Component, OnInit } from '@angular/core';
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  model: Model = new Model();
  selectedProduct: string;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }
}
