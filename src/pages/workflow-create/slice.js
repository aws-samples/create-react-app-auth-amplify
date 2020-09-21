import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// type Task = { id: number, title: string, description: string, status: string };
const taskAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (task) => task.id,
  // Keep the "all IDs" array sorted based on book titles
});
const taskInitialState = {
  ids: [1],
  entities: {
    1: {
      id: 1,
      title: "",
      description: "",
      status: "pending",
    },
  },
};
const taskSlice = createSlice({
  name: "task",
  initialState: taskInitialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    taskAdded: taskAdapter.addOne,
    taskUpdated: taskAdapter.updateOne,
    taskRemove: taskAdapter.removeOne,
    taskRemoveAll: (state, action) => {
      taskAdapter.setAll(state, taskInitialState);
    },
  },
});

export const taskSelectors = taskAdapter.getSelectors((state) => state.task);

export const {
  taskAdded,
  taskUpdated,
  taskRemove,
  taskRemoveAll,
} = taskSlice.actions;

export default taskSlice.reducer;
