import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product.model";
import {NgForm} from "@angular/forms";
import {MODES, SharedState} from "../sharedState.model";
import {Model} from "../../model/repository.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  product: Product = new Product();

  constructor(private model: Model,
              private state: SharedState) { }

  get editing(): boolean {
    return this.state.mode == MODES.EDIT;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }
}
