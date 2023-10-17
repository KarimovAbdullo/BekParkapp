// productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFoodDataProps } from 'api/data/FoodData';

export interface AppState {
  products: IFoodDataProps[];
}

const initialState: AppState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IFoodDataProps>) => {
      state.products.push(action.payload);
    },
    // removeFromCart: (state, action: PayloadAction<IFoodDataProps>) => {
    //   state.cart = state.cart.filter(item => item.id !== action.payload.id);
    // },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
