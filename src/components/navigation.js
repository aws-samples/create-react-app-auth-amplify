import React from 'react'

import {Navbar, Nav, Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import {isMobile} from 'react-device-detect';

class Navigation extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.mobile = props.mobile;
    // }

    render () {
      return (
        <Container>
        <div>
          <Navbar bg="light" expand="lg" defaultExpanded={isMobile}>
            <Navbar.Brand href="/">Major Tournament Pick Six</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/tournaments">Tournaments</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
                <Nav.Link href="/players/showall=true">Players</Nav.Link>
                <Nav.Link href="/overall">Overall</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Outlet/>
          </div>
        </Container>
      )
    }

  };  

  export default Navigation

