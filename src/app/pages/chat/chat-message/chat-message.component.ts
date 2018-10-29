import { Component, OnInit, Input } from '@angular/core';

import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'rtc-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
