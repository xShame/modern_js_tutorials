const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new todo";
  //   ul.prepend(li);
  ul.append(li);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log(e);
//     // console.log(e.target);
//     console.log("event in LI");
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  //   console.log("event in UL");
  //   console.log(e.target);
  //   e.target.remove();
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
