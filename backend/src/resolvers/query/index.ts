import { QueryResolvers } from "src/generated/graphql";
import { productByIdQuery, productsQuery } from "./products";
import { warehouseByIdQuery, warehousesQuery } from "./warehouses";

export const queryResolvers: QueryResolvers = {
  products: productsQuery,
  productById: productByIdQuery,
  warehouses: warehousesQuery,
  warehouseById: warehouseByIdQuery,
};
