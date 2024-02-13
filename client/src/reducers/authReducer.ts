import { LOGIN, LOGOUT, AuthActionTypes } from '../types/authTypes';

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: null,
      };
    default:
      return state;
  }
};