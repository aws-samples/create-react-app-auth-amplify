import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// type Task = { id: number, title: string, description: string, status: string };
const workflowAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (workflow) => workflow.id,
  // Keep the "all IDs" array sorted based on book titles
});

const workflowSlice = createSlice({
  name: "workflow",
  initialState: workflowAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    workflowAdded: workflowAdapter.addOne,
    workflowUpdated: workflowAdapter.updateOne,
    workflowRemove: workflowAdapter.removeOne,
  },
});

export const workflowSelectors = workflowAdapter.getSelectors(
  (state) => state.workflow
);

export const {
  workflowAdded,
  workflowUpdated,
  workflowRemove,
} = workflowSlice.actions;

export default workflowSlice.reducer;
