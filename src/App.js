import React, { Component } from 'react';
import logo from './Providers.jpg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import ScheduleSelector from 'react-schedule-selector'

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src=./Providers.jpg />  className="App-logo" alt="logo" />
          <p>
            Welcome to HealthFlex.  Empowering providers, creating flexibility for employers.  A more efficient Healthcare staffing solution.
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

class App extends React.Component {
  state = { schedule = [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        hourlyChunks={2}
        onChange={this.handleChange}
      />
    )
  }
}

export default withAuthenticator(App, true);
