const userOne = {
  username: "ryu",
  email: "ryu@gmail.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: "chun-li",
  email: "chun-li@gmail.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};
console.log(userTwo.email, userTwo.username);
userOne.login();

const userThree = new User("xshame@email.com", "xshame");
