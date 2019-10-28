import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductFormGroup} from "../../model/product-form.model";
import {Product} from "../../model/product.model";
import {Model} from "../../model/repository.model";
import {VALUE_SERVICE} from "../../directives/valueDisplay.directive";

@Component({
  selector: 'paProductForm',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  viewProviders: [{ provide: VALUE_SERVICE, useValue: "Oranges" }]
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  constructor(private model: Model) { }

  // @Output("paNewProduct")
  // newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      //this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}
