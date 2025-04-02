import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const name = action.payload.name;
        const image = action.payload.image;
        const cost = action.payload.cost;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        }
        else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const name = action.payload.name;
        const amount = action.payload.quantity;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = amount;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
