import * as jwt from 'jsonwebtoken';
import { DecodedAccessToken } from './sign-in/sign-in.types';

const accessTokenKey = 'accessToken';
const refreshTokenKey = 'refreshToken';

export function setAccessToken(tokenValue) {
  localStorage.setItem(accessTokenKey, tokenValue);
}

export function setRefreshToken(tokenValue) {
  localStorage.setItem(refreshTokenKey, tokenValue);
}

export function getAccessToken() {
  return localStorage.getItem(accessTokenKey);
}

export function getRefreshToken() {
  return localStorage.getItem(refreshTokenKey);
}

export function deleteAccessToken() {
  localStorage.removeItem(accessTokenKey);
}

export function logOut() {
  console.log('logOut_accessTokenKey');

  localStorage.removeItem(accessTokenKey);
  localStorage.removeItem(refreshTokenKey);
  // @ts-ignore
  window.location = '/';
}

export function TokenFromLocalStorageIsValid(): boolean {
  const token = localStorage.getItem(accessTokenKey);
  if (!token) return false;

  const decoded = jwt.decode(token) as DecodedAccessToken;

  if (!decoded) return false;

  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();
  return dateNow <= expiresAt;
}

export function getDecodedAccessTokenFromLocalStorage(): DecodedAccessToken {
  const token = localStorage.getItem(accessTokenKey);
  const decoded = jwt.decode(token) as DecodedAccessToken;

  if (!token) throw new Error('accessToken not found');
  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();

  if (dateNow <= expiresAt) {
    return jwt.decode(token) as DecodedAccessToken;
  } else {
    throw new Error('Token is expired');
  }
}

export function setRememberMe(user: string, remember: boolean) {
  if (!remember) return;
  localStorage.setItem('rememberMe', 'true');
  localStorage.setItem('user', user);
}

export default {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  logOut,
  TokenFromLocalStorageIsValid,
  setRememberMe,
  getDecodedAccessTokenFromLocalStorage,
};
