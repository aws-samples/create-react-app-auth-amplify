import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import api_config from '../api/aws-config';
import Impress from './Impress/Impress';

Amplify.configure({...aws_exports, ...api_config});

class App extends Component {
  render () {
    return (
          <div className="App">
            <Impress authState={this.props.authState} />
          </div>
    );
  }
}

export default App;
