import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import {
  GetProductsQuery,
  MovementType,
  useCreateStockMovementMutation,
  useGetProductsQuery,
} from "../../graphql/generated/schema";
import { stockMovementSchema } from "../../utils/Validations/stock_movements";

const PaperForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

interface CreateStockMovementsProps {
  warehouse_id: string;
}

export const CreateStockMovements = ({
  warehouse_id,
}: CreateStockMovementsProps) => {
  const { data } = useGetProductsQuery();
  const createStockMovement = useCreateStockMovementMutation();
  const [products, setProducts] = useState<GetProductsQuery["products"] | null>(
    []
  );

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <>
      {warehouse_id ? (
        <PaperForm variant="outlined">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" component="p">
                Export or Import
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Formik
                validationSchema={stockMovementSchema}
                initialValues={{
                  amount: 0,
                  movementDate: new Date(),
                  movementType: "" as MovementType,
                  productId: "",
                  warehouseId: warehouse_id,
                }}
                onSubmit={(values, helpers) => {
                  createStockMovement[0]({
                    variables: {
                      amount: values.amount,
                      movementDate: values.movementDate,
                      movementType: values.movementType,
                      productId: values.productId,
                      warehouseId: values.warehouseId,
                    },
                  });
                  createStockMovement[1].client.resetStore();
                  helpers.resetForm();
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  errors,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      margin="dense"
                      id="movementType"
                      name="movementType"
                      select
                      label="Select Movement Type"
                      value={values.movementType}
                      onChange={handleChange}
                      onFocus={handleBlur}
                      error={errors.movementType ? true : false}
                      helperText={errors.movementType}
                    >
                      <MenuItem key={""} value={""}>
                        No Selected // Or Empty
                      </MenuItem>
                      <MenuItem value={MovementType.Export}>
                        {MovementType.Export}
                      </MenuItem>
                      <MenuItem value={MovementType.Inport}>
                        {MovementType.Inport}
                      </MenuItem>
                    </TextField>
                    <TextField
                      fullWidth
                      margin="dense"
                      id="productId"
                      name="productId"
                      select
                      label="Select Product"
                      value={values.productId}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue(
                          "amount",
                          products?.filter(
                            (product) => product?.id === e.target.value
                          )[0]?.size_per_unit ?? null
                        );
                      }}
                      onFocus={handleBlur}
                      error={errors.productId ? true : false}
                      helperText={errors.productId}
                    >
                      <MenuItem key={""} value={""}>
                        No Selected // Or Empty
                      </MenuItem>
                      {products?.map((product) => (
                        <MenuItem key={product?.id} value={product?.id}>
                          {product?.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      margin="dense"
                      id="amount"
                      label="Amount"
                      type="number"
                      fullWidth
                      value={values.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled
                    />
                    <Button type="submit" disabled={isSubmitting}>
                      Save changes
                    </Button>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </PaperForm>
      ) : (
        <Typography variant="h4" component="p">
          Please select warehouse
        </Typography>
      )}
    </>
  );
};
