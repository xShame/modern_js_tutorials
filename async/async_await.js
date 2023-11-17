// Async & Await

// async will always return promise
const getTodos = async () => {
  const response = await fetch("todos/sample2.json"); // - it stop it from assigning a value to the variable until the promise has been resolved
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log(err));
// fetch("todos/samples2.json") // - this is a promise
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
