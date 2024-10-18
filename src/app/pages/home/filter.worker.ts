/// <reference lib="webworker" />

import { TaskType } from 'src/app/types/types';

addEventListener('message', (e) => {
  console.log(e.data)
  const orderProp: string = e.data[0];
  let taskArr = e.data[1];
  const searchKeyword = e.data[2].toLowerCase().trim();

  taskArr = taskArr.filter((item: TaskType) => {
    const keyword = item.title.toLowerCase().includes(searchKeyword);
    if (orderProp === 'ALL') {
      return keyword;
    }

    return keyword && item.status === orderProp;
  });

  console.log('Worker', e.data);

  postMessage(taskArr);
});
