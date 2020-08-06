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
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import logo from "./assets/fridge_with_open_door_80px.png";

export class NavbarFixed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modalOpen: false,
      modalLoginOpen: false,
    };
  }

  // Open register modal
  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };
  // Open login modal
  handleModalLoginOpen = () => {
    this.setState((prevState) => {
      return {
        modalLoginOpen: !prevState.modalLoginOpen,
      };
    });
  };
  // Collapsable navbar when page is narrowed
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
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
                {/* {!localStorage.token && (
                  <MDBNavItem>
                    <a onClick={this.handleModalOpen} className="nav-link">
                      Register
                    </a>
                  </MDBNavItem>
                )} */}
                {!localStorage.token && (
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login or Register</MDBNavLink>
                    {/* <a onClick={this.handleModalLoginOpen} className="nav-link">
                      Login
                    </a> */}
                  </MDBNavItem>
                )}
                {localStorage.token && (
                  <MDBNavItem>
                    <a onClick={this.logout} className="nav-link">
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
        <RegisterModal
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
        <LoginModal
          modalLoginOpen={this.state.modalLoginOpen}
          handleModalLoginOpen={this.handleModalLoginOpen}
        />
      </div>
    );
  }
}

export default NavbarFixed;
