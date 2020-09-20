import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

export const signIn = createAsyncThunk(
  "signIn/fetch",
  async ({ userName, password }) => {
    console.log("password: ", password);
    console.log("username: ", userName);
    const user = await Auth.signIn(userName, password);
    const current = await Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
    console.log("current: ", current);
    return user.data;
  }
);

export const checkUserSession = createAsyncThunk(
  "checkUserSession/fetch",
  async () => {
    const response = await Auth.currentAuthenticatedUser();
    return response.username;
  }
);
export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    isSignIn: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.isSignIn = true;
      state.loading = false;
    },
    [signIn.rejected]: (state, action) => {
      state.isSignIn = false;
      state.loading = false;
    },
    [signIn.pending]: (state, action) => {
      state.isSignIn = false;
      state.loading = true;
    },
    [checkUserSession.pending]: (state, action) => {
      state.isSignIn = false;
      state.loading = true;
    },
    [checkUserSession.fulfilled]: (state, action) => {
      state.isSignIn = true;
      state.loading = false;
    },
    [checkUserSession.rejected]: (state, action) => {
      state.isSignIn = false;
      state.loading = false;
    },
  },
});

export default signInSlice.reducer;