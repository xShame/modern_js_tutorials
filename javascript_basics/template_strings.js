// template strings
const title = 'Best reads of 2021';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// tempalte string/template literals way
let result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let body = document.querySelector('body');
let html = `
	<h2>${title}</h2>
	<p>By ${author}</p>
	<span>This blog has ${likes} likes</span>
`	
body.innerHTML += html;

console.log(body);