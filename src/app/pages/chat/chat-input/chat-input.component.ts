import { Component, OnInit } from '@angular/core';

import { ChatroomService } from 'src/app/shared/services/chatroom.service';

@Component({
  selector: 'rtc-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  newMessageText = '';

  constructor(
    private chatroomService: ChatroomService
  ) { }

  ngOnInit() {
  }

  submit(message: string) {
    this.chatroomService.createMessage(message);
    this.newMessageText = '';
  }

}
