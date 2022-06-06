import React, {useState} from 'react'

import {Navbar, Nav, Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import { isMobile } from 'react-device-detect';

class Navigation extends React.Component {
    // constructor(props) {
    //   super(props);
    //   const [expanded, setExpanded] = useState({isMobile});
    // }
    
    /* defaultExpanded={isMobile} */

    state = {
      expanded : isMobile,
      isLoaded : false
    }

    render () {

      console.log('render', this.state.isLoaded );
      return (
        <NavigationBar/>
      )

    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate', this.state.isLoaded);  
      return !this.state.isLoaded;
    }

    componentDidMount() {
      console.log('componentDidMount', this.state.isLoaded );
      this.setState({ isLoaded : true });
    }

  };  

  function NavigationBar(props) {

    const [expanded, setExpanded] = useState(isMobile);

    console.log('NavigationBar', expanded );

    return (
      <Container>
      <div>
        <Navbar bg="light" expand="lg" expanded={expanded}> 
          <Navbar.Brand href="/" onClick={() => setExpanded(true)}>Major Tournament Pick Six</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tournaments" onClick={() => setExpanded(false)}>Tournaments</Nav.Link>
              <Nav.Link href="/teams" onClick={() => setExpanded(false)}>Teams</Nav.Link>
              <Nav.Link href="/players/showall=true" onClick={() => setExpanded(false)}>Players</Nav.Link>
              <Nav.Link href="/overall" onClick={() => setExpanded(false)}>Overall</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Outlet/>
        </div>
      </Container>
    )

  }

  export default Navigation

