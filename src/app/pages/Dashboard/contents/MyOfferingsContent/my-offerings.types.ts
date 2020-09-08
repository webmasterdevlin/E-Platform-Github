import { OfferingModel } from '../CreateOfferingsContent/all-steps/schema/create-offerings.value';

export type OfferingState = {
  readonly offerings: OfferingModel[];
  readonly offering: OfferingModel;
  readonly loading: boolean;
  readonly error: string;
};

/*action types*/
export const OfferingActionTypes = {
  FETCH_OFFERINGS_REQUEST: '@@/Offering/FETCH_OFFERINGS_REQUEST',
  FETCH_OFFERINGS_SUCCESS: '@@/Offering/FETCH_OFFERINGS_SUCCESS',
  FETCH_OFFERINGS_ERROR: '@@/Offering/FETCH_OFFERINGS_ERROR',
};
