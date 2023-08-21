import React, { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import {
  useGetProductsQuery,
  GetProductsQuery,
  useDeleteProductMutation,
  Product,
} from "../../graphql/generated/schema";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EditProduct } from "./EditProduct";

export const ProductsTable = () => {
  const { loading, data } = useGetProductsQuery();
  const deleteProduct = useDeleteProductMutation();
  const [products, setProducts] = useState<GetProductsQuery["products"] | null>(
    []
  );

  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>();

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const handleOpenEditProduct = (id: string) => {
    const selectedProduct = data?.products?.filter(
      (product) => product?.id === id
    )[0];
    setSelectedProduct(selectedProduct);
    setOpenEditProduct(true);
  };
  const handleCloseEditProduct = () => {
    setSelectedProduct(null);
    setOpenEditProduct(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "size_per_unit",
      headerName: "Size per unit",
      type: "number",
      width: 90,
    },
    {
      field: "actions",
      type: "actions",
      width: 160,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleOpenEditProduct(params.id.toString())}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={async () => {
            await deleteProduct[0]({
              variables: { deleteProductId: params.id.toString() },
            });
            deleteProduct[1].client.resetStore();
          }}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products ? products : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        loading={loading}
      />
      {selectedProduct && (
        <EditProduct
          open={openEditProduct}
          handleClose={handleCloseEditProduct}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
