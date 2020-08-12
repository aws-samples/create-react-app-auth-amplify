import React, { Component } from 'react';
import { connect } from "react-redux";
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);
class AWSLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// Reroute to main page if you're already logged in
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/') 
    }
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


// Disable the automatic fixed navbar greeting after login with "false"
export default withAuthenticator(connect(mapStateToProps)(AWSLogin, {includeGreetings: false}));