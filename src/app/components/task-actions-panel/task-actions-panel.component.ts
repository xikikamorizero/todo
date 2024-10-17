import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { StatusService } from 'src/app/service/status.service';
import { TaskStatus, TaskType } from 'src/app/types/types';

type NewStatus =
  | 'To Do'
  | 'In Progress'
  | 'Completed'
  | 'On Hold'
  | 'Canceled'
  | 'Pending Review'
  | 'Deferred'
  | 'ALL';

@Component({
  selector: 'app-task-actions-panel',
  templateUrl: './task-actions-panel.component.html',
  styleUrls: ['./task-actions-panel.component.less'],
})
export class TaskActionsPanelComponent {
  @Output() taskSearch = new EventEmitter<{
    search_keyword: string;
    filter: TaskStatus;
  }>();
  form: FormGroup = new FormGroup({
    search_keyword: new FormControl(''),
    filter: new FormControl<NewStatus>('ALL', Validators.required),
  });

  constructor(protected statusService: StatusService) {}

  filterTask() {
    this.taskSearch.next(this.form.value);
  }
}
