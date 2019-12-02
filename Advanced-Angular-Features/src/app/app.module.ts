import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModelModule} from "./model/model.module";
import {CoreModule} from "./core/core.module";
import {MessageModule} from "./messages/message.module";
import {routing} from "./app.routing";
import {TermsGuard} from "./terms.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, CoreModule, MessageModule, routing
  ],
  providers: [TermsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
