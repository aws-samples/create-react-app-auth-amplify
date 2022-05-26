import React, { Component } from 'react';
import { Features2x3 } from "./ui-components";
// import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authenticator>
          {({ signOut, user }) => (
            <div className="App">
              <p>
                Hey {user.username}, welcome to my channel, with auth!
              </p>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
        <Features2x3 />
      </div>
    );
  }
}

// export default withAuthenticator(App);
