import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../service/discount.service";

@Component({
  selector: 'DiscountEditor',
  templateUrl: './discount-editor.component.html',
  styleUrls: ['./discount-editor.component.css']
})
export class DiscountEditorComponent {
  constructor(private discounter: DiscountService) { }
}
