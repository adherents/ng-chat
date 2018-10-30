import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Alert } from 'src/app/shared/models/alert.model';
import { AlertType } from 'src/app/shared/enums/alert-type.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'rtc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit() {
    if (this.signupForm.valid) {
      const {firstName, lastName, email, password} = this.signupForm.value;
      console.log(`FirstName: ${firstName}, LastName: ${lastName} Email: ${email}, Password: ${password}`);
    } else {
      const failedSignupAlert = new Alert('Please enter valid name, email and password.', AlertType.Danger);
      this.alertService.alert.next(failedSignupAlert);
    }
  }
}
