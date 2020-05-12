import { AppErrorHandler } from './error-handlers/error-handler.service';
import { NgModule, SkipSelf, Optional, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TitleService } from './title/title.service';
import { AlertsService } from './alerts/alerts.service';

export { TitleService, AlertsService };

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
