import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import WorkFlowCards from "./components/WorkFlowCards";
const HomePage = () => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Header />
    </Grid>
    <Grid item>
      <WorkFlowCards />
    </Grid>
  </Grid>
);

export default HomePage;
