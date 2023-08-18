import { BaseContext } from "@apollo/server";
import prisma from "./database/prisma";

export interface Context extends BaseContext {
  prisma: typeof prisma;
}
