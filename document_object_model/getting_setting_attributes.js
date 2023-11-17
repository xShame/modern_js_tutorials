const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.youtube.com");
link.innerText = "Where you can watch cool videos...";

const msg = document.querySelector("p");

console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");
msg.setAttribute("style", "color: green;");
