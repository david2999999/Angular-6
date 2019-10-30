import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../common/service/discount.service";

@Component({
  selector: 'DiscountDisplay',
  templateUrl: './discount-display.component.html',
  styleUrls: ['./discount-display.component.css']
})
export class DiscountDisplayComponent {
  constructor(private discounter: DiscountService) { }
}
