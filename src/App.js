import React, { Component, useEffect } from "react";
import Routes from "./Routes";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./pages/sign-in/slice";
import Header from "./components/Header";

Amplify.configure(aws_exports);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Header /> <Routes />
    </>
  );
};

export default App;
