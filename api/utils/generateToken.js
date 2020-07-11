"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.generateToken = (firstName, lastName) => {
    return jsonwebtoken_1.default.sign({ firstName, lastName }, process.env.SECRET_KEY, {
        expiresIn: '1H'
    });
};
//# sourceMappingURL=generateToken.js.map