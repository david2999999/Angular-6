import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import {SHARED_STATE, SharedState} from "./sharedState.model";
import {TableComponent} from "./table/table.component";
import {FormComponent} from "./form/form.component";
import {Subject} from "rxjs";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, FormComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]})
export class CoreModule { }
