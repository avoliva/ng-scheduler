import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

import { SchedulerOptions, SchedulerShift } from './ng-scheduler.model';

import * as moment_ from 'moment';

const moment = moment_;


@Component({
  selector: 'ng-scheduler',
  templateUrl: './ng-scheduler.component.html',
  styleUrls: ['./ng-scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  public model: IMyDateModel = null;

  private referenceDay: moment_.Moment = moment();

  public daysOfWeek: moment_.Moment[] = []

  @Input() options: SchedulerOptions;
  public schedulerOptions: SchedulerOptions = {
    shifts: [],
    employees: [],
    start_day: this.referenceDay.clone().startOf('week'),
    end_day: this.referenceDay.clone().endOf('week'),
    showEarnings: true,
    showHours: true,
  }

  @Output() optionsChanged = new EventEmitter<any>();
  @Output() dateChanged = new EventEmitter<any>();
  @Output() dateClicked = new EventEmitter<any>();
  @Output() scheduleClicked = new EventEmitter<any>();

  @ViewChild("dp") dp;

  constructor() {
    this.setDaysOfWeek();
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    Object.assign(this.schedulerOptions, this.options);
    this.setDaysOfWeek();
    this.optionsChanged.emit(changes);
  }

  public datePickerOptions: IAngularMyDpOptions = {
    dateFormat: 'mmm dd, yyyy',
    dateRange: false,
  }
  onDateChanged(event) {
    this.referenceDay = moment(event.singleDate.jsDate);
    this.setWeek();
    this.setDaysOfWeek();
    this.dateChanged.emit({
      start_day: this.schedulerOptions.start_day,
      end_day: this.schedulerOptions.end_day,
    });
  }

  private setWeek(): void {
    this.schedulerOptions.start_day = this.referenceDay.clone().startOf('week');
    this.schedulerOptions.end_day = this.referenceDay.clone().endOf('week');
  }

  private setDaysOfWeek(): void {
    console.log('this.options', this.schedulerOptions);
    this.daysOfWeek = [];
    let day = this.schedulerOptions.start_day;
    while (day <= this.schedulerOptions.end_day) {
      this.daysOfWeek.push(day);
      day = day.clone().add(1, 'd');
    }
    console.log('this.daysOfWeek', this.daysOfWeek);
  }

  public formatDate(day, fmt): string {
    return moment(day).format(fmt);
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
    return `${duration.hours()}:${duration.minutes()}`;
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

  public changeDates(count): void {
    this.referenceDay = this.referenceDay.clone().add(count, 'days');
    this.setWeek();
    this.setDaysOfWeek();
    this.dateChanged.emit({
      start_day: this.schedulerOptions.start_day,
      end_day: this.schedulerOptions.end_day,
    });
  }

  public onDateClick(day): void {
    this.dateClicked.emit(day);
  }

  public onScheduleClick(shift): void {
    this.scheduleClicked.emit(shift);
  }

}
