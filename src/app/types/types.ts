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
