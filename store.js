import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/features/ui/homeSlice";
import careReducer from "./src/features/catalog/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: careReducer,
  },
});
export default store;
