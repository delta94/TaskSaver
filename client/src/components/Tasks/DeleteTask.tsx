import React, { useState } from 'react';
import { Task } from '../../interfaces/interfaces';
import { taskOperationHandler } from '../../services/tasks';
import { deleteTaskService } from '../../services/tasks';
import { dialog } from '../../styles/Styles';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  task: Task;
  getTasks: () => void;
  setMessage: (message: string, messageSeverity: string) => void;
}

const DeleteTask: React.FC<Props> = ({ task, getTasks, setMessage }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTask = async () => {
    setOpen(false);

    const res = await deleteTaskService(task);
    taskOperationHandler(res, setMessage);

    if (res.success) {
      await getTasks();
    }
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Task...</DialogTitle>
        <DialogContent>
          <DialogContentText style={dialog.contentText}>
            Are you sure you want to delete {task.title} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={dialog.dialogActions}>
          <Button onClick={deleteTask} color="primary">Yes</Button>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteTask;