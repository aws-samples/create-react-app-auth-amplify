import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import WorkFlowCard from "./WorkFlowCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    margin: "20px 0px",
    position: "relative",
  },
}));
const WorkFlowCards = ({ workflows }) => {
  console.log("workflows: ", workflows);
  const classes = useStyles();

  return (
    <Grid container>
      {workflows.map(({ id, workFlowName }) => (
        <Grid xs={3} className={classes.taskContainer} item key={id}>
          <WorkFlowCard workFlowName={workFlowName} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkFlowCards;
