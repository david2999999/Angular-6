import {Attribute, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: "[pa-attr]",
})
export class PaAttrDirective {
  constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
    element.nativeElement.classList.add(bgClass || "bg-success", "text-white");
  }
}
