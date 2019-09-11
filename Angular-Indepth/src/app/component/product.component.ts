import { Component } from "@angular/core";
import {Model} from "../model/repository.model";

@Component({
  selector: "app",
  templateUrl: "product.component.html"
})
export class ProductComponent {
  model: Model = new Model();

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }
}
