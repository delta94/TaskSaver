"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messages_1 = require("./messages");
// To do: Implement authentication for socket.io
// If a user is deleted the relevant token must be deleted to
exports.checkAuth = (req, res, next) => {
    var _a, _b;
    if (((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) && ((_b = process.env) === null || _b === void 0 ? void 0 : _b.SECRET_KEY)) {
        try {
            const token = req.headers.authorization.split("Bearer ")[1];
            const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            req.userId = payload.userId;
            req.isAdmin = payload.role === 0;
            next();
        }
        catch (error) {
            res.status(401).json({ message: messages_1.messages.authFailed });
        }
    }
};
