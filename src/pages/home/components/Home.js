import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import WorkFlowCards from "./WorkFlowCards";
const Home = () => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Header />
    </Grid>
    <Grid item>
      <WorkFlowCards />
    </Grid>
  </Grid>
);

export default Home;
