// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   console.log("you clicked me");
// });

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    e.target.style.display = "none";
  });
});
