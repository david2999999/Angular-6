import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MessageComponent} from "./message/message.component";
import {MessageService} from "./service/message.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
