import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice"
import  cartReducer from "../features/cartSlice"
import  authReducer from "../features/authSlice"
import themeReducer from "../features/themeSlice"

 

export const Store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        theme:themeReducer,
    }
})