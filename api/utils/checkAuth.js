"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messages_1 = require("./messages");
exports.checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
    req.userId = payload.userId;
    next();
  }
  catch (error) {
    res.status(401).json({ message: messages_1.messages.authFailed });
  }
};