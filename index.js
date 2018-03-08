import express from "express";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "graphql-tools";
import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import models from "./models";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

const graphqlEndpoint = "/graphql";

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use(
  "/graphiql",
  graphiqlExpress({ endpointURL: graphqlEndpoint })
);

models.sequelize.sync().then(x => {
  app.listen(8080);
});
