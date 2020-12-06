import React, { Component } from "react";

import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import amplifyCustomUi from "aws-amplify-react-custom-ui";

class HelloWorld extends Component {
  render() {
    console.log(this.props);
    return <div> hello world </div>;
  }
}
export default class App extends Component {
  componentWillMount() {
    amplifyCustomUi.setSignIn(SignIn);
    // amplifyCustomUi.setSignUp(SignUp);
  }

  render() {
    const SecureHelloWrold = amplifyCustomUi.withAuthenticator(HelloWorld);
    const d = {
      hellp: "shhs",
      history: "hello"
    };
    return <SecureHelloWrold {...d} />;
  }
}