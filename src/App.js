import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import {UserModel} from './models';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    const createUser = async () => {
      const user = {
        user_name: window.prompt('Enter a user name')
      }      
      const newUser = await DataStore.save(new UserModel(user))
      console.log(newUser);
    }
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <div>
              Testing out how to add users to the UserModel
              </div>
            <div>
              <button onClick={createUser}>Add New User</button>
            </div>
          </p>          
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
