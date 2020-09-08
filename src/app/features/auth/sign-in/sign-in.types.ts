import { ApiResponse } from '../../../../store/types';

export type SignInState = {
  readonly email: string;
  readonly exp: number;
  readonly iat: number;
  readonly sub: string;
  readonly loading: boolean;
  readonly error: string;
  readonly accessToken: string;
  readonly roles: Array<string>;
  readonly logout: boolean;
};

export type LoginModel = {
  email: string;
  password: string;
  rememberMe: false; // TODO: for continue prior logging in
} & ApiResponse;

export type RegisterModel = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  accessToken: string;
  roles: Array<string>;
  logout: boolean;
} & ApiResponse;

export type AccessTokenModel = {
  accessToken: string;
} & ApiResponse;

export type DecodedAccessToken = {
  email: string;
  exp: number;
  iat: number;
  sub: string;
} & AccessTokenModel;

/* action types */
export const SignInActionTypes = {
  LOGIN_REQUEST: '@@/Sign-In/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@@/Sign-In/LOGIN_SUCCESS',

  REGISTER_REQUEST: '@@/Sign-In/REGISTER_REQUEST',
  REGISTER_SUCCESS: '@@/Sign-In/REGISTER_SUCCESS',

  ADD_USER_TO_REDUX_REQUEST: '@@/Sign-In/ADD_USER_TO_REDUX_REQUEST',
  ADD_USER_TO_REDUX_SUCCESS: '@@/Sign-In/ADD_USER_TO_REDUX_SUCCESS',

  LOGOUT_USER: '@@/Sign-In/LOGOUT_USER',
};
