import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Typography } from "@material-ui/core";
import TasksCards from "../TasksCards/TasksCards";
import "./TasksContainer.scss";

const TasksContainer: React.FC = () => {
  const { isDrawerOpened } = useContext(AppContext);

  return (
    <div className="tasks-container-wrapper">
      <Typography component="h1" variant="h5" className={"title " + (isDrawerOpened ? "text-center mb-4" : "mb-2")}>Tasks</Typography>
      <TasksCards />
    </div>
  );
};

export default TasksContainer;