import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import WorkFlowCard from "./WorkFlowCard";
import { makeStyles } from "@material-ui/core";
import { map, get } from "lodash";
import { useDispatch } from "react-redux";
import { workflowUpdated } from "../slice";

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    margin: "20px 0px",
    position: "relative",
  },
}));
const WorkFlowCards = ({
  workflows,
  handleDeleteWorkflow,
  completedWorkflows,
}) => {
  const dispatch = useDispatch();

  const updateWorkFlowStatus = (id, status) => {
    dispatch(workflowUpdated({ id, changes: { status } }));
  };
  console.log("workflows: ", workflows);
  const classes = useStyles();

  return (
    <Grid container>
      {map(workflows, ({ id, workFlowName, status }) => (
        <Grid xs={3} className={classes.taskContainer} item key={id}>
          <WorkFlowCard
            handleDeleteWorkflow={() => handleDeleteWorkflow(id)}
            workFlowName={workFlowName}
            isAllCompleted={get(completedWorkflows, `[${id}].isAllCompleted`)}
            updateWorkFlowStatus={(status) => updateWorkFlowStatus(id, status)}
            status={status}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkFlowCards;
