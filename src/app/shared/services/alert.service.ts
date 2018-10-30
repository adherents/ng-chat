import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert: Subject<Alert> = new Subject();
}
