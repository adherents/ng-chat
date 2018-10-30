import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Alert } from 'src/app/shared/models/alert.model';
import { AlertType } from 'src/app/shared/enums/alert-type.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService
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
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      const failedLoginAlert = new Alert('Please enter correct credentials.', AlertType.Danger);
      this.alertService.alert.next(failedLoginAlert);
    }
  }

}
