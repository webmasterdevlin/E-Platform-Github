import { Dispatch, ActionCreator } from 'redux';
import { OfferingActionTypes } from './my-offerings.types';
import { getOfferingsAxios } from './my-offerings.service';
import { Status } from '../CreateOfferingsContent/all-steps/schema/create-offerings.value';

/*redux thunk*/

export const fetchOfferingsAction: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: OfferingActionTypes.FETCH_OFFERINGS_REQUEST });

    try {
      const { data } = await getOfferingsAxios();

      dispatch({
        type: OfferingActionTypes.FETCH_OFFERINGS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: OfferingActionTypes.FETCH_OFFERINGS_ERROR,
        payload: e.message,
      });
    }
  };
};
