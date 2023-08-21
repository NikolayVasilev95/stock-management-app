import { BaseContext } from "@apollo/server";
import prisma from "./database/prisma";

export interface Context extends BaseContext {
  prisma: typeof prisma;
}

type Identity<T> = { [P in keyof T]: T[P] };
export type Replace<T, K extends keyof T, TReplace> = Identity<
  Pick<T, Exclude<keyof T, K>> & {
    [P in K]: TReplace;
  }
>;
