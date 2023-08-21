import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center">
          Nothing to see here!
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignContent="center"
        justifyContent="center"
      >
        <Button variant="contained" color="primary">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go to the home page
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};
