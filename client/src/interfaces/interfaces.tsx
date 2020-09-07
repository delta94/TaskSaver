interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  role?: number;
  _id?: string;
  organizationId?: string;
  tasks?: Task[];
}

interface Task {
  __v?: string;
  _id?: string;
  user: { _id: string, email: string; };
  createdAt?: any;
  status?: number;
  title: string;
  description: string;
}

interface Organization {
  _id?: string;
  name: string;
}

export type { User, Task, Organization };