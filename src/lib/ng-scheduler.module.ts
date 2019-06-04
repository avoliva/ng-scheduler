import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { SchedulerComponent } from './ng-scheduler.component';
import { SchedulerService } from './ng-scheduler.service';
import { DailySchedulerComponent } from './daily-scheduler/daily-scheduler.component';
import { DateSwitcherComponent } from './date-switcher/date-switcher.component';

@NgModule({
  declarations: [
    SchedulerComponent,
    DailySchedulerComponent,
    DateSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMyDatePickerModule,
  ],
  exports: [
    SchedulerComponent,
    DailySchedulerComponent,
  ],
  providers: [
    SchedulerService
  ]
})
export class SchedulerModule { }
