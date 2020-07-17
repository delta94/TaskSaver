"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../utils/validator");
const userSchema = new mongoose_1.default.Schema({
    role: { type: Number, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    phone: { type: String, require: true, match: validator_1.phoneRegex },
    email: { type: String, require: true, unique: true, match: validator_1.emailRegex }
});
exports.User = mongoose_1.default.model('User', userSchema);
