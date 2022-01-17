import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetail: "",
  loggedIn: false,
  errMsg: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginDetails: (state, action) => {
      if (action.payload.status === 200) {
        state.loginDetail = "Logged In";
      } else {
        state.loginDetail = "Error";
      }
    },
    createProduct: (state, action) => {
      state.errMsg = action.payload;
    },
    loggedInStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});
export const adminActions = adminSlice.actions;
export default adminSlice;
