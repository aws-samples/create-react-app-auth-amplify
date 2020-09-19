import React, { Component } from "react";
import logo from "./logo.svg";
import Routes from "./Routes";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
