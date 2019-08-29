import {ProductRepository} from "../model/product.repository";
import {Component} from "@angular/core";
import {Product} from "../model/product.model";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
