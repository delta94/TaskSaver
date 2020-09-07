import express, { Application, Request, Response, NextFunction } from "express";
import socketio from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import pino from "pino";
import expressPino from "express-pino-logger";
import { authRoutes } from "./api/routes/authRouter";
import { organizationsRoutes } from "./api/routes/organizationsRouter";
import { roomsRoutes } from "./api/routes/roomsRouter";
import { Task } from "./api/interfaces/interfaces";
import { createTask, updateTask, deleteTask, getAllTasks } from "./api/controllers/tasks";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const expressLogger = expressPino({ logger });

mongoose.connect(`${process.env.DB_CONNECTION_STRING}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => logger.info("MongoDB Connected!"));

const app: Application = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, () => logger.info(`Listening on port: ${port}`));
const io = socketio(server);

io.on("connection", socket => {
  logger.info("New WS Connection...");

  socket.on("joinRoom", (room) => {
    socket.join(room);
    getAllTasks(room);

    socket.on("createTask", (newTask: Task) => {
      createTask(newTask, room);
    });

    socket.on("updateTask", ({ updatedTask, loggedInUserId, loggedInUserRole }) => {
      updateTask(updatedTask, loggedInUserId, loggedInUserRole, room);
    });

    socket.on("deleteTask", ({ taskId, taskUserId, loggedInUserId, loggedInUserRole }) => {
      deleteTask(taskId, taskUserId, loggedInUserId, loggedInUserRole, room);
    });
  });

  socket.on("disconnect", () => {
    logger.info("disconnect");
  });
});

const prefix = "/api";

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(expressLogger);

app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/organizations`, organizationsRoutes);
app.use(`${prefix}/rooms`, roomsRoutes);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error: any = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

export { app, io, logger };