const getTodos = (resouce) => {
  return new Promise((resolve, reject) => {
    // XMLHTTPREQUEST
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState);
      // checking the status
      if (request.readyState === 4 && request.status === 200) {
        //   console.log(request, request.responseText)

        // JSON Object
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resouce");
      }
    });
    //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resouce);
    request.send();
  });
};

getTodos("todos/sample.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/sample1.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/sample2.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
