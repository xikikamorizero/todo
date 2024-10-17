import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { TaskType } from 'src/app/types/types';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TaskFormComponent],
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.less'],
})
export class EditTaskComponent implements OnInit, OnDestroy {
  taskId: number = -1;
  task?: TaskType;
  private routeSubscription: Subscription = new Subscription();
  constructor(
    protected routerParams: ActivatedRoute,
    private localTaskService: LocalTaskService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.routeSubscription = this.routerParams.params.subscribe((res) => {
      this.taskId = res['id'];
    });

    this.task = this.localTaskService.getTaskById(this.taskId);
    console.log(this.task);
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  editTask(value: TaskType) {
    this.localTaskService.editTask(this.taskId, value);
    this.router.navigate(['/']);
  }
}
