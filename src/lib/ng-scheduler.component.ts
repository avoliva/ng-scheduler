import { Component } from '@angular/core';

import { Scheduler } from './ng-scheduler.model';

import { SchedulerService } from './ng-scheduler.service';

import * as moment_ from 'moment';

const moment = moment_;


@Component({
  selector: 'ng-scheduler',
  templateUrl: './ng-scheduler.component.html',
  styleUrls: ['./ng-scheduler.component.scss']
})
export class SchedulerComponent extends Scheduler {

  constructor(public svc: SchedulerService) {
    super(svc)
  }

  public changeDates(count): void {
    this.svc.referenceDay = this.svc.referenceDay.clone().add(count, 'days');
    this.svc.setWeek();
    this.svc.setDaysOfWeek();
    this.dateChanged.emit({
      start_day: this.svc.schedulerOptions.start_day,
      end_day: this.svc.schedulerOptions.end_day,
    });
  }

}
