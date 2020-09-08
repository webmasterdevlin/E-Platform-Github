/* Validation for each input */
import * as Yup from 'yup';
import { formatDate } from '../../../../../../../utils/date-converter';

const createOfferingsYupObject = Yup.object({
  offering: Yup.string().required(), // subject/lesson
  imageFile: Yup.mixed().nullable().notRequired(),
  title: Yup.string().min(2).max(56).required().label('Label'),
  description: Yup.string().min(12).max(250).required().label('Description'),
  status: Yup.string().required(),
  courseLocations: Yup.array().required().label('Course Locations'),
  lessonMode: Yup.string().required(),
  hours: Yup.number().when('lessonMode', {
    is: 'group',
    then: Yup.number().required().label('Hours'),
    otherwise: Yup.number().notRequired().nullable(),
  }),
  pricingPerAttendee: Yup.number().when('lessonMode', {
    is: 'group',
    then: Yup.number().required().label('Pricing per attendee'),
    otherwise: Yup.number().notRequired().nullable(),
  }),
  starts: Yup.date()
    .max(
      Yup.ref('ends'),
      ({ max }) => `Date Starts must be before the end date.`,
    )
    .notRequired()
    .nullable(),
  ends: Yup.date()
    .min(
      Yup.ref('starts'),
      ({ min }) => `Date Ends needs to be after the start date.`,
    )
    .notRequired()
    .nullable(),
  included: Yup.string().nullable().notRequired(),
  excluded: Yup.string().nullable().notRequired(),
  preferredLanguages: Yup.array().required().label('Preferred Languages'),
  oneHourFree: Yup.boolean().when('lessonMode', {
    is: '1-on-1',
    then: Yup.boolean().required(),
    otherwise: Yup.boolean().notRequired().nullable(),
  }),
  additionalCosts: Yup.number().when('lessonMode', {
    is: '1-on-1',
    then: Yup.number().typeError('Must be a number').required(),
    otherwise: Yup.number().notRequired().nullable(),
  }),
  oneOnOnePackages: Yup.array().when('lessonMode', {
    is: '1-on-1',
    then: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required(),
          pricing: Yup.number().required(),
          hours: Yup.number().required(),
          included: Yup.string().nullable().notRequired(),
          excluded: Yup.string().nullable().notRequired(),
        }),
      )
      .required()
      .label('1-on-1 Packages'),
    otherwise: Yup.array().nullable().notRequired(),
  }),
});

const packageFormYupObject = Yup.object({
  name: Yup.string().required().label('Name'),
  pricing: Yup.number().required().label('Pricing'),
  hours: Yup.number().required().label('Hours'),
  included: Yup.string().nullable().notRequired(),
  excluded: Yup.string().nullable().notRequired(),
})
  .required()
  .label('Package');

export { createOfferingsYupObject, packageFormYupObject };
