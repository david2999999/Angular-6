import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe(m => this.lastMessage = m);
  }
}
