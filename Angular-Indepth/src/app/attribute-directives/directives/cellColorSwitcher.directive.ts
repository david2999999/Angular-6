import {
  Directive, Input, Output, EventEmitter,
  SimpleChange, ContentChild, ContentChildren, QueryList
} from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Directive({
  selector: "table"
})
export class PaCellColorSwitcher {
  @Input("paCellDarkColor")
  modelProperty: Boolean;

  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this.updateContentChildren(changes["modelProperty"].currentValue);
  }

  private updateContentChildren(dark: Boolean) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }
}
