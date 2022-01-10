import React, { useState } from "react";
import { Container, Box, Grid, Paper, Typography, Button } from "@mui/material";

import getDataFromServer from "../../asset/data/data";
import BuyNowModal from "../buyNowModal/index";

const Products = ({ filterData }) => {
  const filter = filterData ? filterData : "";
  const [buyNowModalOpen, setBuyNowModalOpen] = useState(false);
  const rawData = getDataFromServer();
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
        wrap
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((data, index) => {
          return (
            // <Grid item xs={4} key={index}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                margin: "20px",
                width: "300px",
                background: "#f5f5f5",
                // minWidth: "200px",
                // maxWidth: "300px",
              }}
            >
              <img src={data.img} width="100" height="150" />
              <Typography variant="h6">{data.product_name}</Typography>
              <Typography variant="body2">
                ({data.Purifiying_Technology})
              </Typography>
              <Typography variant="body2">{data.capacity}L Capacity</Typography>
              <Typography variant="body2">{data.Voltage}VDC Volt</Typography>
              <Typography variant="body2">
                {data.Booster_Pump} Booster Pump
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                ₹{data.Price}/-
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
