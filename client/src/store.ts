import { createStore, combineReducers, Store } from 'redux';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store: Store<AppState> = createStore(rootReducer);