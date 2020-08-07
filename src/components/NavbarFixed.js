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


export class NavbarFixed extends Component {
  constructor(props) {
    super(props);
    this.updateLoggedStatus = this.updateLoggedStatus.bind(this)
    this.state = {
      collapse: false,
      isWideEnough: false,
      isLogged: false
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
  let newLoggedStatus = false;
  if (username) newLoggedStatus = true;
  // If logged in, change state from false to newLoggedStatus
  this.setState({ isLogged: newLoggedStatus });
}

getCurrentUsername() {
  return new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        if (user.username) {
          console.log(user.username)
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
  // need to redirect after log out. Not working
  // this.props.history.push('/') 
    await Auth.signOut()
    .then(data => console.log(data)) 
    .catch(err => console.log(err));
 }

  // Cognito sign off
  // signOut() {
  //   // console.log(localStorage)
  //   console.log(localStorage['amplify-authenticator-authState'])
  //   // let authState = localStorage['amplify-authenticator-authState'];
  //   // console.log(authState)
  //   // if (authState === 'signedIn') {
  //   //   console.log('logged in')
  //   // } else {
  //   //   console.log('not logged in')
  //   // }
  //   // console.log(localStorage['amplify-authenticator-authState']) 
  //     try {
  //         Auth.signOut();
  //     } catch (error) {
  //         console.log('error signing out: ', error);
  //     }
  // }

  // Stretch plan: convert AWS login/register prompt into react hook modal
  // Open register modal
  // handleModalOpen = () => {
  //   this.setState((prevState) => {
  //     return {
  //       modalOpen: !prevState.modalOpen,
  //     };
  //   });
  // };

  // Open login modal
  // handleModalLoginOpen = () => {
  //   this.setState((prevState) => {
  //     return {
  //       modalLoginOpen: !prevState.modalLoginOpen,
  //     };
  //   });
  // };
  // Old logout function
  // logout() {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }

  // Collapsable navbar when page is narrowed
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  
  render() {
    return (
      <div>
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
                {localStorage.token && (
                  <MDBNavItem>
                    <MDBNavLink to="/SearchForm">Add Item</MDBNavLink>
                  </MDBNavItem>
                )}
                {localStorage.token && (
                  <MDBNavItem>
                    <MDBNavLink to="/MyFridge">Your Fridge</MDBNavLink>
                  </MDBNavItem>
                )}
                {!this.state.isLogged && (
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login or Register</MDBNavLink>
                  </MDBNavItem>
                )}
                {this.state.isLogged && (
                  <MDBNavItem>
                    <a onClick={this.onSignOutClick} className="nav-link">
                      Log Out
                    </a>
                  </MDBNavItem>
                )}
                <MDBNavItem>
                  <MDBNavLink to="/about">About Us</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNav>
        </MDBNavbar>
        {/* <RegisterModal
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
        <LoginModal
          modalLoginOpen={this.state.modalLoginOpen}
          handleModalLoginOpen={this.handleModalLoginOpen}
        /> */}
      </div>
    );
  }
}

export default NavbarFixed;
