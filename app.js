"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const pino_1 = __importDefault(require("pino"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
const checkAuth_1 = require("./api/utils/checkAuth");
const tasksRouter_1 = require("./api/routes/tasksRouter");
const authRouter_1 = require("./api/routes/authRouter");
const logger = pino_1.default({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = express_pino_logger_1.default({ logger });
mongoose_1.default.connect(`${process.env.DB_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose_1.default.connection.on("connected", () => logger.info("MongoDB Connected!"));
const app = express_1.default();
const prefix = "/api";
app.use(cors_1.default());
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: false }));
app.use(expressLogger);
app.use(`${prefix}/tasks`, checkAuth_1.checkAuth, tasksRouter_1.tasksRoutes);
app.use(`${prefix}/auth`, authRouter_1.authRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => logger.info(`Listening on port: ${port}`));
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
app.use((error, _req, res, _next) => {
    res.status(error.status || 500);
    res.json({ message: error.message });
});
module.exports = app;