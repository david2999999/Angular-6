import { Component } from "@angular/core";
import {Model} from "../model/repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
}
