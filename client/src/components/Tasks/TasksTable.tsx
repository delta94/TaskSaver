import React from 'react';
import { Task } from '../../interfaces/interfaces';
import { formTypes } from '../../services/helper';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteTask from './DeleteTask';
import TaskForm from './TaskForm';
import TaskView from './TaskView';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const displayDate = (date: string) => {
  const dateParts = date.slice(0, 10).split('-').reverse();
  let newDate = "";

  dateParts.map((part: string, index: number) => {
    newDate += part;
    if (index !== dateParts.length - 1) {
      newDate += "/";
    }
  });

  return newDate;
};

interface Props {
  tasks: Task[] | null;
  getTasks: () => void;
  setMessage: (message: string, messageSeverity: string) => void;
}

const TasksTable: React.FC<Props> = ({ tasks, getTasks, setMessage }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {["Username", "Phone", "Email", "Created At", "Actions"].map((cell, index) => {
              return (<TableCell key={index}>{cell}</TableCell>);
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks && tasks.map((task: Task) => (
            <TableRow key={task._id}>
              <TableCell size="small" align="left">{task.userId.username}</TableCell>
              <TableCell size="small" align="left">{task.userId.phone}</TableCell>
              <TableCell size="small" align="left">{task.userId.email}</TableCell>
              <TableCell size="small" align="left"> {displayDate(task.createdAt)}</TableCell>
              <TableCell size="small" align="left">
                <DeleteTask task={task} getTasks={getTasks} setMessage={setMessage} />
                <TaskForm formType={formTypes.edit} taskToEdit={task} getTasks={getTasks} setMessage={setMessage} />
                <TaskView task={task} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
    </TableContainer >
  );
};

export default TasksTable;