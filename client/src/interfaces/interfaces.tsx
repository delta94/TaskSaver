interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  username?: string;
  role? : number;
}

interface Task {
  __v?: string;
  _id?: string;
  userId?: any;
  createdAt?: any;
  title: string;
  description: string;
  content: string;
}

export type { User, Task };