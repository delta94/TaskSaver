"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../utils/validator");
const userSchema = mongoose_1.default.Schema({
    role: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, match: validator_1.phoneRegex },
    email: { type: String, required: true, unique: true, match: validator_1.emailRegex }
});
exports.User = mongoose_1.default.model('User', userSchema);
