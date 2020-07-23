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
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </>
    );
  }
}

export default withAuthenticator(App, true);
