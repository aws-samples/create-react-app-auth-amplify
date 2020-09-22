import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export const signOut = createAsyncThunk("signOut/fetch", async () => {
  await Auth.signOut();
});

export const signIn = createAsyncThunk(
  "signIn/fetch",
  async ({ userName, password }) => {
    const user = await Auth.signIn(userName, password);

    console.log("current: ", user.data);
    return user.data;
  }
);

export const checkUserSession = createAsyncThunk(
  "checkUserSession/fetch",
  async () => {
    await sleep(4000);

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
    [signOut.fulfilled]: (state, action) => {
      state.isSignIn = false;
      state.loading = false;
    },
    [signOut.rejected]: (state, action) => {
      state.isSignIn = true;
      state.loading = false;
    },
    [signOut.pending]: (state, action) => {
      state.isSignIn = true;
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
