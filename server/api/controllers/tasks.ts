
import { Task } from '../models/task';
import { User } from '../models/user';
import { validateTask, taskOperationTypes } from '../utils/validator';
import { messages } from '../utils/messages';
import { User as UserInterface, Task as TaskInterface } from '../interfaces/interfaces';
const { fillCorrectly, noUser, noId, unauthorized, created, updated, deleted } = messages;

const getAllTasks = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const user: UserInterface = await User.findOne({ _id: userId });
    const isAdmin = user.role === 0;
    let tasks: TaskInterface[];

    if (isAdmin) {
      tasks = await Task.find().populate('userId', ['username', 'phone', 'email']);
    } else {
      tasks = await Task.find({ userId }).populate('userId', ['username', 'phone', 'email']);
    }

    return res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};
const createTask = async (req, res, next) => {
  const { userId, title, description, content, createdAt } = req.body;
  const isValidate = validateTask(req.body, taskOperationTypes.create);

  if (isValidate) {
    try {
      const user: UserInterface = await User.findOne({ _id: userId });

      if (!user) {
        return res.status(404).json({ message: noUser });
      }

      const task: TaskInterface = new Task({ userId, title, description, content, createdAt });
      
      // @ts-ignore
      await task.save();
      return res.status(200).json({ message: `Task ${created}` });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: fillCorrectly });
  }
};
const updateTask = async (req, res, next) => {
  const { id: taskId } = req.params;
  const { userId, title, description, content } = req.body;
  const isValidate = validateTask(req.body, taskOperationTypes.update);

  if (isValidate) {
    try {
      const task: TaskInterface = await Task.findOne({ _id: taskId });
      const user: UserInterface = await User.findOne({ _id: userId });
      const isAdmin = user.role === 0;

      if (isAdmin || `${task.userId}` === `${userId}`) {
        await Task.updateOne({ _id: taskId }, { title, description, content });
        return res.status(200).json({ message: `Task ${updated}` });
      } else {
        return res.status(401).json({ message: unauthorized });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: fillCorrectly });
  }
};
const deleteTask = async (req, res, next) => {
  const { id: taskId } = req.params;

  if (taskId) {
    try {
      await Task.deleteOne({ _id: taskId });
      return res.status(200).json({ message: `Task ${deleted}` });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(404).json({ message: noId });
  }
};

export { getAllTasks, createTask, updateTask, deleteTask };