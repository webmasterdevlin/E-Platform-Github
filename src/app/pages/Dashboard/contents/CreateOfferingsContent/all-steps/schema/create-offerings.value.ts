import { ApiResponse } from '../../../../../../../store/types';

export enum Status {
  active = 'active',
  forReview = 'forReview',
  inactive = 'inactive',
}

export enum LessonMode {
  oneOnOne = '1-on-1',
  group = 'group',
}

export const createOfferingsValue: OfferingModel = {
  offering: '',
  imageFile: {
    name: '',
    type: '',
    size: '',
  },
  title: '',
  description: '',
  status: Status.forReview,
  courseLocations: [],
  lessonMode: LessonMode.oneOnOne,
  starts: new Date(),
  ends: new Date(),
  hours: 1,
  included: '',
  excluded: '',
  preferredLanguages: [],
  pricingPerAttendee: 0,
  oneHourFree: false,
  additionalCosts: 0,
  oneOnOnePackages: [],
};

export type OfferingModel = {
  id?: string;
  offering: string;
  imageFile: any | (any & Blob);
  title: string;
  description: string;
  status: Status;
  courseLocations: Array<CourseLocationModel>;
  lessonMode: LessonMode;
  hours: number;
  starts: Date;
  ends: Date;
  included: string;
  excluded: string;
  preferredLanguages: Array<PreferredLanguagesModel>;
  pricingPerAttendee: number;
  oneHourFree: boolean;
  additionalCosts: number | string;
  oneOnOnePackages: Array<OneOnOnePackageModel>;
} & ApiResponse;

export type CourseLocationModel = {
  key: string;
  value: string;
};

export type LessonModeModel = {
  key: string;
  value: string;
};

export type PreferredLanguagesModel = {
  key: string;
  value: string;
};

export type OneOnOnePackageModel = {
  id: string;
  name: string;
  hours: number;
  pricing: number;
  included: string;
  excluded: string;
};
