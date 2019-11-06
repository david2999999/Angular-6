import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";
import {NgForm} from "@angular/forms";
import {MODES, SHARED_STATE, SharedState} from "../sharedState.model";
import {Model} from "../../model/repository.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  product: Product = new Product();

  constructor(private model: Model,
              @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.product = new Product();
      if (update.id != undefined) {
        Object.assign(this.product, this.model.getProduct(update.id));
      }

      this.editing = update.mode == MODES.EDIT;
    });
  }

  editing: boolean = false;

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
