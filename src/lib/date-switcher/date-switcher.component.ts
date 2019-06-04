import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'date-switcher',
  templateUrl: './date-switcher.component.html',
  styleUrls: ['../ng-scheduler.component.scss']
})
export class DateSwitcherComponent {

  @Input() placeholder;

  @Output() prev = new EventEmitter<any>();
  public onPrev(): void {
    this.prev.emit();
  }

  @Output() next = new EventEmitter<any>();
  public onNext(): void {
    this.next.emit();
  }

  @Output() dateChanged = new EventEmitter<any>();
  public onDateChanged(event): void {
    this.dateChanged.emit(event);
  }

  public model: IMyDateModel = null;

  @ViewChild("dp") dp;

  constructor() { }

  public datePickerOptions: IAngularMyDpOptions = {
    dateFormat: 'mmm dd, yyyy',
    dateRange: false,
  }

}
