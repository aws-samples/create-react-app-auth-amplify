const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./amplify/backend/api/neighapi/schema/schema');
const graphQlResolvers = require('./amplify/backend/api/neighapi/resolvers/resolvers');

const app = express();
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0.nzdh9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to MongoDB-Atlas");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });