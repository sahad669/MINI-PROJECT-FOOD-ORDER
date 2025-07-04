import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("currentUser"));
const savedUsers = JSON.parse(localStorage.getItem("userList")) || [];

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: savedUser || null,
    userList: savedUsers,
  },
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },

    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },

    registerUser: (state, action) => {
      const updatedUsers = [...state.userList, action.payload];
      state.userList = updatedUsers;
      localStorage.setItem("userList", JSON.stringify(updatedUsers));
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
