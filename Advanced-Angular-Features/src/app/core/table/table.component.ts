import {Component, Inject, OnInit} from '@angular/core';
import {Model} from "../../model/repository.model";
import {MODES, SHARED_STATE, SharedState} from "../sharedState.model";
import {Product} from "../../model/product.model";
import {Observer} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  private category: string = null;

  constructor(private model: Model, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params["category"] || null;
    })
  }

  getProducts(): Product[] {
    return this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  // editProduct(key: number) {
  //   this.observer.next(new SharedState(MODES.EDIT, key));
  // }
  //
  // createProduct() {
  //   this.observer.next(new SharedState(MODES.CREATE));
  // }
}
