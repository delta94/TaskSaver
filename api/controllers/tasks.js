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
const user_1 = require("../models/user");
const validator_1 = require("../utils/validator");
const app_1 = require("../../app");
const messages_1 = require("../utils/messages");
const { fillCorrectly, noUser, noId, unauthorized } = messages_1.messages;
const getAllTasks = (room) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const organizationId = room;
    try {
        const users = yield user_1.User.find({}).where({ organizationId }).select(["email", "tasks"]);
        const tasks = [];
        try {
            for (var users_1 = __asyncValues(users), users_1_1; users_1_1 = yield users_1.next(), !users_1_1.done;) {
                const user = users_1_1.value;
                if (user.tasks) {
                    for (const task of user.tasks) {
                        tasks.push(Object.assign(Object.assign({}, task._doc), { user: {
                                _id: user._id,
                                email: user.email
                            } }));
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (users_1_1 && !users_1_1.done && (_a = users_1.return)) yield _a.call(users_1);
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
    var _b;
    const isValidate = validator_1.validateTask(task, validator_1.taskFormOperationTypes.create);
    if (isValidate) {
        try {
            const user = yield user_1.User.findOne({ _id: (_b = task.user) === null || _b === void 0 ? void 0 : _b._id });
            if (!user) {
                return app_1.logger.error(noUser);
            }
            // @ts-ignore
            const newTask = user.tasks.create(Object.assign(Object.assign({}, task), { status: 0 }));
            // @ts-ignore
            user.tasks.push(newTask);
            yield user.save();
            app_1.io.to(room).emit("newTask", Object.assign(Object.assign({}, newTask._doc), { user: {
                    _id: user._id,
                    email: user.email
                } }));
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
const updateTask = (taskToUpdate, loggedInUserId, loggedInUserRole, room) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const { _id: taskId, title, description, status } = taskToUpdate;
    const isValidate = validator_1.validateTask(taskToUpdate, validator_1.taskFormOperationTypes.update);
    if (isValidate) {
        try {
            const isAllowed = isAllowedModify((_c = taskToUpdate.user) === null || _c === void 0 ? void 0 : _c._id, loggedInUserId, loggedInUserRole);
            if (isAllowed) {
                yield user_1.User.updateOne({ _id: (_d = taskToUpdate.user) === null || _d === void 0 ? void 0 : _d._id, "tasks._id": taskId }, {
                    $set: {
                        "tasks.$.title": title,
                        "tasks.$.description": description,
                        "tasks.$.status": status
                    }
                });
                const updatedTask = { _id: taskId, title, description, status };
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
const deleteTask = (taskId, taskUserId, loggedInUserId, loggedInUserRole, room) => __awaiter(void 0, void 0, void 0, function* () {
    if (taskId && taskUserId) {
        try {
            const isAllowed = isAllowedModify(taskUserId, loggedInUserId, loggedInUserRole);
            if (isAllowed) {
                yield user_1.User.updateOne({ _id: taskUserId }, { $pull: { tasks: { _id: taskId } } });
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
const isAllowedModify = (taskUserId, loggedInUserId, loggedInUserRole) => {
    const isAdmin = loggedInUserRole === 0;
    return isAdmin || taskUserId === loggedInUserId;
};
