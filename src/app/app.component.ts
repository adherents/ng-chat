import { Component, OnInit, OnDestroy } from '@angular/core';

import { Alert } from './shared/models/alert.model';
import { AlertService } from './shared/services/alert.service';
import { LoadingService } from './shared/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  alerts: Array<Alert> = [];
  loading = false;

  constructor(
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.alertService.alert.subscribe(alert => {
        this.alerts.push(alert);
      })
    );
    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading => {
        this.loading = isLoading;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
