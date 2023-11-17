// console.log(1);
// console.log(2);

// // synchronous
// setTimeout(() => {
//   console.log("callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);

const getTodos = (resouce, callback) => {
  // XMLHTTPREQUEST
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    // checking the status
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request, request.responseText)

      // JSON Object
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      //   console.log("could not fetch the data");
      callback("could not fetch the data", undefined);
    }
  });
  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", resouce);
  request.send();
};

// Callback function Hell
getTodos("todos/sample.json", (err, data) => {
  //   console.log("callback fired");
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data);
  //   }
  console.log(data);
  getTodos("todos/sample1.json", (err, data) => {
    console.log(data);
    getTodos("todos/sample2.json", (err, data) => {
      console.log(data);
    });
  });
});
