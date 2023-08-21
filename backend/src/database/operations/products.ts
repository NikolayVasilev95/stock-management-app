import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Product,
  RequireFields,
} from "src/generated/graphql";
import { Context } from "../../types";

export const createProduct = async (
  prisma: Context["prisma"],
  data: RequireFields<MutationCreateProductArgs, "name" | "size_per_unit">
) => {
  const product = await prisma.product.create({
    data,
  });
  if (product) {
    return product;
  } else {
    throw new Error("Product not created!");
  }
};

export const updateProduct = async (
  prisma: Context["prisma"],
  data: RequireFields<
    MutationUpdateProductArgs,
    "name" | "size_per_unit" | "id"
  >
) => {
  const product = await prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      size_per_unit: data.size_per_unit,
    },
  });
  if (product) {
    return product;
  } else {
    throw new Error("Product not updated!");
  }
};

export const deleteProduct = async (prisma: Context["prisma"], id: string) => {
  await prisma.stockMovement.deleteMany({
    where: { product_id: id },
  });
  const product = await prisma.product.delete({
    where: { id: id },
  });
  if (product) {
    return product;
  } else {
    throw new Error("Product not deleted!");
  }
};

export const readAllProducts = async (prisma: Context["prisma"]) => {
  const products = await prisma.product.findMany();
  if (products.length > 0) {
    return products;
  } else {
    throw new Error("No products found!");
  }
};

export const readProductById = async (
  prisma: Context["prisma"],
  id: string
) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (product) {
    return product;
  } else {
    throw new Error("No product found!");
  }
};
