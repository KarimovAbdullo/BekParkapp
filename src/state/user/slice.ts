/* eslint-disable */
import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFoodDataProps } from 'api/data/FoodData';
import { UserState } from 'state/user/types';

const initialState: UserState = {
  user: null,
  loading: false,
  token: null,
  products: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IFoodDataProps>) => {
      state.products.push(action.payload);
    },

    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },

});



export const { addToCart, removeFromCart } = userSlice.actions;

export const userReducer = userSlice.reducer
