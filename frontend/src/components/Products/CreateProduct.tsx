import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCreateProductMutation } from "../../graphql/generated/schema";
import { Formik } from "formik";
import { productSchema } from "../../utils/Validations/products";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface CreateProductProps {
  open: boolean;
  handleClose: () => void;
}

export const CreateProduct = ({ open, handleClose }: CreateProductProps) => {
  const createProduct = useCreateProductMutation();

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Formik
        validationSchema={productSchema}
        initialValues={{
          name: "",
          size_per_unit: 0,
        }}
        onSubmit={(values, helpers) => {
          createProduct[0]({
            variables: {
              name: values.name,
              sizePerUnit: values.size_per_unit,
            },
          });
          createProduct[1].client.resetStore();
          helpers.resetForm();
          handleClose();
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Create product
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name ? true : false}
                helperText={errors.name}
              />
              <TextField
                margin="dense"
                id="size_per_unit"
                label="Size per unit"
                type="number"
                fullWidth
                value={values.size_per_unit}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.size_per_unit ? true : false}
                helperText={errors.size_per_unit}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" disabled={isSubmitting}>
                Save changes
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </BootstrapDialog>
  );
};
