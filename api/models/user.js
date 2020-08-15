"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../utils/validator");
const userSchema = new mongoose_1.default.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true, match: validator_1.emailRegex },
    role: { type: Number, enum: [0, 1], require: true },
    organizationId: { type: mongoose_1.default.SchemaTypes.ObjectId, required: true, ref: "Organization" }
});
exports.User = mongoose_1.default.model("User", userSchema);
