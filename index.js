import express from "express";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "graphql-tools";
import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

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

app.listen(8080);
