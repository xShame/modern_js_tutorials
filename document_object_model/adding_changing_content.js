const para = document.querySelector("p");

// para.innerHTML += " the ninjas are awesome!";
// console.log(para.innerHTML);

const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerHTML);
//   para.innerHTML += " new text";
// });

const content = document.querySelector(".content");
// content.innerHTML += ` <h2>This is a new H2 </h2>`;

const people = ["mario", "luigi", "yoshi"];

people.map((person) => {
  content.innerHTML += `
    <ul>
        <li>${person}</li>
    </ul>
  `;
});
