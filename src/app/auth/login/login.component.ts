import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Alert } from 'src/app/shared/models/alert.model';
import { AlertType } from 'src/app/shared/enums/alert-type.enum';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit() {
    this.loadingService.isLoading.next(true);
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      console.log(`Email: ${email}, Password: ${password}`);
      this.loadingService.isLoading.next(false);
    } else {
      const failedLoginAlert = new Alert('Please enter correct credentials.', AlertType.Danger);
      setTimeout(() => {
        this.loadingService.isLoading.next(false);
        this.alertService.alert.next(failedLoginAlert);
      }, 2000);
    }
  }

}
