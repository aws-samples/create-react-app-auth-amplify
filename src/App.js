import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="content">  
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Hello!</h1><br/>
                        <p>Welcome to the Tech Portal!  The Tech Portal is a tool designed and developed by the Help Desk to keep you up to date on important information and connected with your team mates.</p>
                        <h2>Profile</h2>
                        <p>First things first: check out your profile by clicking your name in the upper right-hand corner, and selecting Profile.  Make sure your info is up to date!</p>
                        <h2>Tools</h2>
                        <p>Visit the Tools {'>'} Passwords page to see all the Salesforce and Gmail passwords.  They'll always be up to date!</p>
                        <h2>Team</h2>
                        <p>Meet the team on the Community {'>'} Team page.  Scroll through and click their cards to learn more about your team members</p>
                        <p>Show your appreciation by using the Thank and <a href='https://en.wikipedia.org/wiki/Gilding' target="_blank">Gild</a> buttons.  You can thank a person once every 10 minutes, so go crazy.  However, you can only give out 5 gold per month, so gild with care.</p>
                        <h2>Discord</h2>
                        <p>You can open the Discord team chat by clicking the purple bar in the bottom right-hand corner.  You'll need to log in, but then you can chat with the team right in the Portal!</p>
                        <h2>More</h2>
                        <p>There's lots of links that don't work quite yet - more features are coming soon!</p>
                    </div>
                </div>
            </div>
        </div>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
