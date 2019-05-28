import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { SchedulerComponent } from './ng-scheduler.component';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMyDatePickerModule,
  ],
  exports: [SchedulerComponent]
})
export class SchedulerModule { }
