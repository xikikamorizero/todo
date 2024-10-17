import { Component, OnInit } from '@angular/core';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { TaskType } from 'src/app/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor(protected taskService: LocalTaskService) {}
  ngOnInit(): void {
    this.taskService.getTaskList();
  }
}
