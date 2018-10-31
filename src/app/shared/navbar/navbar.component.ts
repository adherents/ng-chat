import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'rtc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }

}
