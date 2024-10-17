import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  ngOnInit() {
    console.log('dsdsds')
    this.startWebWorker();
  }

  startWebWorker() {
    if (typeof Worker !== 'undefined') {
      // Создаем новый воркер
      const worker = new Worker(new URL('./about.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log('Данные от воркера:', data);
      };
      worker.postMessage(2000000);
    } else {
      // Браузер не поддерживает Web Workers
      console.log('Web Worker не поддерживается');
    }
  }
  
}
