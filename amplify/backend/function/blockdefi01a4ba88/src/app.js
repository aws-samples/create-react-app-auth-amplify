var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var plaid = require("plaid")

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

// ENTER IN YOUR OWN CLIENT_ID AND SECRET KEYS !!!!
const client = new plaid.Client({
  clientID: '5e24dc0321bd680011c486b8',
  secret: 'ae052c2e9c73c54ced4da3ca029feb',
  env: plaid.environments.development
});

// NOTE: this api path must match the path you name it in the Amplify CLI
app.post('/plaidLinkToken', async function(request, res, next) {
  // Grab the client_user_id by searching for the current user in your database
  
  // For this tutorial, we will use a hardcoded "unique" username.
  // In practice, use a database to store names of all users and retrieve them
  const clientUserId = 'user1';

  // Create the link_token with all of your configurations
  client.createLinkToken({
    user: {
      client_user_id: clientUserId,
    },
    client_name: 'My App',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
  }, function(error, linkTokenResponse) {
    // Pass the result to your client-side app to initialize Link
    res.json({ link_token: linkTokenResponse.link_token });
  });
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app