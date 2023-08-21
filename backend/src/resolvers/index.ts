import { Resolvers } from "src/generated/graphql";
import { queryResolvers } from "./query";
import { mutationResolvers } from "./mutation";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};
