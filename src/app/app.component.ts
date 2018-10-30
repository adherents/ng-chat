import { Component, OnInit } from '@angular/core';

import { Alert } from './shared/models/alert.model';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'rtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  alerts: Array<Alert> = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alert.subscribe(alert => {
      this.alerts.push(alert);
    });
  }
}
