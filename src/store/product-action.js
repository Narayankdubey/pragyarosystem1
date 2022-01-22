import axios from "axios";
import { productActions } from "./product-slice";
import { uiActions } from "./ui-slice";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const getAllProducts = (type, pageNo) => {
  return async (dispatch) => {
    // dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.get(
        `https://pragyarosystem-heroku.herokuapp.com/products`
      );
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(productActions.updateProductsList(data.data));
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
      }
    } finally {
      // dispatch(uiActions.toggleLoader());
    }
  };
};
