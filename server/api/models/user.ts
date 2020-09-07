import mongoose from "mongoose";
import { emailRegex } from "../utils/validator";
import { User as IUser } from "../interfaces/interfaces";

const taskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date },
  status: { type: Number, enum: [0, 1] }
});

const userSchema = new mongoose.Schema({
  organizationId: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "Organization" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: emailRegex },
  role: { type: Number, enum: [0, 1], required: true },
  tasks: [taskSchema]
});

export const User = mongoose.model<IUser>("User", userSchema);