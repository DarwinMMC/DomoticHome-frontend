import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingRoutingModule } from './dashboard-routing.module';
import { GridsterModule } from 'angular-gridster2';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingRoutingModule,
    GridsterModule
  ]
})
export class DashboardModule { }
