/* eslint-disable */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user/slice';

const rootReducer = combineReducers({
  user: userReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = setupStore();


export { store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
