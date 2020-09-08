import { OfferingActionTypes, OfferingState } from './my-offerings.types';
import { OfferingModel } from '../CreateOfferingsContent/all-steps/schema/create-offerings.value';
import { IAction } from '../../../../../store/types';

const initialState: OfferingState = {
  offerings: [],
  offering: {} as OfferingModel,
  loading: false,
  error: '',
};

export const offeringReducer = (
  state: OfferingState = initialState,
  action: IAction,
): OfferingState => {
  switch (action.type) {
    case OfferingActionTypes.FETCH_OFFERINGS_REQUEST:
      return { ...state, loading: true, error: '' };
    case OfferingActionTypes.FETCH_OFFERINGS_SUCCESS:
      return { ...state, loading: false, offerings: action.payload };
    case OfferingActionTypes.FETCH_OFFERINGS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
