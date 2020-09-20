import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import WorkFlowCards from "./components/WorkFlowCards";
import { workflowSelectors } from "./slice";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const workflows = useSelector(workflowSelectors.selectAll);

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <WorkFlowCards workflows={workflows} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
