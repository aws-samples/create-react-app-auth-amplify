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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "2rem",
    textAlign: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const workflows = useSelector((state) => getVisibleWorkflows(state));
  const completedWorkflows = useSelector((state) => isAllCompleted(state));

  const handleDeleteWorkflow = (id) => {
    dispatch(workflowRemove(id));
  };
  const handleSearchText = ({ target }) => {
    dispatch(workflowUpdateSearchText(target.value));
  };
  // if (workflows.length == 0) {
  //   return (

  //   );
  // }
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header handleSearchText={handleSearchText} />
      </Grid>
      <Grid item>
        {workflows.length == 0 ? (
          <div className={classes.root}>No Workflows </div>
        ) : (
          <WorkFlowCards
            handleDeleteWorkflow={handleDeleteWorkflow}
            workflows={workflows}
            completedWorkflows={completedWorkflows}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;
