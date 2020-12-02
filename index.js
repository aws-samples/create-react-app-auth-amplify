import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const graphlHTTP = require('express-graphql');
const schema = require('./amplify/backend/api/neighapi/schema/schema').default;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@cluster0.nzdh9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 4300;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Neigh API v1"
  });
});
app.use(
  "/graphql",
  graphlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});