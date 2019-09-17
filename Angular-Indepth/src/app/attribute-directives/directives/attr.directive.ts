import {Attribute, Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: "[pa-attr]",
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}

  @Input("pa-attr")
  bgClass: string;

  ngOnInit() {
    this.element.nativeElement.classList.add(this.bgClass || "bg-success",
      "text-white");
  }
}
