class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} just a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("xshame", "xshame@gmail.com", "black-belt-ninja");

console.log(userOne, userTwo, userThree);
userOne.login().logout();
userTwo.login().logout();
userOne.login().incScore().incScore().logout();

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);

console.log(users);
