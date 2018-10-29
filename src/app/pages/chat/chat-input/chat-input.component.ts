import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rtc-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  newMessageText = '';

  constructor() { }

  ngOnInit() {
  }

  submit(message: string) {
    console.log('New Message: ', message);
    this.newMessageText = '';
  }

}
