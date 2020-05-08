import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import Impress from './Impress/Impress';

Amplify.configure(aws_exports);

class App extends Component {


  render () {
    return (
          <div className="App">
            <Impress />
          </div>
    );
  }
}

export default App;
