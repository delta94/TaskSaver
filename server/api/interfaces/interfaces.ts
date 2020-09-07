import mongoose from "mongoose";

export interface Organization extends mongoose.Document {
  name: string;
}

export interface User extends mongoose.Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  role?: number;
  organizationId?: string;
  tasks?: Task[];
}

export interface Task {
  _id?: string;
  createdAt?: Date;
  title: string;
  description: string;
  status: number;
  user: { _id: string, email: string; };
}