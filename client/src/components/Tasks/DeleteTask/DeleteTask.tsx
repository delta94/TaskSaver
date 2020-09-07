import React, { useState, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Task } from "../../../interfaces/interfaces";
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

interface Props {
  task: Task;
}

const DeleteTask: React.FC<Props> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const { socket, loggedInUser } = useContext(AppContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTask = async () => {
    socket.emit("deleteTask", {
      taskId: task._id,
      taskUserId: task.user?._id,
      loggedInUserId: loggedInUser._id,
      loggedInUserRole: loggedInUser.role
    });
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineIcon />
      </IconButton>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle className="text-center">Delete Task...</DialogTitle>
        <DialogContent>
          <DialogContentText className="content-text">
            Are you sure you want to delete {task.title} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="justify-content-center">
          <Button onClick={deleteTask}>Yes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteTask;