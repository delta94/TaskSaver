import React, { useState } from 'react';
import { Task } from '../../interfaces/interfaces';
import { dialog } from '../../styles/Styles';
import { IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  task: Task;
}

const TaskView: React.FC<Props> = ({ task }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{task.title}</DialogTitle>
        <DialogContent>
          <DialogContentText style={dialog.contentText}>
            <span style={dialog.description}>{task.description}</span>
          </DialogContentText>
          <DialogContentText style={dialog.contentText}>
            <span style={dialog.content}>{task.content}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={dialog.dialogActions}>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskView;