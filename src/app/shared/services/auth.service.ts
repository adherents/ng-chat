import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, from} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user.interface';
import { AlertService } from './alert.service';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;
  currentUserSnapshot: User | null;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.currentUser = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
    this.setCurrentUserSnapshot();
  }

  signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.user.uid}`);
          const updatedUser = {
            id: user.user.uid,
            email: user.user.email,
            firstName,
            lastName,
            // tslint:disable-next-line:max-line-length
            photoUrl: 'https://firebasestorage.googleapis.com/v0/b/ng7-chat.appspot.com/o/default_profile_pic.jpg?alt=media&token=9bb6afcb-b593-4aa0-9733-53e8062fc8c5',
            quote: 'Past here your quote.',
            bio: 'Bio is under construction...'
          };
          userRef.set(updatedUser);
          return true;
        })
        .catch(() => false)
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => true)
        .catch(() => false)
    );
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.alertService.alert.next(new Alert('You have been signed out.'));
    });
  }

  private setCurrentUserSnapshot() {
    this.currentUser.subscribe(user => this.currentUserSnapshot = user);
  }
}
