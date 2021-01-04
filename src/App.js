import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            // eslint-disable-next-line
            href="https://www.modernnetsec.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn anything....
          </a>
        </header>
      </div>
    );
  }
}
// eslint-disable-next-line
export default withAuthenticator(App, true);
