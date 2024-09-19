import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/cartSlice";
const store = configureStore({
  reducer: cartReducer,
});

export default store;
