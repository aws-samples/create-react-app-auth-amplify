import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import TaskCards from "./components/TaskCards";

const HomePage = () => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Header />
    </Grid>
    <Grid item>
      <TaskCards />
    </Grid>
  </Grid>
);

export default HomePage;
