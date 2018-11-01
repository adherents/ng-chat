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
  currentUser: any = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.currentUser = this.authService.currentUser;
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.authService.logout();
  }

}
