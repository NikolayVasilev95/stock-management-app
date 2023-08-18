import { Resolvers } from "src/generated/graphql";
import { queryResolvers } from "./query";

export const resolvers: Resolvers = {
  Query: queryResolvers,
};
