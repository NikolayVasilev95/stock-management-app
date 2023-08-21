import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ProductsTable } from "../../components/Products/ProductsTable";
import { CreateProduct } from "../../components/Products/CreateProduct";

export const Products = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  const handleOpenCreateProduct = () => {
    setOpenCreateProduct(true);
  };
  const handleCloseCreateProduct = () => {
    setOpenCreateProduct(false);
  };

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            onClick={handleOpenCreateProduct}
            sx={{ marginBlock: "5px" }}
          >
            Create Product
          </Button>
        </Grid>
      </Grid>
      {openCreateProduct && (
        <CreateProduct
          open={openCreateProduct}
          handleClose={handleCloseCreateProduct}
        />
      )}
      <Grid item xs={12}>
        <ProductsTable />
      </Grid>
    </Grid>
  );
};
