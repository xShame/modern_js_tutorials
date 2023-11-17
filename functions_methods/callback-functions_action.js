// get reference from the ul

let ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;
people.forEach(function (person) {
  // create HTML template
  html += `<li style:"color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
