import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src=https://modernnetsec.io/wp-content/uploads/2020/03/modern-netsec-clear.png className="App-logo" alt="logo" />
          <p>
            Edit <code>src/https://modernnetsec.io/wp-content/uploads/2020/03/modern-netsec-clear.pngApp.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.modernnetec.io
            target="_blank"
            rel="noopener noreferrer"
          >
            Threat Intel 
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
