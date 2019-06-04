import { Input, Output, EventEmitter } from '@angular/core';

import { SchedulerService } from './ng-scheduler.service';

import * as moment_ from 'moment';
const moment = moment_;


class SchedulerShift {
  id: any;
  start_time: moment_.Moment;
  end_time: moment_.Moment;
  hours?: number;
  earnings?: number;
}

class SchedulerOptions {
  shifts: any[];
  employees: string[];
  start_day: moment_.Moment;
  end_day: moment_.Moment;
  showEarnings: boolean;
  showHours: boolean;
  centerShifts: boolean;
  daily: boolean;
}

class Scheduler {
  constructor(public svc: SchedulerService){
    this.svc.setDaysOfWeek();
  }
  @Input() referenceDay: moment_.Moment = moment();

  @Input() options: SchedulerOptions;
  @Output() optionsChanged = new EventEmitter<any>();
  @Output() dateChanged = new EventEmitter<any>();
  @Output() dateClicked = new EventEmitter<any>();
  @Output() scheduleClicked = new EventEmitter<any>();

  public formatDate(day, fmt): string {
    return moment(day).format(fmt);
  }

  ngOnChanges(changes) {
    Object.assign(this.svc.schedulerOptions, this.options);
    this.svc.setWeek();
    this.svc.setDaysOfWeek();
    this.svc.referenceDay = this.referenceDay;
    this.optionsChanged.emit(changes);
  }

  public onDateClick(day): void {
    this.dateClicked.emit(day);
  }

  public onScheduleClick(shift): void {
    this.scheduleClicked.emit(shift);
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

  public onDateChanged(event) {
    this.svc.referenceDay = moment(event.singleDate.jsDate);
    this.svc.setWeek();
    this.svc.setDaysOfWeek();
    this.dateChanged.emit({
      start_day: this.svc.schedulerOptions.start_day,
      end_day: this.svc.schedulerOptions.end_day,
    });
  }
}

export {
  SchedulerShift,
  SchedulerOptions,
  Scheduler,
};
