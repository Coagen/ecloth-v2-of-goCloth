import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalBalance = (state) =>
  state.cart.cart.reduce((sum, cv) => sum + cv.totalAmount, 0);
