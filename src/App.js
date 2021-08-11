import React, { Component } from 'react';
import './App.css';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import appSyncConfig from "./aws-exports";
Amplify.configure(aws_exports);

var user = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      showSignIn: false,
      showSubmit: false
    }

    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    Auth.currentSession()
    .then((result) => {
      if (result !== null) {
        user = result;
        this.setState({
          loggedIn: true,
          showSignIn: false,
          showSubmit: false
        })
      }
      this.setState({
        loggedIn: false,
        showSignIn: false,
        showSubmit: false
      })
    })
    .catch((error) => {
      console.log("Not logged in");
      this.setState({
        loggedIn: false,
        showSignIn: false,
        showSubmit: false
      })
    })
  }

  handleLogin(user) {
    this.setState({
      loggedIn: true,
      showSignIn: false,
      showSubmit: false
    })
  }

  handleNavigation(nav) {
    if (nav == "home")
    {
      this.setState({
        showSignIn: false,
        showSubmit: false
      })
    }

    if (nav == "submit")
    {
      this.setState({
        showSignIn: false,
        showSubmit: true
      })
    }

    if (nav == "login")
    {
      this.setState({
        loggedIn: false,
        showSignIn: true,
        showSubmit: false
      })
    }

    if (nav == "logout")
    {
      Auth.signOut()
      .then((result) => {
        this.setState({
          loggedIn: false,
          showSignIn: false,
          showSubmit: false
        })
      })
    }
  }

  render() {
    if (this.state.showSignIn) {
      return (
        <div>
        <Navigation onNavigation={this.handleNavigation} loggedIn={this.state.loggedIn}/>
        <AmplifyAuthenticator>
          <AmplifySignIn></AmplifySignIn>
        </AmplifyAuthenticator>
        <Footer />
      </div>
      )
    }
    if (this.state.showSubmit) {
      return (
        <div>
        <Navigation onNavigation={this.handleNavigation} />
        <Submit />
        <Footer />
      </div>
      )
    }
    return(
    <div>
      <Navigation onNavigation={this.handleNavigation} loggedIn={this.state.loggedIn} />
      <Content />
      <Footer />
    </div>
    )
  }
}

class Content extends Component {
  render() {
    var submitting = false;
    if (submitting) {
      return (
        <Submit />
      )
    }
    return (
      <Games />
    )
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleHome = this.handleHome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleHome() {
    this.props.onNavigation("home");
  }

  handleSubmit() {
    this.props.onNavigation("submit");
  }

  handleLogin() {
    this.props.onNavigation("login");
  }

  handleLogout() {
    this.props.onNavigation("logout");
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="content">
      <div id="nav" className="flex-container center nav">
        <div id="title" className="title flex-container">
          <div>
            <img className="logo" src="logosmall.png" alt=""></img>
          </div>
          <div>
            <h1>Carrier Commander</h1>
          </div>
        </div>
        <div id="links" className="links flex-container">
          <a className="link current" onClick={this.handleHome}>Home</a>
          <a className="link" onClick={this.handleSubmit}>Submit</a>
          <a className="link" onClick={this.handleLogout}>Sign Out</a>
        </div>
      </div>
    </div>
      )
    }
    return (
      <div className="content">
      <div id="nav" className="flex-container center nav">
        <div id="title" className="title flex-container">
          <div>
            <img className="logo" src="logosmall.png" alt=""></img>
          </div>
          <div>
            <h1>Carrier Commander</h1>
          </div>
        </div>
        <div id="links" className="links flex-container">
          <a className="link current" onClick={this.handleHome}>Home</a>
          <a className="link" onClick={this.handleSubmit}>Submit</a>
          <a className="link" onClick={this.handleLogin}>Sign In</a>
        </div>
      </div>
    </div>
    )
  }
}

class GamesHeader extends Component {
  render () {
    return (
      <div className="left">
          <h1>Open Games</h1>
        </div>
    )
  }
}
class Games extends Component {
  render() {
    return (
        <div className="flex-container column">
          <GamesHeader />
          <div className="game game-header">
            <div className="game-title">
              <strong>Match Title</strong>
            </div>
            <div className="players">
              <strong>Players</strong>
            </div>
            <div className="code">
              <strong>Invite Code</strong>
            </div>
            <div className="password">
              <strong>Password</strong>
            </div>
            <div className="age">
              <strong>Age</strong>
            </div>
          </div>
          <div className="game">
            <div className="game-title">
            Sam's Game
            </div>
            <div className="players">
            16
            </div>
            <div className="code">
            rkqst4efa3tsft5omydqrizoblychhqb7iw6hqnm
            </div>
            <div className="password">
            password
            </div>
            <div className="age">
            20m
            </div>
            <div className="report">
            Report
            </div>
          </div>
          <div className="game">
          <div className="game-title">
          This is a longer game title
          </div>
          <div className="players">
          8
          </div>
          <div className="code">
          rkqst4efa3tsft5omydqrizoblychhqb7iw6hqnm
          </div>
          <div className="password">
          password
          </div>
          <div className="age">
          33m
          </div>
          <div className="report">
          Report
          </div>
          </div>
        </div>
    )
  }
}

class Submit extends Component {
  render() {
    return (
    <div className="submit">
        <form action="" class="left">
        <label for="title">Title</label> <br />
        <input type="text" name="title" id="title" className="game-input"></input>
        <br />
        <br />
        <label for="title">Invite Code</label> <br />
        <input type="text" name="title" id="title" className="game-input"></input>
        <br />
        <br />
        <label for="title">Password</label> <br />
        <input type="text" name="password" id="password" className="game-input"></input>
        <br />
        <br />
        <label for="title">Players</label> <br />
        <input type="number" max="16" min="2" value="2" name="title" id="title" className="game-input"></input>
        <br />
        <br />
        <div className="white">Games are deleted after 3 hours.</div>
        <br />
        <input type="submit" value="Submit Game"></input>
      </form>
    </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
  <div className="flex-container center nav">
    <div className="flex-container center">
      <div className="discord">
        Not Affiliated With Carrier Command 2
      </div>
    </div>
  </div>
</footer>
    )
  }
}

//export default withAuthenticator(App);
export default(App);
