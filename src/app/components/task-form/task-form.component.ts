import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StatusService } from 'src/app/service/status.service';
import { TaskStatus, TaskType } from 'src/app/types/types';

@Component({
  standalone: true,
  selector: 'app-task-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less'],
})
export class TaskFormComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title?: string;
  @Input() description?: string;
  @Input() date?: string;
  @Input() status?: TaskStatus;
  @Output() taskSubmitted = new EventEmitter<TaskType>();

  form!: FormGroup;

  currentDate = new Date();

  constructor(protected starusService: StatusService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.title ? this.title : '', Validators.required),
      description: new FormControl(
        this.description ? this.description : '',
        Validators.required
      ),
      date: new FormControl(this.date ? this.date : this.currentDate.toISOString().slice(0, 10)),
      status: new FormControl<TaskStatus>(this.status ? this.status : 'To Do'),
    });

    console.log(new Date().valueOf)
  }

  onSubmit() {
    this.taskSubmitted.next(this.form.value);
  }
}
