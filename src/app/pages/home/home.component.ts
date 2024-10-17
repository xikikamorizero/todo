import { Component, OnInit } from '@angular/core';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { TaskStatus, TaskType } from 'src/app/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  tasklist: TaskType[] = [];
  worker?: Worker;
  constructor(protected taskService: LocalTaskService) {}
  ngOnInit(): void {
    this.tasklist = this.taskService.getTaskList();

    this.worker = new Worker(new URL('./filter.worker', import.meta.url));
    if (this.worker) {
      this.worker.onmessage = ({ data }: any) => {
        this.tasklist = data;
      };
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasklist = this.taskService.getTaskList();
  }

  filterTask(data: { search_keyword: string; filter: TaskStatus }) {
    if (this.worker) {
      this.worker.postMessage([
        data.filter,
        this.taskService.taskList,
        data.search_keyword,
      ]);
    }
  }
}
