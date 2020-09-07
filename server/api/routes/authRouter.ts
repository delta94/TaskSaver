import express from "express";
import { register, login } from "../controllers/auth";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export { authRoutes };