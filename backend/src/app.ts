import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers";
import prisma from "./database/prisma";
import initialDataBases from "./database/initialization";
import { join } from "path";
import { Context } from "./types";

const startApplication = async () => {
  // initialaize database
  initialDataBases();

  const app = express();
  const httpServer = http.createServer(app);

  // Set up Apollo Server
  const server = new ApolloServer<Context>({
    typeDefs: readFileSync(join(__dirname, "..", "schema.graphql"), "utf8"),
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res, prisma }),
    })
  );
  httpServer.listen({ port: 8998 });
  console.log(`🚀 Server ready at http://localhost:8998`);
};

startApplication();
