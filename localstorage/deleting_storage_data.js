// deleting data from the local storage
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);
let name = localStorage.getItem("name");
// localStorage.removeItem("name");

// will remove all in the list of localstorage
localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);
