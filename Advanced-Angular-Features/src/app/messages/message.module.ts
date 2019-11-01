import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MessageService } from "./message.service";
import {MessageComponent} from "./message/message.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
