import { object, string, number } from "yup";

export const productSchema = object({
  name: string().required(),
  size_per_unit: number().required().positive().integer(),
});
