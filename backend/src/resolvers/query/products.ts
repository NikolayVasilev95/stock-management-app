import {
  ReadAllProducts,
  ReadProductById,
} from "src/database/operations/products";
import { QueryResolvers } from "src/generated/graphql";

export const productsQuery: QueryResolvers["products"] = async (
  _parent,
  _args,
  { prisma }
) => {
  try {
    return await ReadAllProducts(prisma);
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
    return await ReadProductById(prisma, id);
  } catch (error) {
    throw new Error(error);
  }
};
