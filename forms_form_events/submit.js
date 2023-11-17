const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  // console.log(form.username.value);

  // Validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "úsername must contain letters only & be between 6 & 12 characters long";
  }
});

// testing RegEx
// const username = "ninjas";
// contain // in between
// const pattern = /^[a-z]{6,}$/;

// let results = pattern.test(username);

// if (results) {
//   console.log("regex test passed :)");
// } else [console.log("regex test failed :(")];
// // console.log(results);

// let result = username.search(pattern);
// console.log(result);

// BASIC FORM VALIDATION

form.username.addEventListener("keyup", (e) => {
  console.log(e);
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
    console.log("passed");
  } else {
    console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
