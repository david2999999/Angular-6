import { Component, OnInit } from '@angular/core';
import {Model} from "../../model/repository.model";
import {ProductFormGroup} from "../../model/product-form.model";
import {Product} from "../../model/product.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-structural-template',
  templateUrl: './structural-template.component.html',
  styleUrls: ['./structural-template.component.css']
})
export class StructuralTemplateComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();

  darkColor: boolean = false;
  showTable: boolean = true;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
