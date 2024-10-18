export type TaskStatus =
  | 'To Do'
  | 'In Progress'
  | 'Completed'
  | 'On Hold'
  | 'Canceled'
  | 'Pending Review'
  | 'Deferred';

export type TaskType = {
  title: string;
  description: string;
  date: string;
  status: TaskStatus;
};

export type AuthType = {
  email: string;
  password: string;
  confirmPass: string;
};

export type User = {
  email: string;
  password: string;
};
