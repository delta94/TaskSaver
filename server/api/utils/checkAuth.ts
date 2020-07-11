import jwt from 'jsonwebtoken';
import { messages } from './messages';

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({ message: messages.authFailed });
  }
};