"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getAllTasks = void 0;
const task_1 = require("../models/task");
const user_1 = require("../models/user");
const validator_1 = require("../utils/validator");
const messages_1 = require("../utils/messages");
const { fillCorrectly, noUser, noId, unauthorized, created, updated, deleted } = messages_1.messages;
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req;
        const user = yield user_1.User.findOne({ _id: userId });
        const isAdmin = user.role === 0;
        let tasks;
        if (isAdmin) {
            tasks = yield task_1.Task.find().populate('userId', ['username', 'phone', 'email']);
        }
        else {
            tasks = yield task_1.Task.find({ userId }).populate('userId', ['username', 'phone', 'email']);
        }
        return res.status(200).json(tasks);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllTasks = getAllTasks;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, title, description, content, createdAt } = req.body;
    const isValidate = validator_1.validateTask(req.body, validator_1.taskOperationTypes.create);
    if (isValidate) {
        try {
            const user = yield user_1.User.findOne({ _id: userId });
            if (!user) {
                return res.status(404).json({ message: noUser });
            }
            const task = new task_1.Task({ userId, title, description, content, createdAt });
            yield task.save();
            return res.status(200).json({ message: `Task ${created}` });
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(400).json({ message: fillCorrectly });
    }
});
exports.createTask = createTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskId } = req.params;
    const { userId, title, description, content } = req.body;
    const isValidate = validator_1.validateTask(req.body, validator_1.taskOperationTypes.update);
    if (isValidate) {
        try {
            const task = yield task_1.Task.findOne({ _id: taskId });
            const user = yield user_1.User.findOne({ _id: userId });
            const isAdmin = user.role === 0;
            if (isAdmin || `${task.userId}` === `${userId}`) {
                yield task_1.Task.updateOne({ _id: taskId }, { title, description, content });
                return res.status(200).json({ message: `Task ${updated}` });
            }
            else {
                return res.status(401).json({ message: unauthorized });
            }
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(400).json({ message: fillCorrectly });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskId } = req.params;
    if (taskId) {
        try {
            yield task_1.Task.deleteOne({ _id: taskId });
            return res.status(200).json({ message: `Task ${deleted}` });
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(404).json({ message: `Task ${noId}` });
    }
});
exports.deleteTask = deleteTask;
