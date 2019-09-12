import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {Model} from "../model/repository.model";

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  getProductCount(): number {
    return this.getProducts().length;
  }
  targetName: string = "Kayak";

}
