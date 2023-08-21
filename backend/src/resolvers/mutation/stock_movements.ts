import { MovementType, StockMovement } from "@prisma/client";
import { createStockMovement } from "src/database/operations/stock_movements";
import { readWarehouse } from "src/database/operations/warehouses";
import { MutationResolvers } from "src/generated/graphql";

const stockAmount = (
  stockAmount: StockMovement[],
  amount: number,
  movementType: MovementType
) => {
  let totalAmount = 0;
  stockAmount.forEach((stock) => {
    if (stock.movement_type === movementType) {
      totalAmount += stock.amount;
    }
  });
  totalAmount += amount;
  return totalAmount;
};

export const createStockMovementMutation: MutationResolvers["createStockMovement"] =
  async (_parent, _args, { prisma }) => {
    try {
      const warehouse = await readWarehouse(prisma, _args.warehouse_id);
      if (warehouse) {
        if (
          warehouse.size <
          stockAmount(
            warehouse.stock_movement,
            _args.amount,
            _args.movement_type
          )
        ) {
          throw new Error("Not enough space in the warehouse!");
        } else {
          return await createStockMovement(prisma, _args);
        }
      } else {
        throw new Error("Warehouse not found!");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
