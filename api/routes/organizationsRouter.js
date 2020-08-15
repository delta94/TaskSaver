"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const organizations_1 = require("../controllers/organizations");
const organizationsRoutes = express_1.default.Router();
exports.organizationsRoutes = organizationsRoutes;
organizationsRoutes.get("/", organizations_1.getAllOrganizations);
