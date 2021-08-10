import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  embedDashboard() {
                var containerDiv = document.getElementById("dashboardContainer");
                var options = {
                    url: "http://example.com",
                    container: containerDiv,
                    parameters: {
                        country: 'United States'
                    },
                    scrolling: "no",
                    height: "700px",
                    width: "1000px"
                };
                dashboard = QuickSightEmbedding.embedDashboard(options);
                dashboard.on('error', onError);
                dashboard.on('load', onDashboardLoad);
            }
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to rela.
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
      <div id="dashboardContainer">
        
       </div>
      </div>
    );
  }
}

export default withAuthenticator(App);
