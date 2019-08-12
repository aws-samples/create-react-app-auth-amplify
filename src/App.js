import React, { Component } from 'react';
import logo from './images/swaut.jpg';
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
            Welcome to Swaut Automation.
          </p>
          <a
            className="App-link"
            href="https://www.swaut.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swaut Automation
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
