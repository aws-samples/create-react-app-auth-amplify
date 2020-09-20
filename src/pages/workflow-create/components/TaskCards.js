import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import TaskCard from "./TaskCard";

const TaskCards = () => {
  return (
    <>
      <TaskCard />
      <ArrowForwardIcon />
      <TaskCard />
    </>
  );
};

export default TaskCards;
