/// <reference lib="webworker" />

import { TaskType } from 'src/app/types/types';

addEventListener('message', (e) => {
  const orderProp = e.data[0];
  let taskArr = e.data[1];
  const searchKeyword = e.data[2].toLowerCase().trim();

  if (searchKeyword) {
    taskArr = taskArr.filter(
      (item: TaskType) =>
        item.title.toLowerCase().includes(searchKeyword) &&
        item.status == orderProp
    );
  }

  console.log('Worker',e.data)

  postMessage(taskArr);
});
