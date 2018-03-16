import express from "express";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "graphql-tools";
import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";
import path from "path";
import {
  fileLoader,
  mergeTypes,
  mergeResolvers
} from "merge-graphql-schemas";
import cors from "cors";

import models from "./models";

const SECRET = "123abc456";
const SECRET2 = "123abc456eeeehyhyko";

const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, "./schema"))
);

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
app.use(cors("*"));

const graphqlEndpoint = "/graphql";

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
      user: {
        id: 1
      },
      SECRET,
      SECRET2
    }
  })
);

app.use(
  "/graphiql",
  graphiqlExpress({ endpointURL: graphqlEndpoint })
);

models.sequelize.sync({}).then(() => {
  app.listen(8080);
});
