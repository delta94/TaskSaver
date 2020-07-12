"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.SchemaTypes.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true }
});
exports.Task = mongoose_1.default.model('Task', taskSchema);
