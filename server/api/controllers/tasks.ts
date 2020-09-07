import { User } from "../models/user";
import { validateTask, taskFormOperationTypes } from "../utils/validator";
import { Task as TaskInterface, User as UserInterface } from "../interfaces/interfaces";
import { io, logger } from "../../app";
import { messages } from "../utils/messages";

const { fillCorrectly, noUser, noId, unauthorized } = messages;

const getAllTasks = async (room: string) => {
  const organizationId = room;

  try {
    const users: UserInterface[] = await User.find({}).where({ organizationId }).select(["email", "tasks"]);
    const tasks = [];

    for await (const user of users) {
      if (user.tasks) {
        for (const task of user.tasks) {
          tasks.push({
            // @ts-ignore
            ...task._doc,
            user: {
              _id: user._id,
              email: user.email
            }
          });
        }
      }
    }

    io.to(room).emit("initialTasks", tasks);

  } catch (err) {
    logger.error(err);
  }
};

const createTask = async (task: TaskInterface, room: string) => {
  const isValidate = validateTask(task, taskFormOperationTypes.create);

  if (isValidate) {
    try {
      const user: UserInterface | null = await User.findOne({ _id: task.user?._id });

      if (!user) {
        return logger.error(noUser);
      }

      // @ts-ignore
      const newTask = user.tasks.create({
        ...task,
        status: 0,
      });

      // @ts-ignore
      user.tasks.push(newTask);
      await user.save();

      io.to(room).emit("newTask", {
        ...newTask._doc,
        user: {
          _id: user._id,
          email: user.email
        }
      });
    } catch (err) {
      logger.error(err);
    }
  } else {
    logger.error(fillCorrectly);
  }
};

const updateTask = async (taskToUpdate: TaskInterface, loggedInUserId: string, loggedInUserRole: number, room: string) => {
  const { _id: taskId, title, description, status } = taskToUpdate;
  const isValidate = validateTask(taskToUpdate, taskFormOperationTypes.update);

  if (isValidate) {
    try {
      const isAllowed = isAllowedModify(taskToUpdate.user?._id, loggedInUserId, loggedInUserRole);

      if (isAllowed) {
        await User.updateOne(
          { _id: taskToUpdate.user?._id, "tasks._id": taskId },
          {
            $set: {
              "tasks.$.title": title,
              "tasks.$.description": description,
              "tasks.$.status": status
            }
          }
        );

        const updatedTask = { _id: taskId, title, description, status };
        io.to(room).emit("updatedTask", updatedTask);
      } else {
        logger.error(unauthorized);
      }
    } catch (err) {
      logger.error(err);
    }
  } else {
    logger.error(fillCorrectly);
  }
};

const deleteTask = async (taskId: string, taskUserId: string, loggedInUserId: string, loggedInUserRole: number, room: string) => {
  if (taskId && taskUserId) {
    try {
      const isAllowed = isAllowedModify(taskUserId, loggedInUserId, loggedInUserRole);

      if (isAllowed) {
        await User.updateOne({ _id: taskUserId }, { $pull: { tasks: { _id: taskId } } });
        io.to(room).emit("deletedTaskId", taskId);
      }
    } catch (err) {
      logger.error(err);
    }
  } else {
    logger.error(noId);
  }
};

const isAllowedModify = (taskUserId: string, loggedInUserId: string, loggedInUserRole: number) => {
  const isAdmin = loggedInUserRole === 0;
  return isAdmin || taskUserId === loggedInUserId;
};

export { getAllTasks, createTask, updateTask, deleteTask };