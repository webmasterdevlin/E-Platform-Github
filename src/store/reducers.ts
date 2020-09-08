/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';
import { heroReducer } from '../app/demo-development/heroes-module/hero.reducer';
import { signInReducer } from '../app/features/auth/sign-in/sign-in.reducer';
import { offeringReducer } from '../app/pages/Dashboard/contents/MyOfferingsContent/my-offerings.reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(
  /*place all reducers here separated by commas. For example, heroReducer*/
  injectedReducers: InjectedReducersType = {
    heroReducer,
    signInReducer,
    offeringReducer,
  },
) {
  return combineReducers({
    ...injectedReducers,
  });
}
