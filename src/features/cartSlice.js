import { createSlice } from "@reduxjs/toolkit";

const cartStore = JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartStore,
  },

  reducers: {
    addProductToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.qty += item.qty;
      } else {
        state.items.push({ ...item });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.qty = qty;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});


export const { addProductToCart, removeCart, clearCart, updateQty } = cartSlice.actions;

export default cartSlice.reducer;
