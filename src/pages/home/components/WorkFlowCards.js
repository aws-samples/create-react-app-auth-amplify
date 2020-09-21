import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import WorkFlowCard from "./WorkFlowCard";
import { makeStyles } from "@material-ui/core";
import { map } from "lodash";

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    margin: "20px 0px",
    position: "relative",
  },
}));
const WorkFlowCards = ({ workflows, handleDeleteWorkflow }) => {
  console.log("workflows: ", workflows);
  const classes = useStyles();

  return (
    <Grid container>
      {map(workflows, ({ id, workFlowName }) => (
        <Grid xs={3} className={classes.taskContainer} item key={id}>
          <WorkFlowCard
            handleDeleteWorkflow={() => handleDeleteWorkflow(id)}
            workFlowName={workFlowName}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkFlowCards;
