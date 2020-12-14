import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';

export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailed = data => ({
  type: LOGIN_FAIL,
  message: data,
});
