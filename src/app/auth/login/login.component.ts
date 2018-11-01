import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Alert } from 'src/app/shared/models/alert.model';
import { AlertType } from 'src/app/shared/enums/alert-type.enum';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  subscriptions: Subscription[] = [];
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.loadingService.isLoading.next(true);
      const {email, password} = this.loginForm.value;

      this.subscriptions.push(
        this.authService.login(email, password).subscribe(success => {
          if (success) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.displayFailedLogin();
          }
          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      this.loadingService.isLoading.next(false);
      this.displayFailedLogin();
    }
  }

  private displayFailedLogin() {
    const failedLoginAlert = new Alert('Please enter correct credentials.', AlertType.Danger);
    this.alertService.alert.next(failedLoginAlert);
  }

}
