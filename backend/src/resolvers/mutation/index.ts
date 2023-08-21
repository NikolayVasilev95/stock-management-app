import { MutationResolvers } from "src/generated/graphql";
import {
  createProductMutation,
  updateProductMutation,
  deleteProductMutation,
} from "./products";
import { createStockMovementMutation } from "./stock_movements";

export const mutationResolvers: MutationResolvers = {
  createProduct: createProductMutation,
  updateProduct: updateProductMutation,
  deleteProduct: deleteProductMutation,
  createStockMovement: createStockMovementMutation,
};
