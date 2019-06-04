import * as moment from 'moment';

class SchedulerShift {
  id: any;
  name: string;
  start_time: moment.Moment;
  end_time: moment.Moment;
  hours?: number;
  earnings?: number;
}

class SchedulerOptions {
  shifts: any[];
  employees: string[];
  start_day: moment.Moment;
  end_day: moment.Moment;
  showEarnings: boolean;
  showHours: boolean;
  centerShifts: boolean;
}

export {
  SchedulerShift,
  SchedulerOptions
};
