import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SharedState } from "./sharedState.model";
import {TableComponent} from "./table/table.component";
import {FormComponent} from "./form/form.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, FormComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [SharedState]
})
export class CoreModule { }
