import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Grid, Paper, Typography, Button } from "@mui/material";

import getDataFromServer from "../../../asset/data/data";
import BuyNowModal from "../buyNowModal/index";

import { getAllProducts } from "../../../store/product-action";

const Products = ({ filterData }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [buyNowModalOpen, setBuyNowModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);

  const filter = filterData ? filterData : "";
  const rawData = products;
  const data = rawData.filter((data) => data.product_name.includes(filter));

  const buyNowHandler = () => {
    setBuyNowModalOpen(true);
  };

  return (
    <>
      <BuyNowModal
        buyNowModalOpen={buyNowModalOpen}
        setBuyNowModalOpen={setBuyNowModalOpen}
      />
      <Grid
        container
        spacing={2}
        p={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((data, index) => {
          return (
            // <Grid item xs={4} key={index}>
            <Paper
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                margin: "20px",
                width: "300px",
                // background: "#f5f5f5",
                // minWidth: "200px",
                // maxWidth: "300px",
              }}
            >
              <img src={data.img} width="100" height="150" />
              <Typography variant="h6">{data.product_name}</Typography>
              <Typography variant="body2">
                ({data.purifying_technology})
              </Typography>
              <Typography variant="body2">{data.capacity}L Capacity</Typography>
              <Typography variant="body2">{data.voltage}VDC Volt</Typography>
              <Typography variant="body2">
                {data.booster_pump} Booster Pump
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                MRP ₹{data.price}/-
              </Typography>
              <Button variant="contained" onClick={buyNowHandler}>
                Buy Now
              </Button>
            </Paper>
            // </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
