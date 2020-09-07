import React, { createContext, useState, useEffect, useContext, SetStateAction, Context } from "react";
import { Task } from "../interfaces/interfaces";
import { AppContext } from "./AppContext";
import { messageSeverities } from "../components/Message/Message";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const TasksContext: Context<any> = createContext(undefined);

const TasksContextProvider: React.FC<Props> = ({ children }) => {
  const { socket, setMessage, setMessageSeverity, getUserFromLS } = useContext(AppContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [updatedTask, setUpdatedTask] = useState<SetStateAction<any>>(null);
  const [deletedTaskId, setDeletedTaskId] = useState<SetStateAction<String | null>>(null);
  const [chartData, setChartData] = useState<SetStateAction<{}>>({});
  const [searchValue, setSearchValue] = useState("");
  const loggedInUser = JSON.parse(localStorage.loggedInUser);
  const location = useLocation();

  const setOperationMessage = (message: string) => {
    setMessage(message);
    setMessageSeverity(messageSeverities.SUCCESS);
  };

  useEffect(() => {
    getUserFromLS();

    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (socket) {
      const room = loggedInUser.organizationId;
      socket.emit("joinRoom", room);

      socket.on("initialTasks", (tasks: Task[]) => {
        if (tasks) {
          setTasks(tasks);
        }
      });

      socket.on("newTask", (newTask: Task) => {
        if (newTask) {
          setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
          setOperationMessage("Task added successfully");
        }
      });

      socket.on("updatedTask", (updatedTask: Task) => {
        if (updatedTask) {
          setUpdatedTask(updatedTask);
          setOperationMessage("Task updated successfully");
        }
      });

      socket.on("deletedTaskId", (deletedTaskId: string) => {
        if (deletedTaskId) {
          setDeletedTaskId(deletedTaskId);
          setOperationMessage("Task deleted successfully");
        }
      });
    }

    return () => socket.removeAllListeners();

    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    const updateTasksArray = () => {
      const index = tasks.findIndex((task: Task) => task._id === updatedTask._id);

      if (index > -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        setTasks(tasks);
        setUpdatedTask(null);
      }
    };

    const removeTaskFromArray = () => {
      const index = tasks.findIndex((task: Task) => task._id === deletedTaskId);

      if (index > -1) {
        tasks.splice(index, 1);
        setDeletedTaskId(null);
      }
    };

    const setOpenClosedTasks = () => {
      if (tasks.length > 0) {
        const openTasks = tasks.filter(task => task.status === 0);
        const closedTasks = tasks.filter(task => task.status === 1);
        setChartData({ openTasks: openTasks.length, closedTasks: closedTasks.length });
      }
    };

    if (tasks) {
      if (updatedTask) {
        updateTasksArray();
      } else if (deletedTaskId) {
        removeTaskFromArray();
      }
    }

    setOpenClosedTasks();

  }, [tasks, updatedTask, deletedTaskId]);

  return (
    <TasksContext.Provider value={{ tasks, chartData, searchValue, setSearchValue }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };