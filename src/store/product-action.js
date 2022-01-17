import axios from "axios";
import { productActions } from "./product-slice";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const getAllProducts = (type, pageNo) => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(`${baseURL}products`);
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
    }
  };
};
