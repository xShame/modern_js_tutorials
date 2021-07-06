// else if statments


// const ninjas = ['shaun','ryu','chun-li','yoshi'];

// if (ninjas.includes('chun-li')) {
// 	console.log(true)
// } else{
// 	console.log(false);
// }

const password = 'p@$$';

if (password.length >= 12) {
	console.log('that password is might strong');
} else if (password.length >= 8) {
	console.log('that password is long enough!');
} else{
	console.log('that password is not long enough!');
}