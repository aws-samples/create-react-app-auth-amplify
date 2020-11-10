import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { createBrowserHistory } from "history";
import aws_exports from './aws-exports';

import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

Amplify.configure(aws_exports);
const hist = createBrowserHistory();

class App extends Component {

  render () {
    return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/rtl" render={props => <RTLLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
    )
  }

}


export default withAuthenticator(App, true);
