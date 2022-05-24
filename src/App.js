import React, { Component } from 'react';
import { Features2x3 } from "./ui-components";
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <Features2x3 />
      </div>
    );
  }
}





export default withAuthenticator(App);
