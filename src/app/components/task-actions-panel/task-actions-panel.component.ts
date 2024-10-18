import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusService } from 'src/app/service/status.service';
import { TaskStatus } from 'src/app/types/types';
import { debounceTime } from 'rxjs/operators';

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

  constructor(protected statusService: StatusService) {
    // this.form.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
    //   this.filterTask(value);
    //   console.log('Cvtyf', this.form.value);
    // });

    this.form
      .get('search_keyword')
      ?.valueChanges.pipe(debounceTime(600))
      .subscribe((value) => {
        this.filterTask({
          search_keyword: value,
          filter: this.form.get('filter')?.value,
        });
      });

    this.form.get('filter')?.valueChanges.subscribe((value) => {
      this.filterTask({
        search_keyword: this.form.get('search_keyword')?.value,
        filter: value,
      });
    });
  }

  filterTask(value: { search_keyword: string; filter: TaskStatus }) {
    this.taskSearch.next(value);
  }
}
