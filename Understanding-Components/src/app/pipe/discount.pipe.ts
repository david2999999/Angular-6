import {DiscountService} from "../service/discount.service";
import {Pipe} from "@angular/core";
import {LogService} from "../service/log.service";

@Pipe({
  name: "discount",
  pure: false
})
export class DiscountPipe {
  constructor(private discount: DiscountService,
              private logger: LogService) { }

  transform(price: number): number {
    if (price > 100) {
      this.logger.logInfoMessage(`Large price discounted: ${price}`);
    }

    return this.discount.applyDiscount(price);
  }
}
