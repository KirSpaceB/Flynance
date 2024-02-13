import { LOGIN, LOGOUT, AuthActionTypes } from '../types/authTypes';

export const login = (username: string): AuthActionTypes => ({
  type: LOGIN,
  payload: { username },
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});