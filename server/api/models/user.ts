import mongoose from 'mongoose';
import { emailRegex, phoneRegex } from '../utils/validator';

const userSchema = mongoose.Schema({
  role: { type: Number, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phone: {
    type: String,
    require: true,
    unique: true,
    match: phoneRegex
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: emailRegex
  }
});

export const User = mongoose.model('User', userSchema);