import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, PagesRoutingModule],
  exports: [DashboardComponent],
})
export class PagesModule {}
