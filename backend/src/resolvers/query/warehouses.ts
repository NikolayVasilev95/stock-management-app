import { $Enums } from "@prisma/client";
import {
  readAllWarehouses,
  readWarehouseById,
} from "src/database/operations/warehouses";
import { MovementType, QueryResolvers } from "src/generated/graphql";

export const warehousesQuery: QueryResolvers["warehouses"] = async (
  _parent,
  _args,
  { prisma }
) => {
  try {
    return await readAllWarehouses(prisma);
  } catch (error) {
    throw new Error(error);
  }
};

export const warehouseByIdQuery: QueryResolvers["warehouseById"] = async (
  _parent,
  { id },
  { prisma }
) => {
  try {
    return await readWarehouseById(prisma, id);
  } catch (error) {
    throw new Error(error);
  }
};
