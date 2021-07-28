// object literals

let user = {
	// key value pair
//	key: "value",  
	name: "xShame",
	age: 30,
	email: 'xShame@email.com',
	location: 'quezon city',
	blogs: ['why mac & cheese rules','10 things to make with mamite']
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-lee';
console.log(user['name']);


console.log(typeof user);