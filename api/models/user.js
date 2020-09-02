"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../utils/validator");
const taskSchema = new mongoose_1.default.Schema({
    title: { type: String },
    description: { type: String },
    createdAt: { type: Date },
    status: { type: Number, enum: [0, 1] }
});
const userSchema = new mongoose_1.default.Schema({
    organizationId: { type: mongoose_1.default.SchemaTypes.ObjectId, required: true, ref: "Organization" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: validator_1.emailRegex },
    role: { type: Number, enum: [0, 1], required: true },
    tasks: [taskSchema]
});
exports.User = mongoose_1.default.model("User", userSchema);
