import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { tap, take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { Alert } from '../models/alert.model';
import { AlertType } from '../enums/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class IsOwnerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.currentUser.pipe(
      take(1),
      map((currentUser) => !!currentUser && currentUser.id === route.params.userId),
      tap((isOwner) => {
        if (!isOwner) {
          this.alertService.alert.next(new Alert('You can only edit your profile!', AlertType.Danger));
          this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        }
      })
    );
  }
}
