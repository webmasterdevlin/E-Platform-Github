import { DayEnum, OrdinalEnum } from './offering-recurrence.enums';

export const offeringRecurrenceValue: OfferingRecurrenceModel = {
  lessonTime: {
    start: '06:00',
    end: '11:00',
    duration: 1,
  },
  recurrencePattern: {
    daily: {
      everyNumberOfDays: 1,
      everyWeekday: false,
    },
    weekly: {
      recurEvery: 1,
      weeksOn: [],
    },
    monthly: {
      recurEvery: OrdinalEnum.first,
      ofDay: DayEnum.friday,
    },
  },
  rangeOfRecurrence: {
    start: new Date(),
    endBy: new Date(),
    endAfter: 1,
    noEndDate: false,
  },
};

export type OfferingRecurrenceModel = {
  lessonTime: LessonTimeModel;
  recurrencePattern: RecurrencePatternModel;
  rangeOfRecurrence: RangeOfRecurrenceModel;
};

export type LessonTimeModel = {
  start: string;
  end: string;
  duration: number;
};

export type RecurrencePatternModel = {
  daily: DailyModel;
  weekly: WeeklyModel;
  monthly: MonthlyModel;
};

export type DailyModel = {
  everyNumberOfDays?: number;
  everyWeekday?: boolean;
};

export type WeeklyModel = {
  recurEvery?: number;
  weeksOn: Array<DayEnum>;
};

export type MonthlyModel = {
  recurEvery: OrdinalEnum;
  ofDay: DayEnum;
};

export type RangeOfRecurrenceModel = {
  start: Date;
  endBy?: Date;
  endAfter?: number;
  noEndDate?: boolean;
};
