const content = document.querySelectorAll("p");

// console.log(content.classList);
// content.classList.add("test");
// content.classList.remove("test");

// console.log(content);

content.forEach((param) => {
  console.log(param.innerText);
  if (param.textContent.includes("success")) {
    param.classList.add("success");
  } else if (param.textContent.includes("error")) {
    param.classList.add("error");
  } else {
    param.style.color = "blue";
  }
});

const title = document.querySelector(".title");
// console.log(title);
// title.classList.toggle("test");
// title.classList.toggle("test");

title.addEventListener("mouseover", (event) => {
  //   console.log(event.toElement.classList);
  event.toElement.classList.toggle("test");
});
