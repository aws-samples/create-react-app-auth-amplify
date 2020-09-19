import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import signInReducer from "./pages/sign-in/slice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
