import { addTitle, styleBody, contact } from "./dom";
import users, { getPremUsers } from "./data";

// console.log("index file");
// addTitle("hello world from the dom file");
// styleBody();
// console.log(contact);
const premUsers = getPremUsers(users);
console.log(premUsers);
console.log(users);

console.log("test");
