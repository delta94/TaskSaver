"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.io = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const pino_1 = __importDefault(require("pino"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
const authRouter_1 = require("./api/routes/authRouter");
const organizationsRouter_1 = require("./api/routes/organizationsRouter");
const roomsRouter_1 = require("./api/routes/roomsRouter");
const tasks_1 = require("./api/controllers/tasks");
const logger = pino_1.default({ level: process.env.LOG_LEVEL || "info" });
exports.logger = logger;
const expressLogger = express_pino_logger_1.default({ logger });
mongoose_1.default.connect(`${process.env.DB_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose_1.default.connection.on("connected", () => logger.info("MongoDB Connected!"));
const app = express_1.default();
exports.app = app;
const port = process.env.PORT || 8080;
const server = app.listen(port, () => logger.info(`Listening on port: ${port}`));
const io = socket_io_1.default(server);
exports.io = io;
io.on("connection", socket => {
    logger.info("New WS Connection...");
    socket.on("joinRoom", (room) => {
        socket.join(room);
        tasks_1.getAllTasks(room);
        socket.on("createTask", (newTask) => {
            tasks_1.createTask(newTask, room);
        });
        socket.on("updateTask", ({ updatedTask, loggedInUserId, loggedInUserRole }) => {
            tasks_1.updateTask(updatedTask, loggedInUserId, loggedInUserRole, room);
        });
        socket.on("deleteTask", ({ taskId, taskUserId, loggedInUserId, loggedInUserRole }) => {
            tasks_1.deleteTask(taskId, taskUserId, loggedInUserId, loggedInUserRole, room);
        });
    });
    socket.on("disconnect", () => {
        logger.info("disconnect");
    });
});
const prefix = "/api";
app.use(cors_1.default());
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: false }));
app.use(expressLogger);
app.use(`${prefix}/auth`, authRouter_1.authRoutes);
app.use(`${prefix}/organizations`, organizationsRouter_1.organizationsRoutes);
app.use(`${prefix}/rooms`, roomsRouter_1.roomsRoutes);
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
app.use((error, _req, res, _next) => {
    res.status(error.status || 500);
    res.json({ message: error.message });
});
