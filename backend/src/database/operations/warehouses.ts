import { Context } from "src/types";
import { mapPrismaToGraphQL } from "./stock_movements";

export const readAllWarehouses = async (prisma: Context["prisma"]) => {
  const warehouses = await prisma.warehouse.findMany();
  if (warehouses.length > 0) {
    return warehouses;
  } else {
    throw new Error("No warehouses found!");
  }
};

export const readWarehouseById = async (
  prisma: Context["prisma"],
  id: string
) => {
  const warehouse = await prisma.warehouse.findUnique({
    where: { id: id },
    include: { stock_movement: true },
  });
  if (warehouse) {
    return {
      ...warehouse,
      stock_movement: warehouse.stock_movement.map((movement) => ({
        ...movement,
        movement_type: mapPrismaToGraphQL(movement.movement_type),
      })),
    };
  } else {
    throw new Error("Warehouse not found!");
  }
};

export const readWarehouse = async (prisma: Context["prisma"], id: string) => {
  const warehouse = await prisma.warehouse.findUnique({
    where: { id: id },
    include: { stock_movement: true },
  });
  if (warehouse) {
    return warehouse;
  } else {
    throw new Error("Warehouse not created!");
  }
};
