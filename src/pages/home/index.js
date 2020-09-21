import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import WorkFlowCards from "./components/WorkFlowCards";
import {
  workflowSelectors,
  workflowRemove,
  getVisibleWorkflows,
  isAllCompleted,
  workflowUpdateSearchText,
} from "./slice";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const workflows = useSelector((state) => getVisibleWorkflows(state));
  const completedWorkflows = useSelector((state) => isAllCompleted(state));

  console.log("completedWorkflows: ", completedWorkflows);
  const handleDeleteWorkflow = (id) => {
    dispatch(workflowRemove(id));
  };
  const handleSearchText = ({ target }) => {
    dispatch(workflowUpdateSearchText(target.value));
  };
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header handleSearchText={handleSearchText} />
      </Grid>
      <Grid item>
        <WorkFlowCards
          handleDeleteWorkflow={handleDeleteWorkflow}
          workflows={workflows}
          completedWorkflows={completedWorkflows}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
