// for loops

// for(let i = 0; i < 5; i++){
// 	// code block
// 	console.log(`in loop ${i}`);
// }
// console.log('loop finished..');

const names = ['mommy','kanna','seijuro','daddy'];

let body = document.querySelector('body');
for(let i = 0; i < names.length; i++){
	// console.log(names[i]);
	let html = `<div>${names[i]}</div>`;
	body.innerHTML += html;
}
