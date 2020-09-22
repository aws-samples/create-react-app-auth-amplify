import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import SignInPage from "./pages/sign-in";
import HomePage from "./pages/home";
import WorkflowCreatePage from "./pages/workflow-create";

import { useSelector } from "react-redux";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/login">
          <SignInPage />
        </PrivateRoute>
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/workflow/create">
          <WorkflowCreatePage />
        </PrivateRoute>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const isLogin = useSelector((state) => state.signIn.isSignIn);
  let { pathname } = useLocation();
  if (isLogin) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return pathname != "/login" ? (
            React.cloneElement(children, props)
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return pathname == "/login" ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }
}
