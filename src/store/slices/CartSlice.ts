import { IProduct } from '@/services/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartStore {
  cartItems: IProduct[];
  total: number;
  isLoading: boolean;
}

const initialState: ICartStore = {
  cartItems: [],
  total: 0,
  isLoading: true
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<IProduct>) => {
      state.cartItems = [
        { ...payload },
        ...state.cartItems.filter((item) => item.id !== payload.id)
      ];
    },

    deleteCart: (state, { payload }: PayloadAction<IProduct>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
    }
  }
});
export const { setCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
