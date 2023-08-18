import { Context } from "../../types";

export const ReadAllProducts = async (prisma: Context["prisma"]) => {
  const products = await prisma.product.findMany();
  if (products.length > 0) {
    return products;
  } else {
    throw new Error("No products found!");
  }
};

export const ReadProductById = async (
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
