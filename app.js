"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const checkAuth_1 = require("./api/utils/checkAuth");
const tasksRouter_1 = require("./api/routes/tasksRouter");
const authRouter_1 = require("./api/routes/authRouter");
mongoose_1.default.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.66hev.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose_1.default.connection.on('connected', () => console.log('MongoDB Connected!'));
const app = express_1.default();
const prefix = '/api';
app.use(cors_1.default());
// @ts-ignore
app.use(express_1.default.json({ limit: '10mb', extended: true }));
app.use(express_1.default.urlencoded({ limit: '10mb', extended: false }));
app.use(`${prefix}/tasks`, checkAuth_1.checkAuth, tasksRouter_1.tasksRoutes);
app.use(`${prefix}/auth`, authRouter_1.authRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port: ${port}`));
app.use((_req, _res, next) => {
    const error = new Error('Not Found');
    error['status'] = 404;
    next(error);
});
app.use((error, _req, res, _next) => {
    res.status(error.status || 500);
    res.json({ message: error.message });
});
module.exports = app;
