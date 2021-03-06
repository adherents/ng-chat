import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgxLoadingModule } from 'ngx-loading';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


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
import { environment } from '../environments/environment';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';

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
    ChatroomWindowComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
