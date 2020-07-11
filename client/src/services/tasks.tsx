import { restOptions, setRestOptions, handleResponse } from './helper';
import { Task } from '../interfaces/interfaces';
import { messageSeverities } from '../components/Message/Message';

const { SUCCESS, ERROR } = messageSeverities;
const prefix = `api/tasks`;

const getTasksService = async (userId: string) => {
  const options = setRestOptions(restOptions.get);
  const res = await fetch(`${prefix}/${userId}`, options);
  return handleResponse(res);
};

const createTaskService = async (body: Task) => {
  const options = setRestOptions(restOptions.post, body);
  const res = await fetch(prefix, options);
  return handleResponse(res);
};

const editTaskService = async (body: Task) => {
  const options = setRestOptions(restOptions.put, body);
  const res = await fetch(`${prefix}/${body._id}`, options);
  return handleResponse(res);
};

const deleteTaskService = async (body: Task) => {
  const options = setRestOptions(restOptions.delete, body);
  const res = await fetch(`${prefix}/${body._id}`, options);
  return handleResponse(res);
};

const taskOperationHandler = (res: any, setMessage: (message: string, messageSeverities: string) => void) => {
  const { message } = res.data;
  const IsOperationSucceeded = res.success;
  IsOperationSucceeded ? setMessage(message, SUCCESS) : setMessage(message, ERROR);
  return IsOperationSucceeded;
};

export { getTasksService, createTaskService, editTaskService, deleteTaskService, taskOperationHandler };