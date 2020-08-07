import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

class AWSLogin extends Component {

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

// Disable the automatic fixed navbar greeting after login with "false"
export default withAuthenticator(AWSLogin, {includeGreetings: false});
