import axios from "axios";
import { adminActions } from "./admin-slice";
import authHeader from "../authHeader";
import { uiActions } from "./ui-slice";

const baseURL = process.env.REACT_APP_API_BASE_URL;
console.log(baseURL, "baseUrl in aciton");

export const adminLogin = (data) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.post(
        `https://pragyarosystem-heroku.herokuapp.com/login`,
        data,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      console.log(response, "inside axios");
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      console.log(data, "action");
      if (data.status === 200) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "success",
            message: "Logged In Successfully !",
          })
        );
        localStorage.setItem("jwt", data.data);
        dispatch(adminActions.loggedInStatus(true));
      }
      dispatch(adminActions.loginDetails(data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};
export const createProducts = (data) => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.post(
        `https://pragyarosystem-heroku.herokuapp.com/products`,
        data,
        {
          headers: authHeader(),
        }
      );
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      console.log(data, "try action");
      dispatch(adminActions.createProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const checkLoginStatus = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    try {
      const auth = authHeader();
      if (auth) {
        dispatch(adminActions.loggedInStatus(true));
      } else {
        dispatch(adminActions.loggedInStatus(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("jwt");
      dispatch(adminActions.loggedInStatus(false));
    } catch (error) {
      console.log(error);
    }
  };
};
