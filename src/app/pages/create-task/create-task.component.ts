import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { TaskType } from 'src/app/types/types';

@Component({
  standalone:true,
  selector: 'app-create-task',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,TaskFormComponent],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less'],
})
export class CreateTaskComponent {
  constructor(
    private localTaskService: LocalTaskService,
    private router: Router
  ) {}
  postTask(value: TaskType) {
    this.localTaskService.postTask(value);
    this.router.navigate(['/']);
  }
}
