import { Injectable } from '@angular/core';
import { TaskType } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class LocalTaskService {
  taskList: TaskType[] = [];

  constructor() {}

  getTaskList() {
    const task = localStorage.getItem('tasklist');
    if (task) {
      this.taskList = JSON.parse(task);
    }
    return this.taskList;
  }
  getTaskById(id: number) {
    this.getTaskList();
    return this.taskList[id];
  }
  postTask(task: TaskType) {
    this.getTaskList();
    this.taskList.push(task);
    this.saveToLocalStorage();
  }

  deleteTask(id: number) {
    this.getTaskList();
    this.taskList.splice(id, 1);
    this.saveToLocalStorage();
  }
  editTask(id: number, task: TaskType) {
    this.getTaskList();
    if (this.taskList[id]) {
      this.taskList[id] = task;
      this.saveToLocalStorage();
    }
  }
  saveToLocalStorage() {
    localStorage.setItem('tasklist', JSON.stringify(this.taskList));
  }
}
