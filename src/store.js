import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import signInReducer from "./pages/sign-in/slice";
import taskReducer from "./pages/workflow-create/slice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
    task: taskReducer,
  },
});
