"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rooms_1 = require("../controllers/rooms");
const roomsRoutes = express_1.default.Router();
exports.roomsRoutes = roomsRoutes;
roomsRoutes.get("/:id/users", rooms_1.getAllUsersByRoom);
