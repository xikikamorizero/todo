
/// <reference lib="webworker" />
addEventListener('message', ({ data }) => {
  const response = `Ответ от воркера: ${data}`;
  postMessage(response);
});
// onmessage = (e) => {
//   // const orderProp = e.data[0];
//   // let taskArr = e.data[1];
//   // const searchKeyword = e.data[2].toLowerCase().trim();

//   // if (searchKeyword) {
//   //   taskArr = taskArr.filter((item:TaskType) =>
//   //     item.title.toLowerCase().includes(searchKeyword)
//   //   );
//   // }
//   // console.log('dsdsds')

  
//   postMessage('Hello');
// };


