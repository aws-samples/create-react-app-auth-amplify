import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { map, filter, keyBy, includes } from "lodash";

// type Task = { id: number, title: string, description: string, status: string };
const workflowAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (workflow) => workflow.id,
  // Keep the "all IDs" array sorted based on book titles
});

const workflowSlice = createSlice({
  name: "workflow",
  initialState: workflowAdapter.getInitialState({
    filters: {
      status: "all",
      searchText: "",
    },
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    workflowAdded: workflowAdapter.addOne,
    workflowUpdated: workflowAdapter.updateOne,
    workflowRemove: workflowAdapter.removeOne,
    workflowUpdateFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    workflowUpdateSearchText: (state, action) => {
      state.filters.searchText = action.payload;
    },
    resetFilters: (state, action) => {
      state.filters = {
        status: "all",
        searchText: "",
      };
    },
  },
});

export const workflowSelectors = workflowAdapter.getSelectors(
  (state) => state.workflow
);
const getFilter = (state) => state.workflow.filters.status;
const getSearchText = (state) => state.workflow.filters.searchText;

export const getVisibleWorkflows = createSelector(
  [getFilter, getSearchText, workflowSelectors.selectAll],
  (visibilityFilter, searchText, workflows) => {
    let filterWorkflows = null;

    switch (visibilityFilter) {
      case "all":
        filterWorkflows = workflows;
        break;
      case "completed":
        filterWorkflows = workflows.filter((t) => t.status == "completed");
        break;
      case "pending":
        filterWorkflows = workflows.filter((t) => t.status == "pending");
        break;
    }
    console.log("filterWorkflows: ", filterWorkflows);
    console.log("searchText: ", searchText);
    return searchText
      ? filter(filterWorkflows, ({ workFlowName }) =>
          includes(workFlowName, searchText)
        )
      : filterWorkflows;
  }
);
export const isAllCompleted = createSelector(
  [workflowSelectors.selectAll],
  (workflows) =>
    keyBy(
      map(workflows, ({ id, tasks }) => {
        return {
          id,
          isAllCompleted:
            filter(tasks, ["status", "completed"]).length === tasks.length,
        };
      }),
      "id"
    )
);

export const {
  workflowAdded,
  workflowUpdated,
  workflowRemove,
  workflowUpdateFilter,
  workflowUpdateSearchText,
  resetFilters,
} = workflowSlice.actions;

export default workflowSlice.reducer;
