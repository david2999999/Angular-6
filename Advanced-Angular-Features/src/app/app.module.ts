import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModelModule} from "./model/model.module";
import {CoreModule} from "./core/core.module";
import {MessageModule} from "./messages/message.module";
import {routing} from "./app.routing";
import {TermsGuard} from "./terms.guard";
import {LoadGuard} from "./load.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [TermsGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
