import React from "react";
import { Grid, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center">
          Welcome to the Warehouse Stock Movement App!
        </Typography>
      </Grid>
    </Grid>
  );
};
