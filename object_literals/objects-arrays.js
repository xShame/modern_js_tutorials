// object literals
// const blogs = [
//   { title: "why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with mamite", likes: 50 },
// ];
// console.log(blogs);

let user = {
  // key value pair
  //	key: "value",
  name: "xShame",
  age: 30,
  email: "xShame@email.com",
  location: "quezon city",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make with mamite", likes: 50 },
  ],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs() {
    console.log("this user has written the following blogs:");
    this.blogs.map((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};
user.logBlogs();
