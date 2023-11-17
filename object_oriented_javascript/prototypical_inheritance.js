// constructor function

function User(username, email) {
  this.username = username;
  this.email = email;
}

// prototype
User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = this.title;
}

Admin.prototype = Object.create(User, prototype);

Admin.prototype.deleteUser = function () {
  // delete a user
};
const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("xshame", "xshame@gmail.com", "black-belt-ninja");

console.log(userOne, userTwo, userThree);
userOne.login().logout();
