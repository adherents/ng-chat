import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rtc-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {
  dummyData = [
    {
      message: 'test0',
      createdAt: new Date(),
      sender: {
        firstName: 'test0',
        lastName: 'test0',
        photoUrl: 'https://via.placeholder.com/150x150'
      }
    },
    {
      message: 'test1',
      createdAt: new Date(),
      sender: {
        firstName: 'test1',
        lastName: 'test1',
        photoUrl: 'https://via.placeholder.com/150x150'
      }
    },
    {
      message: 'test2',
      createdAt: new Date(),
      sender: {
        firstName: 'test2',
        lastName: 'test2',
        photoUrl: 'https://via.placeholder.com/150x150'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
