import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import process from "../.eslintrc.cjs";
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
     devTools: process.env.NODE_ENV !== 'production',
});
export default store
