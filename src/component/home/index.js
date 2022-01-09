import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component={"h1"}
        variant="h4"
        sx={{
          padding: "10px",
          color: "red",
          textShadow: "0px 7px 10px black",
          fontWeight: "600",
          border: "3px solid black",
          borderRadius: "45px",
        }}
      >
        Pragya RO System
      </Typography>
      <p style={{ color: "red" }}> Under Development</p>
    </div>
  );
};

export default Home;
