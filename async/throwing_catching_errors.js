// Async & Await

// async will always return promise
const getTodos = async () => {
  const response = await fetch("todos/sample2.json"); // - it stop it from assigning a value to the variable until the promise has been resolved
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
