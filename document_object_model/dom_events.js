const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("Oi! my content is copyright");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  //   console.log(e);
  //   console.log(`offsetX: ${e.offsetX}, offsetY: ${e.offsetY}`);

  box.textContent = ` x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e);
  console.log(e.pageX, e.pageY);
});
