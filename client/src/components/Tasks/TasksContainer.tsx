import React, { useState, useEffect } from 'react';
import { formTypes } from '../../services/helper';
import { getTasksService } from '../../services/tasks';
import { Message } from '../Message/Message';
import { Container } from '@material-ui/core';
import { container } from '../../styles/Styles';
import TaskForm from './TaskForm';
import TasksTable from './TasksTable';

const TasksContainer = () => {
  const [tasks, setTasks] = useState(null);
  const [message, setMessage] = useState('');
  const [messageSeverity, setMessageType] = useState('');

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  const getTasks = async () => {
    const userId = JSON.parse(localStorage.loggedInUser)._id;
    const res = await getTasksService(userId);
    const { success, data } = res;

    if (success) {
      setTasks(data);
    }
  };

  const setTaskOperationMessage = (message: string, messageSeverity: string) => {
    setMessage(message);
    setMessageType(messageSeverity);
  };

  return (
    <Container>
      <h1 style={container.header}>Tasks</h1>
      <Message message={message} messageSeverity={messageSeverity} />
      <TaskForm getTasks={getTasks} formType={formTypes.add} setMessage={setTaskOperationMessage} />
      <TasksTable tasks={tasks} getTasks={getTasks} setMessage={setTaskOperationMessage} />
    </Container>
  );
};

export default TasksContainer;