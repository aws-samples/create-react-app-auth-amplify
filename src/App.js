import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

// Amplify
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <>
        <VideoPlayer/> 
      </>
    );
  }
}

export default withAuthenticator(App, true);
