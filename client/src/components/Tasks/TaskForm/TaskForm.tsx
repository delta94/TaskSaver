import React, { useState, useEffect, SyntheticEvent, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Task } from "../../../interfaces/interfaces";
import { formTypes } from "../../../services/helper";
import { TextField, Button, Dialog, DialogContent, Avatar, Typography, IconButton } from "@material-ui/core";
import { messages, messageSeverities } from "../../Message/Message";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./TaskForm.scss";

interface Props {
  formType: string;
  taskToEdit?: Task;
}

const TaskForm: React.FC<Props> = ({ formType, taskToEdit }) => {
  const { socket, setMessage, setMessageSeverity, clearMessage, loggedInUser, isMobile } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const isEditType = (formType === formTypes.edit) && taskToEdit;
  const { _id: loggedInUserId, role: loggedInUserRole, email } = loggedInUser;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setButtonDisabled(false);
  };

  useEffect(() => {
    if (isEditType && taskToEdit) {
      const { title, description } = taskToEdit;
      setFormValues(title, description);
    }
  }, [isEditType, taskToEdit, open]);

  const resetFormValues = () => {
    setFormValues("", "");
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    clearMessage();

    isEditType ? await editOperation() : await addOperation();
    handleClose();
    resetFormValues();
  };

  const addOperation = async () => {
    const user = { _id: loggedInUserId, email };
    const newTask = { title, description, createdAt: Date.now(), user };
    socket.emit("createTask", newTask);
  };

  const editOperation = async () => {
    if (taskToEdit) {
      const updatedTask = { _id: taskToEdit._id, title, description, status: taskToEdit.status, user: taskToEdit.user };
      const isTasksEqual = compareTasks(taskToEdit, updatedTask);

      if (!isTasksEqual) {
        socket.emit("updateTask", { updatedTask, loggedInUserId, loggedInUserRole });
      } else {
        setMessage(messages.notChanged);
        setMessageSeverity(messageSeverities.WARNING);
      }
    }
  };

  const compareTasks = (taskToEdit: Task, updatedTask: Task) => {
    let isTasksEqual = false;
    const { _id, user: taskUser, createdAt, __v, ...taskToEditValues } = taskToEdit;
    const { _id: taskId, user: tUser, ...updatedTaskValues } = updatedTask;

    Object.keys(taskToEditValues).sort();
    Object.keys(updatedTaskValues).sort();

    if (JSON.stringify(taskToEditValues) === JSON.stringify(updatedTaskValues)) {
      isTasksEqual = true;
    }

    return isTasksEqual;
  };

  const setFormValues = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
  };

  return (
    <>
      <div className="task-form-button-wrapper">
        {isEditType ?
          <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
          :
          <Button color="primary" variant="contained" onClick={handleClickOpen}>Add Task</Button>
        }
      </div>

      <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent className={isMobile ? "pt-2" : ""}>
          <div className={"form-container " + (isMobile ? "mb-0" : "")}>
            <Avatar>
              <AssignmentIcon />
            </Avatar>
            <Typography className="mt-1" component="h1" variant="h5">{isEditType ? "Edit" : "Add"} Task</Typography>
            <form onSubmit={handleSubmit}>
              <TextField required variant="outlined" margin="normal" fullWidth label="title" autoComplete="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <TextField required variant="outlined" margin="normal" fullWidth label="description" autoComplete="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <div className={"buttons-wrapper " + (isMobile ? "mt-0" : "")}>
                <Button disabled={isButtonDisabled} type="submit">Save</Button>
                <Button onClick={handleClose} type="button">Cancel</Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskForm;