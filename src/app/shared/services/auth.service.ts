import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';
import { AlertService } from './alert.service';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {
    this.currentUser = of(null);
  }

  signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return of(true);
  }

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }

  logout() {
    this.router.navigate(['/login']);
    this.alertService.alert.next(new Alert('You have been signed out.'));
  }
}
