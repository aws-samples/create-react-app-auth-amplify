import React, { Component } from 'react';
import { connect } from "react-redux";
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { withRouter } from 'react-router-dom';

Amplify.configure(aws_exports);
class AWSLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Eventually refactor to use latest Amplify react component
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
    user: state.fridge.user
  };
}

// Disable the automatic fixed navbar greeting after login with "false"
export default withAuthenticator(withRouter(connect(mapStateToProps)(AWSLogin, {includeGreetings: false})));

// // Alternative way with latest Amplify. Cannot customize login component with the "withAuthenticator" wrapping, and would need to refactor entire navbar component so that login state is tracked here
// import React, { Component } from 'react';
// // import './App.css'; 
// import Amplify from 'aws-amplify';
// import { AmplifyAuthenticator, withAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
// import awsconfig from '../aws-exports';
// import { withRouter } from 'react-router-dom';
// import { connect } from "react-redux";

// Amplify.configure(awsconfig);

// class AWSLogin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   // Reroute to main page if you're already logged in
//   // componentDidMount() {
//   //   if (this.props.user) {
//   //     this.props.history.push('/') 
//   //   }
//   // }
 
//   async updateLoggedStatus() {
//     // Then run getCurrentUsername to see if someone is logged in or not
//    const username = await this.getCurrentUsername()
//    console.log(username)
//    // let newLoggedStatus = false;
//    // if (username) newLoggedStatus = true;
//    // // If logged in, change state from false to newLoggedStatus
//    // this.setState({ isLogged: newLoggedStatus });
//  }

//   render() {
//     const handleAuthStateChange = () => {
      
//       if (this.props.user) {
//         this.props.history.push('/') 
//       }
//     }
//     return (
//       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//         <AmplifyAuthenticator>
//           <AmplifySignIn
//             handleAuthStateChange={handleAuthStateChange}
//           />
//             <AmplifySignUp
//               slot="sign-up"
//               usernameAlias="username"
//               formFields={[
//                 { type: "username" },
//                 { type: "password" },
//                 { type: "email" },
//               ]}
//             />
//         </AmplifyAuthenticator>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     authUser: function (user) {
//       dispatch({ type: "AUTHORIZED_USER", payload: user });
//     },
//     logout: function() {
//       dispatch({ type: "LOGOUT"});
//     }
//   };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AWSLogin, {includeGreetings: false}));