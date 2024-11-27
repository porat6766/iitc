import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1234,
        name: "laptop",
        price: 456,
        quantity: 2,
        totalItemPrice: 912,
      },
      { id: 567, name: "bamba", price: 50, quantity: 4, totalItemPrice: 200 },
    ],
    totalQuantity: 6,
    totalPrice: 1112,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      (state.totalQuantity += action.payload.quantity),
        (state.totalPrice += action.payload.price);
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => {
        item.id === action.payload;
        item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price;
      });
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
