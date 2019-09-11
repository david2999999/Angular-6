import { Component } from "@angular/core";
import {Model} from "../model/repository.model";

@Component({
  selector: "app",
  templateUrl: "product.component.html"
})
export class ProductComponent {
  model: Model = new Model();

  getClasses(): string {
    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  }
}
