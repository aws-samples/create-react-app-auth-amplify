import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify'
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);
class AWSLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  // This kicks off after you press login.
  componentDidMount() {
    // See if user is logged in
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    // This works. Alternatively, change below to use Redux. E.g., get the user from the promise, dispatch to Redux. Use this for protected routes. 
    // .then((user) => {
    //   const loggedUser = user;
    //   this.setState({
    //     user: loggedUser
    //   })
    //   console.log(this.state.user)
    // })
    .then(user => console.log(user))
    .catch(err => console.log(err));
    // If the promise resolves, redirect to homepage 
    this.props.history.push('/') 
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

// Disable the automatic fixed navbar greeting after login with "false"
export default withAuthenticator(AWSLogin, {includeGreetings: false});
