import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as { id: number }[],
  reducers: {
    add(state, action) {
      const productToAdd = action.payload;
      const productExists = state.some((item) => item.id === productToAdd.id);

      if (!productExists) {
        state.push(productToAdd);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
