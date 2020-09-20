import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import TaskCards from "./components/TaskCards";
import { useSelector, useDispatch } from "react-redux";
import { taskSelectors, taskAdded } from "./slice";

const HomePage = () => {
  const allTasks = useSelector(taskSelectors.selectAll);
  const totalTasksAdded = useSelector(taskSelectors.selectTotal);

  const dispatch = useDispatch();

  const handleAddNode = (id) => {
    dispatch(
      taskAdded({
        id: totalTasksAdded + 1,
        title: "",
        description: "",
        status: "pending",
      })
    );
  };
  console.log("allTasks: ", allTasks);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header handleAddNode={handleAddNode} />
      </Grid>
      <Grid item>
        <TaskCards totalTasksAdded={totalTasksAdded} allTasks={allTasks} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
