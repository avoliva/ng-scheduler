# Angular Scheduler

Simple weekly schedule display. This is just a display. Adding shifts, employees, etc. would be handled on your end. Switches from weekly to daily based on browser size.

![Weekly Example](https://i.ibb.co/GJB4gPc/Screen-Shot-2019-06-04-at-1-42-18-PM.png)
![Daily Example](https://i.ibb.co/ZVWDWZ1/Screen-Shot-2019-06-04-at-1-42-28-PM.png)

## Installation

`npm install ng-scheduler`

Add SchedulerModule to your modules.

`<ng-scheduler [options]="schedulerOptions"></ng-scheduler>` in your HTML.

## Arguments

#### Options

* ``shifts`` (SchedulerShifts[]) - Array of SchedulerShifts.
* ``employees`` (string[]) - Array of strings.
* ``start_day`` (datetime, optional) - Start of week. Default based on current week. 
* ``end_day`` (datetime, optional) - End of week. Default based on current week.
* ``showEarnings`` (bool, optional) - Show earnings below employee name. Default `true`.
* ``showHours`` (bool, optional) - Show hours below employee name. Default `true`.
* ``centerShifts``  (bool, optional) - Toggles whether shifts aligned at the top or middle. Default `true`.
* ``daily`` (bool, optional) - Force daily version. Default `false`.


#### SchedulerShifts

* ``id`` (any, optional) - A unique identifier.
* ``start_time`` (datetime) - Start of shift.
* ``end_time`` (datetime) - End of shift.
* ``hours`` (decimal, optional) - Number of hours worked in decimal form.
* ``earnings`` (decimal, optional) - Earnings.


## Callbacks

* ``optionsChanged(changes)`` - Called whenever the options are changed. `changed` is the object from `ngOnChanges`.
* ``dateChanged(obj)`` - Called when the dates are changed. obj includes `start_day` and `end_day`.
* ``scheduleClicked(shift)`` - Called when a schedule is clicked.
* ``dateClicked(date)`` - Called when a date is clicked.


