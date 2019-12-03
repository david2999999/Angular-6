import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import {TableComponent} from "./table/table.component";
import {FormComponent} from "./form/form.component";
import {StatePipe} from "./pipe/state.pipe";
import {MessageModule} from "../messages/message.module";
import {RouterModule} from "@angular/router";
import {ProductCountComponent} from "./productCount.component";
import {CategoryCountComponent} from "./categoryCount.component";
import {NotFoundComponent} from "./notFound.component";
import {UnsavedGuard} from "./unsaved.guard";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
  declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [UnsavedGuard]
})
export class CoreModule { }
