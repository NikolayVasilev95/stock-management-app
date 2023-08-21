import { $Enums } from "@prisma/client";
import {
  MovementType,
  MutationCreateStockMovementArgs,
  RequireFields,
} from "src/generated/graphql";
import { Context } from "src/types";

export const createStockMovement = async (
  prisma: Context["prisma"],
  data: RequireFields<
    MutationCreateStockMovementArgs,
    "amount" | "movement_date" | "movement_type" | "product_id" | "warehouse_id"
  >
) => {
  const stockMovement = await prisma.stockMovement.create({
    data,
  });
  if (stockMovement) {
    return {
      ...stockMovement,
      movement_type: mapPrismaToGraphQL(stockMovement.movement_type),
    };
  } else {
    throw new Error("StockMovement not created!");
  }
};

export function mapPrismaToGraphQL(
  prismaType: $Enums.MovementType
): MovementType {
  switch (prismaType) {
    case "INPORT":
      return MovementType.Inport;
    case "EXPORT":
      return MovementType.Export;
    default:
      return MovementType.Export;
  }
}
