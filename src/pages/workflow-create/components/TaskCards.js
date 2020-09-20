import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import TaskCard from "./TaskCard";
import { map } from "lodash";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { taskUpdated } from "../slice";

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

  return (
    <Grid container>
      {map(allTasks, ({ id }, index) => (
        <Grid xs={3} className={classes.taskContainer} item key={id}>
          <TaskCard
            updateTaskTitle={({ target: { value } }) =>
              updateTaskTitle(id, value)
            }
            updateTaskDescription={({ target: { value } }) =>
              updateTaskDescription(id, value)
            }
            updateTaskStatus={(status) => updateTaskStatus(id, status)}
          />
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
