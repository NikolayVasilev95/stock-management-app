import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "src/database/operations/products";
import { MutationResolvers } from "src/generated/graphql";

export const createProductMutation: MutationResolvers["createProduct"] = async (
  _parent,
  _args,
  { prisma }
) => {
  try {
    return await createProduct(prisma, _args);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProductMutation: MutationResolvers["updateProduct"] = async (
  _parent,
  args,
  { prisma }
) => {
  try {
    return await updateProduct(prisma, args);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProductMutation: MutationResolvers["deleteProduct"] = async (
  _parent,
  { id },
  { prisma }
) => {
  try {
    return await deleteProduct(prisma, id);
  } catch (error) {
    throw new Error(error);
  }
};
