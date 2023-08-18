import { QueryResolvers } from "src/generated/graphql";
import { productByIdQuery, productsQuery } from "./products";

export const queryResolvers: QueryResolvers = {
  products: productsQuery,
  productById: productByIdQuery,
};
