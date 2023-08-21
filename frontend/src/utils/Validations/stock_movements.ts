import { object, string, number, date, mixed } from "yup";
import { MovementType } from "../../graphql/generated/schema";

export const stockMovementSchema = object({
  amount: number().required().positive().integer(),
  movementDate: date().required(),
  movementType: mixed<MovementType>()
    .oneOf(Object.values(MovementType))
    .required("Please select a movement type"),
  productId: string().required("Please select a product"),
  warehouseId: string().required(),
});
