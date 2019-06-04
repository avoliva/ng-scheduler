import { Component } from '@angular/core';

import { Scheduler } from '../ng-scheduler.model';

import { SchedulerService } from '../ng-scheduler.service';

@Component({
  selector: 'daily-scheduler',
  templateUrl: './daily-scheduler.component.html',
  styleUrls: ['../ng-scheduler.component.scss']
})
export class DailySchedulerComponent extends Scheduler {

  constructor(public svc: SchedulerService) {
    super(svc)
  }

}
