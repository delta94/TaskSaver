"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const express_1 = __importDefault(require("express"));
const tasks_1 = require("../controllers/tasks");
exports.tasksRoutes = express_1.default.Router();
exports.tasksRoutes.get('/:id', tasks_1.getAllTasks);
exports.tasksRoutes.post('/', tasks_1.createTask);
exports.tasksRoutes.put('/:id', tasks_1.updateTask);
exports.tasksRoutes.delete('/:id', tasks_1.deleteTask);
//# sourceMappingURL=tasks.js.map