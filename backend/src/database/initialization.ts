import prisma from "./prisma";

export default async () => {
  // drop all records in the database
  await prisma.stockMovement.deleteMany({});
  await prisma.warehouse.deleteMany({});
  await prisma.product.deleteMany({});

  // create a warehouse
  const warehouse = await prisma.warehouse.create({
    data: {
      name: "Warehouse 1",
      size: 100,
      is_hazardous: false,
    },
  });
  // create a product
  const product = await prisma.product.create({
    data: {
      name: "Product 1",
      size_per_unit: 100,
    },
  });
  // create a stock movement
  const stockMovement = await prisma.stockMovement.create({
    data: {
      warehouse_id: warehouse.id,
      product_id: product.id,
      amount: 100,
      movement_date: new Date(),
      movement_type: "EXPORT",
    },
  });

  console.log("warehouse", warehouse);
  console.log("product", product);
  console.log("stockMovement", stockMovement);
};
