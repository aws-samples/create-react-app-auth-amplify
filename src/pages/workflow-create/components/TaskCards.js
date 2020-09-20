import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import TaskCard from "./TaskCard";
import { map } from "lodash";

const TaskCards = ({ allTasks }) => {
  return (
    <>
      {map(allTasks, (task) => (
        <TaskCard />
      ))}
      {/* <ArrowForwardIcon /> */}
    </>
  );
};

export default TaskCards;
