const AWS = require('aws-sdk')
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var plaid = require('plaid');
var moment = require('moment');

AWS.config.update({ region: process.env.TABLE_REGION });
const dynamodb = new AWS.DynamoDB.DocumentClient();

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

const client = new plaid.Client({
  clientID: 'client_id',
  secret: 'secret',
  env: plaid.environments.sandbox
});

app.get('/transactions', function(req, res) {
  var accessToken = 'token'
  var params = {
    TableName: 'tutorialdb-devp',
    Key: {
      id: 'userid'
    }
  };

  let startDate = moment()
    .subtract(30, "days")
    .format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");
  dynamodb.get(params, (err, data) => {
    if(err) {dbresponse = err}
    else {
      accessToken = data.Item.accessToken;
      client.getTransactions(accessToken, startDate, endDate, {
        count: 250,
        offset: 0
      }, 
      function(err, transactionsResponse){
        res.json({msg: transactionsResponse.transactions})
      });
    }
  });
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app