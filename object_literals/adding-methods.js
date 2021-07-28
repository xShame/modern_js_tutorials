// object literals

let user = {
	// key value pair
//	key: "value",  
	name: "xShame",
	age: 30,
	email: 'xShame@email.com',
	location: 'quezon city',
	blogs: ['why mac & cheese rules','10 things to make with mamite'],
	login: function(){
		console.log('the user logged in');
	},
	logout: function(){
		console.log('the user logged out');
	},
	logBlogs(){
		console.log('this user has written the following blogs:');
		// for(let i=0; i < this.blogs.length; i++){
		// 	console.log(this.blogs[i]);
		// }
		
		// this.blogs.forEach(blog =>{
		// 	console.log(blog);
		// })
		
		this.blogs.map(blog =>{
			console.log(blog)
		})
	}
};
// user.login();
// user.logout();
user.logBlogs();