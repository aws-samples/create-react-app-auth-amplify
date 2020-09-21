import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import TaskCard from "./TaskCard";
import { map } from "lodash";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { taskUpdated } from "../slice";
import { get } from "lodash";

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

  const dispatch = useDispatch();

  const updateTaskTitle = (id, title) => {
    dispatch(taskUpdated({ id, changes: { title } }));
  };
  const updateTaskDescription = (id, description) => {
    dispatch(taskUpdated({ id, changes: { description } }));
  };
  const updateTaskStatus = (id, status) => {
    dispatch(taskUpdated({ id, changes: { status } }));
  };
  let truthy = [];
  return (
    <Grid container>
      {map(allTasks, ({ id, status }, index) => {
        if (status === "completed") {
          truthy.push(true);
        } else {
          truthy.push(false);
        }
        let i = -1;
        let canBeCompleted = true;
        while (++i < index) {
          canBeCompleted = canBeCompleted && truthy[i];
        }

        return (
          <Grid xs={3} className={classes.taskContainer} item key={id}>
            <TaskCard
              updateTaskTitle={({ target: { value } }) =>
                updateTaskTitle(id, value)
              }
              updateTaskDescription={({ target: { value } }) =>
                updateTaskDescription(id, value)
              }
              updateTaskStatus={(status) => updateTaskStatus(id, status)}
              canBeCompleted={canBeCompleted}
            />
            {allTasks.length == index + 1 ? (
              ""
            ) : (
              <ArrowForwardIcon className={classes.arrow} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TaskCards;
