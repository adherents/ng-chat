import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { LoadingService } from './loading.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  chatrooms: Observable<any>;
  changeChatroom: BehaviorSubject<string | null> = new BehaviorSubject(null);
  selectedChatroom: Observable<any>;
  selectedChatroomMessages: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {
    this.selectedChatroom = this.changeChatroom.pipe(switchMap(chatroomId => {
      if (chatroomId) {
        // this.loadingService.isLoading.next(true);
        return db.doc(`chatrooms/${chatroomId}`).valueChanges();
      }
      return of(null);
    }));

    this.selectedChatroomMessages = this.changeChatroom.pipe(switchMap(chatroomId => {
      if (chatroomId) {
        // this.loadingService.isLoading.next(true);
        return db.collection(`chatrooms/${chatroomId}/messages`, ref => {
          return ref.orderBy('createdAt', 'desc').limit(100);
        })
        .valueChanges()
        .pipe(map(arr => arr.reverse()));
      }
      return of(null);
    }));
    this.chatrooms = db.collection('chatrooms').valueChanges();
  }

  createMessage(text: string) {
    const chatroomId = this.changeChatroom.value;
    const message = {
      message: text,
      createdAt: new Date(),
      sender: this.authService.currentUserSnapshot
    };

    this.db.collection(`chatrooms/${chatroomId}/messages`).add(message);
  }
}
