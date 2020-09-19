import React from "react";
import SignIn from "./components/SignIn";
import { signIn } from "./slice";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const onSubmitSign = (event) => {
    event.preventDefault();
    dispatch(
      signIn({
        userName: event.target.userName.value,
        password: event.target.password.value,
      })
    );
  };

  return <SignIn onSubmitSign={onSubmitSign} />;
}
