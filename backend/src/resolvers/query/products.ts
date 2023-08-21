import {
  readAllProducts,
  readProductById,
} from "src/database/operations/products";
import { QueryResolvers } from "src/generated/graphql";

export const productsQuery: QueryResolvers["products"] = async (
  _parent,
  _args,
  { prisma }
) => {
  try {
    return await readAllProducts(prisma);
  } catch (error) {
    throw new Error(error);
  }
};

export const productByIdQuery: QueryResolvers["productById"] = async (
  _parent,
  { id },
  { prisma }
) => {
  try {
    return await readProductById(prisma, id);
  } catch (error) {
    throw new Error(error);
  }
};
