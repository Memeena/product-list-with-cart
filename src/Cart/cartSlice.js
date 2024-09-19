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
      console.log("cart added");
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.dessertId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      console.log("inside add quantity");
      const item = state.cart.find((item) => item.dessertId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.dessertId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.find((item) => item.dessertId === id)?.quantity ?? 0;
