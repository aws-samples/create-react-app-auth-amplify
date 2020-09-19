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

import { useSelector } from "react-redux";

export default function Routes() {
  const isLogin = useSelector((state) => state.signIn.isSignIn);

  console.log("isLogin: ", isLogin);
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/login">
          <SignInPage />
        </PrivateRoute>
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        <PrivateRoute path="/home">
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
  if (isLogin === null) {
    return <div>loading</div>;
  }
  if (isLogin) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return pathname != "/login" ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
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
