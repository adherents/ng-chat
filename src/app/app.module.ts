import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/chatroom-window/chatroom-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent,
    ChatMessageComponent,
    ChatroomWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
