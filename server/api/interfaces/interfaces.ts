export interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  username?: string;
  role?: number;
  _id?: string;
}

export interface Task {
  createdAt?: any;
  _id?: string;
  userId: any;
  title: string;
  description: string;
  content: string;
}