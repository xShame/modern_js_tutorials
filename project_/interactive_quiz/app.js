const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answers, index) => {
    if (answers === correctAnswers[index]) {
      score += 25;
      // result.classList.remove("d-none");

      // console.log(result.childNodes[1].childNodes[1].firstElementChild);
      // result.childNodes[1].childNodes[1].firstElementChild.textContent =
      //   score += 25;
    }
  });
  // console.log(score);

  // show results
  scrollTo(0, 0);

  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object (Global object)
// console.log("hello world");
// console.log(document.querySelector("form"));
// alert("hello, world!");

// setTimeout(() => {
//   alert("hello, world!");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("hello, world");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
