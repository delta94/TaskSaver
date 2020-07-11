import React, { useState, useEffect, SyntheticEvent } from 'react';
import { createTaskService, editTaskService, taskOperationHandler } from '../../services/tasks';
import { Task } from '../../interfaces/interfaces';
import { form } from '../../styles/Styles';
import { formTypes } from '../../services/helper';
import { messageSeverities, messages } from '../Message/Message';
import { TextField, Button, Dialog, Container, Avatar, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DialogContent from '@material-ui/core/DialogContent';

interface Props {
  getTasks: () => void;
  formType: string;
  taskToEdit?: Task;
  setMessage: (message: string, messageSeverity: string) => void;
}

const TaskForm: React.FC<Props> = ({ getTasks, formType, taskToEdit, setMessage }) => {
  const userId = JSON.parse(localStorage.loggedInUser)._id;
  const isEditType = (formType === formTypes.edit) && taskToEdit;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = form();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setButtonDisabled(false);
  };

  useEffect(() => {
    if (isEditType && taskToEdit) {
      const { title, description, content } = taskToEdit;
      setFormValues(title, description, content);
    }
  }, [isEditType, taskToEdit, open]);

  const resetFormValues = () => {
    setFormValues('', '', '');
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    setMessage('', '');

    let IsOperationSucceeded;
    isEditType ? IsOperationSucceeded = await editOperation() : IsOperationSucceeded = await addOperation();

    handleClose();

    if (IsOperationSucceeded) {
      resetFormValues();
      getTasks();
    }
  };

  const addOperation = async () => {
    let IsOperationSucceeded = false;
    const newTask = { userId, title, description, content, createdAt: Date.now() };
    const isValidate = validateTask(newTask);

    if (isValidate) {
      const res = await createTaskService(newTask);
      IsOperationSucceeded = taskOperationHandler(res, setMessage);
    }

    return IsOperationSucceeded;
  };

  const editOperation = async () => {
    let IsOperationSucceeded = false;

    if (taskToEdit) {
      const updatedTask = { _id: taskToEdit._id, userId, title, description, content };
      const isValidate = validateTask(updatedTask);

      if (isValidate) {
        const isTasksEqual = compareTasks(taskToEdit, updatedTask);

        if (!isTasksEqual) {
          const res = await editTaskService(updatedTask);
          IsOperationSucceeded = taskOperationHandler(res, setMessage);
        } else {
          setMessage(`Task ${messages.notChanged}`, messageSeverities.WARNING);
        }
      }
    }

    return IsOperationSucceeded;
  };

  const validateTask = (task: Task) => {
    let isValidate = true;
    const { _id } = task;

    if (isEditType && !_id) {
      isValidate = false;
      setMessage(messages.fillCorrectly, messageSeverities.ERROR);
    }

    return isValidate;
  };

  const compareTasks = (taskToEdit: Task, updatedTask: Task) => {
    let isTasksEqual = false;
    const { __v, _id, createdAt, userId, ...taskToEditValues } = taskToEdit;
    const { _id: taskId, userId: uId, ...updatedTaskValues } = updatedTask;

    Object.keys(taskToEditValues).sort();
    Object.keys(updatedTaskValues).sort();

    if (JSON.stringify(taskToEditValues) === JSON.stringify(updatedTaskValues)) {
      isTasksEqual = true;
    }

    return isTasksEqual;
  };

  const setFormValues = (title: string, description: string, content: string) => {
    setTitle(title);
    setDescription(description);
    setContent(content);
  };

  return (
    <>
      {isEditType ?
        <IconButton onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
        :
        <Button type="button" variant="contained" color="primary" className={classes.addTaskButton} onClick={handleClickOpen}>Add Task</Button>
      }

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <AssignmentIcon />
              </Avatar>
              <Typography component="h1" variant="h5">{isEditType ? 'Edit' : 'Add'} Task</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField required variant="outlined" margin="normal" fullWidth label="title" autoComplete="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextField required variant="outlined" margin="normal" fullWidth label="description" autoComplete="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <TextField required variant="outlined" margin="normal" fullWidth label="content" autoComplete="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <div className={classes.dialogButtonsWrapper}>
                  <Button disabled={isButtonDisabled} type="submit" color="primary">Save</Button>
                  <Button onClick={handleClose} type="button" color="primary">Cancel</Button>
                </div>
              </form>
            </div>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskForm;