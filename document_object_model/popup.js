const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "block";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});
