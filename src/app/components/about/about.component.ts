import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  ngOnInit() {
    const worker = new Worker(new URL('./test232.worker', import.meta.url));

    worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    };

    worker.postMessage('hello');
  }
}
