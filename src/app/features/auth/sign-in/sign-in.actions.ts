import { Dispatch, ActionCreator } from 'redux';
import { LoginModel, RegisterModel, SignInActionTypes } from './sign-in.types';
import { loginUserAxios, registerUserAxios } from './sign-in.service';
import {
  getAccessToken,
  getDecodedAccessTokenFromLocalStorage,
} from '../auth.localstorage.service';

// This is Redux Thunk in action
export const loginUserAction: ActionCreator<any> = (user: LoginModel) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SignInActionTypes.LOGIN_REQUEST });

    try {
      const { data } = await loginUserAxios(user);
      dispatch({
        type: SignInActionTypes.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const registerUserAction: ActionCreator<any> = (user: RegisterModel) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SignInActionTypes.REGISTER_REQUEST });

    try {
      const { data } = await registerUserAxios(user);
      dispatch({
        type: SignInActionTypes.REGISTER_SUCCESS,
        payload: data,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const saveUserToStoreAction: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SignInActionTypes.ADD_USER_TO_REDUX_REQUEST });

    try {
      const decoded = getDecodedAccessTokenFromLocalStorage();
      decoded.accessToken = getAccessToken();
      dispatch({
        type: SignInActionTypes.ADD_USER_TO_REDUX_SUCCESS,
        payload: { ...decoded },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const logoutUserFromStoreAction: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SignInActionTypes.LOGOUT_USER });
  };
};
