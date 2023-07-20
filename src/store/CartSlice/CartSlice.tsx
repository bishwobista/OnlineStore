import { createSlice } from "@reduxjs/toolkit";


interface CartItem {
  id: number; 
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[], 
  reducers: {
    add(state: CartItem[], action: { payload: CartItem }) {
      state.push(action.payload);
    },
    remove(state: CartItem[], action: { payload: number }) {
      state = state.filter(item => item.id !== action.payload);
      
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
