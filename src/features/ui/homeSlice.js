import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
};
const homeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { updateName } = homeSlice.actions;
export default homeSlice.reducer;
