import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './Slice';

const rootReducer = combineReducers({
  productList: productSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: {
    reducers: rootReducer,
  },
});

export default store;
