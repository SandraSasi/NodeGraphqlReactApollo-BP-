import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./server/Graphql/Schema";
import resolvers from "./server/Graphql/Resolvers";
import models, { sequelize } from "./server/Graphql/models";

var port = process.env.PORT || 5000;
const server = new ApolloServer({
  playground: true,
  typeDefs: schema,
  resolvers,
  context: { models }
});
var cors = require("cors");
const app = express();

app.use(cors());
server.applyMiddleware({ app, path: "/graphql" });

models.sequelize.sync().then(async () => {
  app.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
});
