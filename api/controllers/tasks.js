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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getAllTasks = void 0;
const task_1 = require("../models/task");
const user_1 = require("../models/user");
const validator_1 = require("../utils/validator");
const app_1 = require("../../app");
const messages_1 = require("../utils/messages");
const { fillCorrectly, noUser, noId, unauthorized } = messages_1.messages;
const getAllTasks = (room) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const organizationId = room;
    try {
        const users = yield user_1.User.find({ organizationId });
        //@ts-ignore
        const userIds = users.map(user => user._id);
        let tasks = [];
        try {
            for (var userIds_1 = __asyncValues(userIds), userIds_1_1; userIds_1_1 = yield userIds_1.next(), !userIds_1_1.done;) {
                const _id = userIds_1_1.value;
                const tasksById = yield task_1.Task.find({ userId: _id }).populate("userId", ["username", "email"]);
                tasks = [...tasks, ...tasksById];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (userIds_1_1 && !userIds_1_1.done && (_a = userIds_1.return)) yield _a.call(userIds_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        app_1.io.to(room).emit("initialTasks", tasks);
    }
    catch (err) {
        app_1.logger.error(err);
    }
});
exports.getAllTasks = getAllTasks;
const createTask = (task, room) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, title, description, createdAt } = task;
    const isValidate = validator_1.validateTask(task, validator_1.taskFormOperationTypes.create);
    if (isValidate) {
        try {
            const user = yield user_1.User.findOne({ _id: userId });
            if (!user) {
                app_1.logger.error(noUser);
            }
            const task = new task_1.Task({ userId, title, description, createdAt, status: 0 });
            yield task.save();
            //@ts-ignore
            app_1.io.to(room).emit("newTask", Object.assign(Object.assign({}, task._doc), { userId: { _id: user.id, username: user.username, email: user.email } }));
        }
        catch (err) {
            app_1.logger.error(err);
        }
    }
    else {
        app_1.logger.error(fillCorrectly);
    }
});
exports.createTask = createTask;
const updateTask = (taskToUpdate, userId, room) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id: taskId, title, description, status } = taskToUpdate;
    const isValidate = validator_1.validateTask(taskToUpdate, validator_1.taskFormOperationTypes.update);
    if (isValidate) {
        try {
            const task = yield task_1.Task.findOne({ _id: taskId });
            const loggedInUser = yield user_1.User.findOne({ _id: userId });
            const isAdmin = (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === 0;
            // To do : get loggedInUser and isAdmin from authentication
            // remove duplicates from deleteTask
            if (isAdmin || `${task === null || task === void 0 ? void 0 : task.userId._id}` === `${userId}`) {
                const updatedTask = yield task_1.Task.findOneAndUpdate({ _id: taskId }, { title, description, status }, { new: true, useFindAndModify: false }).populate("userId", ["username", "email"]);
                app_1.io.to(room).emit("updatedTask", updatedTask);
            }
            else {
                app_1.logger.error(unauthorized);
            }
        }
        catch (err) {
            app_1.logger.error(err);
        }
    }
    else {
        app_1.logger.error(fillCorrectly);
    }
});
exports.updateTask = updateTask;
const deleteTask = (taskId, userId, room) => __awaiter(void 0, void 0, void 0, function* () {
    if (taskId) {
        try {
            const task = yield task_1.Task.findOne({ _id: taskId });
            const loggedInUser = yield user_1.User.findOne({ _id: userId });
            const isAdmin = (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === 0;
            if (isAdmin || `${task === null || task === void 0 ? void 0 : task.userId._id}` === `${userId}`) {
                yield task_1.Task.deleteOne({ _id: taskId });
                app_1.io.to(room).emit("deletedTaskId", taskId);
            }
        }
        catch (err) {
            app_1.logger.error(err);
        }
    }
    else {
        app_1.logger.error(noId);
    }
});
exports.deleteTask = deleteTask;
