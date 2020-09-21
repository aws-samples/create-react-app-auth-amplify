import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import WorkFlowCards from "./components/WorkFlowCards";
import {
  workflowSelectors,
  workflowRemove,
  getVisibleWorkflows,
} from "./slice";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const workflows = useSelector((state) => getVisibleWorkflows(state));
  const handleDeleteWorkflow = (id) => {
    dispatch(workflowRemove(id));
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <WorkFlowCards
          handleDeleteWorkflow={handleDeleteWorkflow}
          workflows={workflows}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
