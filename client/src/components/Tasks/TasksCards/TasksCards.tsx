import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Task } from "../../../interfaces/interfaces";
import { formTypes } from "../../../services/helper";
import { Grid, Card, CardContent, Typography, Checkbox, CardActions } from "@material-ui/core";
import { TasksContext } from "../../../contexts/TasksContext";
import Actions from "../../Actions/Actions";
import TaskForm from "../TaskForm/TaskForm";
import DeleteTask from "../DeleteTask/DeleteTask";
import "./TasksCards.scss";

const isCompleted = (taskStatus: number | undefined) => {
  return taskStatus === 1;
};

const displayDate = (date: string) => {
  const l10nHE = new Intl.DateTimeFormat("he-IL");
  return l10nHE.format(new Date(date)).split(".").join("/");
};

const TasksCards: React.FC = () => {
  const { tasks, searchValue } = useContext(TasksContext);
  const { socket, loggedInUser, isAdmin, isDrawerOpened } = useContext(AppContext);
  const { _id: loggedInUserId, role: loggedInUserRole } = loggedInUser;
  const mathchedTasks = tasks.filter((task: Task) => task.title.toLowerCase().includes(searchValue.toLowerCase()));

  const setTaskStatus = (updatedTask: Task) => {
    updatedTask.status = !isCompleted(updatedTask.status) ? updatedTask.status = 1 : updatedTask.status = 0;
    socket.emit("updateTask", { updatedTask, loggedInUserId, loggedInUserRole });
  };

  const isModifyAllowed = (task: Task) => {
    return isAdmin || task.user?._id === loggedInUserId;
  };

  return (
    <Grid container spacing={2} justify="center" className="tasks-cards-container">
      {!isDrawerOpened && <Actions />}

      {mathchedTasks.map((task: Task) => (
        <Grid item xs={12} sm={8} md={5} key={task._id} className={!isCompleted(task.status) ? "no-opacity" : "half-opacity"}>
          <Card elevation={6} className={"card " + (isModifyAllowed(task) ? "" : "pt-4")}>
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" component="h2" className="title">{task.title}</Typography>
              <Typography variant="subtitle1" className="description">{task.description}</Typography>
              <div className="user-details">
                <Typography variant="subtitle1" color="textSecondary">{task.user?.email}</Typography>
                <Typography variant="subtitle1" color="textSecondary">Created at: {displayDate(task.createdAt)}</Typography>
              </div>
            </CardContent>
            <CardActions className="actions-wrapper">
              {isModifyAllowed(task) &&
                <div>
                  <DeleteTask task={task} />
                  <TaskForm formType={formTypes.edit} taskToEdit={task} />
                  <Checkbox
                    checked={isCompleted(task.status)}
                    onChange={() => setTaskStatus(task)}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="pb-0"
                  />
                </div>}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TasksCards;