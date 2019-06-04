import { Injectable } from '@angular/core';

import { SchedulerOptions, SchedulerShift } from './ng-scheduler.model';

import * as moment_ from 'moment';
const moment = moment_;


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor() {}

  public referenceDay: moment_.Moment = moment();

  public daysOfWeek: moment_.Moment[] = []

  public schedulerOptions: SchedulerOptions = {
    shifts: [],
    employees: [],
    start_day: this.referenceDay.clone().startOf('week'),
    end_day: this.referenceDay.clone().endOf('week'),
    showEarnings: true,
    showHours: true,
    centerShifts: true,
  }

  public setDaysOfWeek(): void {
    console.log('this.options', this.schedulerOptions);
    this.daysOfWeek = [];
    let day = this.schedulerOptions.start_day;
    while (day <= this.schedulerOptions.end_day) {
      this.daysOfWeek.push(day);
      day = day.clone().add(1, 'd');
    }
    console.log('this.daysOfWeek', this.daysOfWeek);
  }

  public getShifts(day, index): SchedulerShift[] {
    let shifts = this.schedulerOptions.shifts[index];
    let foundShifts = [];
    for (let shift of shifts) {
      if (day.format('YYYY-MM-DD') == moment(shift.start_time).format('YYYY-MM-DD')) {
        foundShifts.push(shift);
      }
    }
    return foundShifts;
  }

  public getHours(index): string {
    var hours = 0;
    for (let shift of this.schedulerOptions.shifts[index]) {
      if (moment(shift.start_time) >= this.schedulerOptions.start_day && moment(shift.start_time) <= this.schedulerOptions.end_day) {
        hours += shift.hours;
      }
    }
    let duration = moment.duration(hours, 'hours');
    let minutes = duration.minutes().toString().length < 2 ? duration.minutes().toString() + "0" : duration.minutes();
    return `${duration.hours()}:${minutes}`;
  }

  public getEarnings(index): string {
    let earnings = 0;
    for (let shift of this.schedulerOptions.shifts[index]) {
      if (moment(shift.start_time) >= this.schedulerOptions.start_day && moment(shift.start_time) <= this.schedulerOptions.end_day) {
        earnings += Number(shift.earnings) || 0;
      }
    }
    return earnings.toFixed(2);
  }

  public setWeek(): void {
    this.schedulerOptions.start_day = this.referenceDay.clone().startOf('week');
    this.schedulerOptions.end_day = this.referenceDay.clone().endOf('week');
  }

}
