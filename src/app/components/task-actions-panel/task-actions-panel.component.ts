import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalTaskService } from 'src/app/service/local-task.service';
import { StatusService } from 'src/app/service/status.service';
import { TaskStatus } from 'src/app/types/types';

@Component({
  selector: 'app-task-actions-panel',
  templateUrl: './task-actions-panel.component.html',
  styleUrls: ['./task-actions-panel.component.less'],
})
export class TaskActionsPanelComponent {
  worker: Worker | undefined;

  form: FormGroup = new FormGroup({
    search_keyword: new FormControl(''),
    filter: new FormControl<TaskStatus>('To Do'),
  });

  constructor(
    protected statusService: StatusService,
    private localTaskService: LocalTaskService
  ) {}

  ngOnInit() {
    this.startWebWorker();
  }

  startWebWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./task-actions-panel.worker-work', {
        type: 'module',
      });
      worker.onmessage = ({ data }) => {
        console.log(data);
      };
      worker.postMessage(2000000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
// ngOnInit(): void {
//   if (typeof Worker !== 'undefined') {
//     this.worker = new Worker(new URL('./worker', import.meta.url));

//     this.worker.onmessage = ({ data }) => {
//       // this.localTaskService.taskList = data;
//       console.log(data);
//     };
//   } else {
//     console.error('Web Workers не поддерживаются в вашем браузере.');
//   }
// }
// if (this.worker) {
//   this.worker.postMessage([
//     this.form.value.filter,
//     this.localTaskService.taskList,
//     this.form.value.search_keyword,
//   ]);
// }
