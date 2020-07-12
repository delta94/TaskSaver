"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const authRoutes = express_1.default.Router();
exports.authRoutes = authRoutes;
authRoutes.post('/register', auth_1.register);
authRoutes.post('/login', auth_1.login);
