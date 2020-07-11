import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../controllers/tasks';
export const tasksRoutes = express.Router();

tasksRoutes.get('/:id', getAllTasks);
tasksRoutes.post('/', createTask);
tasksRoutes.put('/:id', updateTask);
tasksRoutes.delete('/:id', deleteTask);