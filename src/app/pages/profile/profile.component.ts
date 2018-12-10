import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rtc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public currentUser = null;
  public user: User;
  private subsciptions: Subscription[] = [];

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) {
    this.loadingService.isLoading.next(true);
  }

  ngOnInit() {
    this.subsciptions.push(
      this.auth.currentUser.subscribe(user => {
        this.currentUser = user;
        this.loadingService.isLoading.next(false);
      })
    );

    this.subsciptions.push(
      this.route.paramMap.subscribe(params => {
        const userId = params.get('userId');
        const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${userId}`);
        userRef.valueChanges().subscribe(user => this.user = user);
      })
    );
  }

  ngOnDestroy() {
    this.subsciptions.forEach(sub => sub.unsubscribe);
  }
}
