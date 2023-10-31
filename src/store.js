import { configureStore, createReducer } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartRedicer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: createReducer,
  },
});

export default store;
