import { HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable, ErrorHandler } from '@angular/core';
import { AlertsService } from '../alerts/alerts.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private alerts: AlertsService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let dispplayMessage = 'Ah error occurred.';
    if (!environment.production) {
      dispplayMessage += 'See console for details.';
    }

    this.alerts.error(dispplayMessage);
    super.handleError(error);
  }
}
