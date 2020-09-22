import React, { Component, useEffect } from "react";
import Routes from "./Routes";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession, signOut } from "./pages/sign-in/slice";
import Header from "./components/Header";
import BlockingLoader from "./components/BlockingLoader";

Amplify.configure(aws_exports);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.signIn.loading && !state.signIn.isSignIn
  );
  const isSignIn = useSelector((state) => state.signIn.isSignIn);
  const handleSignOut = () => {
    dispatch(signOut());
  };
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Header handleSignOut={handleSignOut} isSignIn={isSignIn} />
      <BlockingLoader isLoading={isLoading}>
        <Routes />
      </BlockingLoader>
    </>
  );
};

export default App;
