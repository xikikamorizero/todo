import { Injectable } from '@angular/core';
import { TaskStatus } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  status: (TaskStatus | 'ALL')[] = [
    'ALL',
    'To Do',
    'Pending Review',
    'On Hold',
    'In Progress',
    'Deferred',
    'Completed',
    'Canceled',
  ];
  constructor() {}
}
