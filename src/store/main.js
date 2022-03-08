import { configureStore } from "@reduxjs/toolkit";
import uiReducers from "./ui-slice";
import cartReducer from "./cartItem-slice";
const store = configureStore({
    reducer: {
        uiCart: uiReducers,
        cartItem: cartReducer,
    }
});

export default store;