import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// amplify config
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import * as aws_amplify_react from "aws-amplify-react";
import amplifyCustomUi from "aws-amplify-react-custom-ui";
Amplify.configure(awsconfig);
amplifyCustomUi.configure(aws_amplify_react);

ReactDOM.render(<App />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

