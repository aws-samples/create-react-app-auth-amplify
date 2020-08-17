import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNav,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
// import RegisterModal from "./RegisterModal";
// import LoginModal from "./LoginModal";
import logo from "./assets/fridge_with_open_door_80px.png";
// import { SignOut } from 'aws-amplify-react'; 
import { Hub, Auth } from 'aws-amplify';
// Navbar components with no route need withRouter to use history.
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./NavbarFixed.css"; 

export class NavbarFixed extends Component {
  constructor(props) {
    super(props);
    this.updateLoggedStatus = this.updateLoggedStatus.bind(this)
    this.state = {
      collapse: false,
      isWideEnough: false
      // isLogged: false
      // modalOpen: false, 
      // modalLoginOpen: false, 
    };
  }

componentDidMount() {
  this.updateLoggedStatus();
  // Hub is an Amplify state management solution like Redux
  // Run updateLoggedStatus function immediately
  Hub.listen('auth', this.updateLoggedStatus); 
}

componentWillUnmount() {
  Hub.remove('auth');
 }

 async updateLoggedStatus() {
   // Then run getCurrentUsername to see if someone is logged in or not
  const username = await this.getCurrentUsername()
  console.log(username)
  // let newLoggedStatus = false;
  // if (username) newLoggedStatus = true;
  // // If logged in, change state from false to newLoggedStatus
  // this.setState({ isLogged: newLoggedStatus });
}

getCurrentUsername() {
  return new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user)
        this.props.authUser(user)
        if (user.username) {
          // console.log(user.username) 
          resolve(user.username)
        } else {
          console.log(user)
          resolve(null)
        }
      })
      .catch(err => {
        console.log(err)
        resolve(null)
      })
  })
}

async onSignOutClick() {
  // Redirect after log out. Need to fix the React update unmounted error.
  // Clear Redux credentials
  this.props.logout()
  // this.props.history.push('/login') 
  // Sign out of Cognito on this device
  await Auth.signOut()
  .then(data => console.log(data)) 
  .catch(err => console.log(err));
 }

  // Cognito sign off from line 84
  signOut() {
      try {
        Auth.signOut();
      } catch (error) {
        console.log('error signing out: ', error);
      }
  }
  // Collapsable navbar when page is narrowed
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  
  render() {
    return (
      <div className="fixedNav">
        <MDBNavbar color="green" dark expand="md" fixed="top">
          <MDBNav>
            <MDBNavbarBrand className="lobster" href="/">
              FridgeBuddy
              <img alt="" src={logo} className="d-inline-block" />{" "}
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                {this.props.user && (
                  <MDBNavItem>
                    <MDBNavLink to="/search">Add Item</MDBNavLink>
                  </MDBNavItem>
                )}
                {this.props.user && (
                  <MDBNavItem>
                    <MDBNavLink to="/MyFridge">Your Fridge</MDBNavLink>
                  </MDBNavItem>
                )}
                {!this.props.user && (
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login or Register</MDBNavLink>
                  </MDBNavItem>
                )}
                {this.props.user && (
                  <MDBNavItem>
                    <a onClick={this.onSignOutClick.bind(this)} className="nav-link">
                      Log Out
                    </a>
                  </MDBNavItem>
                )}
                <MDBNavItem>
                  <MDBNavLink to="/about">About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/test">test</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNav>
        </MDBNavbar>
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
    authUser: function (user) {
      dispatch({ type: "AUTHORIZED_USER", payload: user });
    },
    logout: function() {
      dispatch({ type: "LOGOUT"});
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarFixed));