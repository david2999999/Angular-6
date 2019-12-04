import { trigger, style, state, transition, animate } from "@angular/animations";

export const HighlightTrigger = trigger("rowHighlight", [
  state("selected", style({
    backgroundColor: "lightgreen",
    fontSize: "20px"
  })),
  state("notselected", style({
    backgroundColor: "lightsalmon",
    fontSize: "12px"
  })),
  state("*", style({
    border: "solid black 2px"
  })),
  transition("* => notselected", animate("200ms")),
  transition("* => selected", animate("400ms"))
]);
