# Angular Scheduler

Simple weekly schedule display. This is just a display. Adding shifts, employees, etc. would be handled on your end.

![Example](https://i.ibb.co/0mrpTQj/Screen-Shot-2019-05-31-at-10-35-37-AM.png)

## Installation

`npm install ng-scheduler`

Add SchedulerComponent to your modules.

`<ng-scheduler [options]="schedulerOptions"></ng-scheduler>` in your HTML.

## Arguments

#### Options

* ``shifts`` (SchedulerShifts[]) - Array of SchedulerShifts
* ``employees`` (string[]) - Array of strings
* ``start_day`` (datetime, optional) - Start of week. Default based on current week. 
* ``end_day`` (datetime, optional) - End of week. Default based on current week.
* ``showEarnings`` (bool, optional) - Show earnings below employee name. Default `true`
* ``showHours`` (bool, optional) - Show hours below employee name. Default `true`


#### SchedulerShifts

* ``name`` (str) - Name of employee. Must match a name in `employees`.
* ``start_time`` (datetime) - Start of shift.
* ``end_time`` (datetime) - End of shift.
* ``hours`` (decimal, optional) - Number of hours worked in decimal form.
* ``earnings`` (decimal, optional) - Earnings.


## Callbacks

* ``optionsChanged(changes)`` - Called whenever the options are changed. `changed` is the object from `ngOnChanges`.
* ``dateChanged(obj)`` - Called when the dates are changed. obj includes `start_day` and `end_day`.
* ``scheduleClicked($event)`` - Called when a schedule is clicked.
* ``dateClicked($event)`` - Called when a date is clicked.


