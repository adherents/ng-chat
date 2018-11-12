import { Component, OnInit } from '@angular/core';

import { ChatroomService } from 'src/app/shared/services/chatroom.service';

@Component({
  selector: 'rtc-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  constructor(
    public chatroomService: ChatroomService
  ) { }

  ngOnInit() {
  }

}
