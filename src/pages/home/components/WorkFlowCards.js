import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import WorkFlowCard from "./WorkFlowCard";
const WorkFlowCards = () => (
  <Grid container direction="row" spacing={1}>
    {[1, 2, 3].map((item) => (
      <Grid item>
        <WorkFlowCard />
      </Grid>
    ))}
  </Grid>
);

export default WorkFlowCards;
