import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import TaskCard from "./TaskCard";
import { map } from "lodash";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    margin: "20px 0px",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    fontSize: "5.5rem",
    top: 72,
  },
}));

const TaskCards = ({ allTasks, totalTasksAdded }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {map(allTasks, (task, index) => (
        <Grid xs={3} className={classes.taskContainer} item key={task.id}>
          <TaskCard />
          {allTasks.length == index + 1 ? (
            ""
          ) : (
            <ArrowForwardIcon className={classes.arrow} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskCards;
