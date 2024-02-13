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
  // Log the action to see what is being dispatched
  console.log('Dispatching action:', action);

  switch (action.type) {
    case LOGIN:
      // eslint-disable-next-line no-case-declarations
      const newStateLogin = {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
      // Log the new state after a LOGIN action
      console.log('New state after LOGIN:', newStateLogin);
      return newStateLogin;
    case LOGOUT:
      // eslint-disable-next-line no-case-declarations
      const newStateLogout = {
        ...state,
        isLoggedIn: false,
        username: null,
      };
      // Log the new state after a LOGOUT action
      console.log('New state after LOGOUT:', newStateLogout);
      return newStateLogout;
    default:
      // Log the state if no action matches (should remain unchanged)
      console.log('State unchanged:', state);
      return state;
  }
};