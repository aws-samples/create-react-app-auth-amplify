import React from "react";
import SignIn from "./components/SignIn";

import { Auth } from "aws-amplify";

const signIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
    console.log("user: ", user);
  } catch (error) {
    console.log("error signing in", error);
  }
};
const onSubmitSign = (event) => {
  event.preventDefault();
  signIn(event.target.email.value, event.target.password.value);
};

export default function Index() {
  return <SignIn onSubmitSign={onSubmitSign} />;
}
