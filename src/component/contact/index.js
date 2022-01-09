import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";

const Contact = () => {
  return (
    <Grid container spacing={0} p={2}>
      {/* <Typography>Pragya RO System</Typography> */}
      <Typography
        variant="h4"
        component="h1"
        p={2}
        style={{
          textAlign: "center",
          width: "100%",
          borderBottom: "1px solid blue",
        }}
      >
        Pragya RO System
      </Typography>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          minHeight: "calc(100vh - 235px)",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          component={"span"}
          sx={{ display: "flex", alignContent: "center" }}
        >
          <CallIcon /> 8920310622
        </Typography>
        <Typography
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <BusinessIcon /> <p style={{ fontWeight: "600" }}>Address</p>
          </div>
          <p>
            Krishna Vihar, Gathola Road, Lakh No.11, Near Mahavir Mandir,
            Bahiro,
            <br /> Ara, Bhojpur, Bihar <br />
            (801109)
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
