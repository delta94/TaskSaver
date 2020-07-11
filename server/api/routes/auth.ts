import express from 'express';
import { register, login } from '../controllers/auth';
export const authRoutes = express.Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);