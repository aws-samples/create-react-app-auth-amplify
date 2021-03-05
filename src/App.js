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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> To make HealthFlex
                <html>
      <form>
  <label for="role">Role:</label><br>
  <input type="string" id="role" name="role" value=""><br>
  <label for="hospital">Hospital:</label><br>
  <input type="string" id="hospital" name="hospital" value=""><br><br>
  <input type="submit" value="Submit">
      </html>
</form> 
      
      
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
