import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import TaskCards from "./components/TaskCards";
import { useSelector, useDispatch } from "react-redux";
import { taskSelectors, taskAdded } from "./slice";
import { workflowAdded, workflowSelectors } from "../home/slice";

const WorkflowPage = (props) => {
  console.log("props: ", props);
  const allTasks = useSelector(taskSelectors.selectAll);
  const totalTasksAdded = useSelector(taskSelectors.selectTotal);
  const totalWorkflowAdded = useSelector(workflowSelectors.selectTotal);
  const [workflowName, setWorkflowName] = useState("");

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
  const handleSaveWorkFlow = (id) => {
    dispatch(
      workflowAdded({
        id: totalWorkflowAdded + 1,
        workFlowName: workflowName,
        status: "pending",
        tasks: allTasks,
      })
    );
    props.history.push("/home");
  };
  console.log("allTasks: ", allTasks);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Header
          handleAddNode={handleAddNode}
          handleSaveWorkFlow={handleSaveWorkFlow}
          setWorkflowName={setWorkflowName}
        />
      </Grid>
      <Grid item>
        <TaskCards totalTasksAdded={totalTasksAdded} allTasks={allTasks} />
      </Grid>
    </Grid>
  );
};

export default WorkflowPage;
