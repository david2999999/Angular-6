import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import {MODES, SHARED_STATE, SharedState} from "./sharedState.model";
import {TableComponent} from "./table/table.component";
import {FormComponent} from "./form/form.component";
import {Subject} from "rxjs";
import {StatePipe} from "./pipe/state.pipe";
import {MessageModule} from "../messages/message.module";
import {MessageService} from "../messages/service/message.service";
import {Model} from "../model/repository.model";
import {RouterModule} from "@angular/router";
import {ProductCountComponent} from "./productCount.component";
import {CategoryCountComponent} from "./categoryCount.component";
import {NotFoundComponent} from "./notFound.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
  declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  // providers: [{
  //   provide: SHARED_STATE,
  //   deps: [MessageService, Model],
  //   useFactory: (messageService, model) => {
  //     return new Subject<SharedState>();
  //     // let subject = new Subject<SharedState>();
  //     // subject.subscribe(m => messageService.reportMessage(
  //     //   new Message(MODES[m.mode] + (m.id != undefined
  //     //     ? ` ${model.getProduct(m.id).name}` : "")))
  //     // );
  //     // return subject;
  //   }
  // }]
})
export class CoreModule { }
