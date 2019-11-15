import {ErrorHandler, NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MessageComponent} from "./message/message.component";
import {MessageService} from "./service/message.service";
import {MessageErrorHandler} from "./errorHandler";

@NgModule({
  imports: [BrowserModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService,
    { provide: ErrorHandler, useClass: MessageErrorHandler }]
})
export class MessageModule { }
