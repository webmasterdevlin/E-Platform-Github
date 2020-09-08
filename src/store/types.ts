import { Action } from 'redux';
import { IHeroState } from '../app/demo-development/heroes-module/hero.types';
import { SignInState } from '../app/features/auth/sign-in/sign-in.types';
import { OfferingState } from '../app/pages/Dashboard/contents/MyOfferingsContent/my-offerings.types';

export type ApiResponse = Record<string, any>;

export type IAction = {
  readonly payload?: any;
} & Action;

export type IApplicationState = {
  heroReducer: IHeroState;
  signInReducer: SignInState;
  offeringReducer: OfferingState;
};
