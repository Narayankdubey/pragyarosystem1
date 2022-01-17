import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { createProducts, checkLoginStatus } from "../../../store/admin-action";

import validateForm from "./validateCreateProduct";

const CreateProduct = () => {
  const initialState = {
    product_name: "",
    color: "",
    capacity: parseInt(""),
    purifiying_technology: "",
    booster_pump: "",
    voltage: parseInt(""),
    img: "",
    price: parseInt(""),
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [error, setError] = useState({});
  const { loginDetail, loggedIn, errMsg } = useSelector((state) => state.admin);
  const {
    product_name,
    color,
    capacity,
    purifiying_technology,
    booster_pump,
    voltage,
    img,
    price,
  } = data;
  useEffect(() => {
    dispatch(checkLoginStatus());
    if (!loggedIn) {
      navigate("/admin");
    }
  }, [loggedIn]);

  const onChangeHandler = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);

    if (noErrors) {
      dispatch(createProducts(data));
      setData(initialState);
    }
  };
  const inputData = [
    { name: "product_name", type: "text", value: product_name },
    { name: "color", type: "text", value: color },
    { name: "capacity", type: "number", value: capacity },
    {
      name: "purifiying_technology",
      type: "text",
      value: purifiying_technology,
    },
    { name: "booster_pump", type: "text", value: booster_pump },
    { name: "voltage", type: "number", value: voltage },
    { name: "price", type: "number", value: price },
    { name: "img", type: "text", value: img },
  ];
  return (
    <div className="createProduct-container">
      <form onSubmit={onSubmitHandler} className="create-form">
        <div className="header">
          <Typography variant="h6">Create Product</Typography>
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </div>
        {inputData.map((data, index) => {
          const { name, type, value } = data;
          return (
            <div className="input-field-container">
              <TextField
                key={index}
                name={name}
                label={name}
                type={type}
                variant="outlined"
                error={error[name] ? true : false}
                value={value}
                onChange={onChangeHandler}
                size="small"
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
        {/* <TextField
        name="product_name"
        label="probduct name"
        variant="outlined"
        value={product_name}
        onChange={onChangeHandler}
        sx={{ margin: "5px" }}
      /> */}
        {/* <TextField
        name="color"
        label="color"
        variant="outlined"
        value={color}
        onChange={onChangeHandler}
      />
      <TextField
        name="capacity"
        type="number"
        label="capacity"
        variant="outlined"
        value={capacity}
        onChange={onChangeHandler}
      />
      <TextField
        name="purifiying_technology"
        label="Purifiying Technology"
        variant="outlined"
        value={purifiying_technology}
        onChange={onChangeHandler}
      />
      <TextField
        name="booster_pump"
        label="Booster Pump"
        variant="outlined"
        value={booster_pump}
        onChange={onChangeHandler}
      />
      <TextField
        name="voltage"
        label="Voltage"
        variant="outlined"
        type="number"
        value={voltage}
        onChange={onChangeHandler}
      />
      <TextField
        name="price"
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={onChangeHandler}
      />
      <TextField
        name="img"
        label="Image Link"
        variant="outlined"
        value={img}
        onChange={onChangeHandler}
      /> */}
      </form>
    </div>
  );
};

export default CreateProduct;
