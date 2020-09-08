import {
  SignInState,
  SignInActionTypes,
  DecodedAccessToken,
} from './sign-in.types';
import * as jwt from 'jsonwebtoken';

const initialState: SignInState = {
  email: '',
  exp: Date.now(),
  iat: Date.now(),
  sub: '',
  loading: false,
  error: '',
  accessToken: null,
  roles: [],
  logout: false,
};

interface IAction {
  type: string;
  payload: any;
}

export const signInReducer = (
  state: SignInState = initialState,
  action: IAction,
): SignInState => {
  switch (action.type) {
    case SignInActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: '' };
    case SignInActionTypes.LOGIN_SUCCESS:
      const loginClaim = jwt.decode(
        action.payload.accessToken,
      ) as DecodedAccessToken;

      // TODO: Refresh token
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
        roles: [loginClaim.email.includes('mentor') ? 'mentor' : 'student'],
        email: loginClaim.email,
        exp: loginClaim.exp,
        iat: loginClaim.iat,
      };

    case SignInActionTypes.REGISTER_REQUEST:
      return { ...state, loading: true, error: '' };
    case SignInActionTypes.REGISTER_SUCCESS:
      const registerClaim = jwt.decode(
        action.payload.accessToken,
      ) as DecodedAccessToken;

      // TODO: Email confirmation
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,

        email: registerClaim.email,
        exp: registerClaim.exp,
        iat: registerClaim.iat,
      };

    case SignInActionTypes.ADD_USER_TO_REDUX_REQUEST:
      return { ...state, error: '' };

    case SignInActionTypes.ADD_USER_TO_REDUX_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        sub: action.payload.sub,
        accessToken: action.payload.accessToken,
      };

    case SignInActionTypes.LOGOUT_USER:
      // state = null;
      return {
        ...state,
        logout: true,
      };

    default:
      return state;
  }
};
