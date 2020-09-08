import * as Yup from 'yup';

export const offeringRecurrenceYupObject = Yup.object({
  lessonTime: Yup.object({
    start: Yup.string(),
    end: Yup.string(),
    duration: Yup.number(),
  }),

  recurrencePattern: Yup.object({
    daily: Yup.object({
      everyNumberOfDays: Yup.number(),
      everyWeekday: Yup.boolean(),
    }),
    weekly: Yup.object({
      recurEvery: Yup.number(),
      weeksOn: Yup.array().of(Yup.string()),
    }),
    monthly: Yup.object({
      recurEvery: Yup.string(),
      ofDay: Yup.string(),
    }),
  }),

  rangeOfRecurrence: Yup.object({
    start: Yup.date(),
    endBy: Yup.date(),
    endAfter: Yup.number().min(0),
    noEndDate: Yup.boolean(),
  }),
});
