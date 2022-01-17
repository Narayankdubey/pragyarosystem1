import React from "react";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import Products from "../product";
import style from "./style.css";
import offer from "../../../asset/img/offer.jpeg";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={offer} className="offerImg" />
      <div className="filterdProduct">
        <Typography
          component={"h6"}
          variant="h5"
          p={"20px 20px 0px 20px"}
          mx={2}
          sx={{ fontWeight: "bold", borderBottom: "2px solid black" }}
        >
          Aquaguard
        </Typography>
        <Products filterData="Aqua" />
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Link
            to={"/pragyarosystem/products"}
            style={{
              padding: "8px",
              border: "1px solid black",
              borderRadius: "25px",
              textDecoration: "none",
            }}
          >
            see all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
