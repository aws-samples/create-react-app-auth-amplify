import React, { Component } from 'react';
import { connect } from "react-redux";
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
    // See if user is logged in to Cognito using built-in Amplify functions
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    // The above resolves to a promise. Then either use local state or redux.

    // This works for a non-Redux solution that uses local store.
    // .then((user) => {
    //   const loggedUser = user;
    //   this.setState({
    //     user: loggedUser
    //   })
    //   console.log(this.state.user)
    // })

    // Redux version. Authorized user is saved as user. 
    .then(user => {
      this.props.authorizeUser(user)
      console.log(this.props.user) 
      // If user is already logged in, redirect to homepage.
      if (this.props.user) {
        this.props.history.push('/') 
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authorizeUser: function (user) {
      dispatch({ type: "AUTHORIZED_USER", payload: user });
    }
  };
}

// Disable the automatic fixed navbar greeting after login with "false"
export default withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(AWSLogin, {includeGreetings: false}));