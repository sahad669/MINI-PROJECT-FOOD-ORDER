
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return !currentUser ? (
    <Navigate to="/login" /> //not  user logedin then redirect to loginpage 
  ) : currentUser.role !== "admin" ? (
    <Navigate to="/not-authorised" /> //user logged but  not admin then redirect to  not authorised 
  ) : (
    children
  );
};

export default ProtectedAdminRoute;


// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../features/productSlice"
// import  cartReducer from "../features/cartSlice"
// import  authReducer from "../features/authSlice"
// import themeReducer from "../features/themeSlice"

 

// export const Store = configureStore({
//     reducer: {
//         products: productReducer,
//         cart: cartReducer,
//         auth: authReducer,
//         theme:themeReducer,
//     }
// })