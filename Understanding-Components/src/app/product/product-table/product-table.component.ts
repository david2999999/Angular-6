import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Model} from "../../model/repository.model";
import {Product} from "../../model/product.model";
import {PaCellColor} from "../../directives/cellColor.directive";

@Component({
  selector: 'paProductTable',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  @Input("model")
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;

  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor>;

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }

  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren.forEach((child, index) => {
        child.setColor(index % 2 ? true : false);
      })
    }, 0);
  }
}
