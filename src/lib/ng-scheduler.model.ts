import * as moment from 'moment';

class SchedulerShift {
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
}

export {
  SchedulerShift,
  SchedulerOptions
};
