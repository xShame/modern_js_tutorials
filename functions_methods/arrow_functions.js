// regular function
// const calArea = function(radius){
// 	return 3.14 * radius**2;
// }

// arrow function
// const calcArea = radius =>{
// 	return 3.14 * radius**2;
// }

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);

// =====  regular function ======
// const greet = function(){
// 	console.log("hello, world!");
// }

// const bill = function(products,tax){
// 	let total = 0;
// 	for(let i=0; i < products.length; i++){
// 		total += products[i] + products[i] * tax;
// 	}
// 	return total;
// }
// console.log(bill([10,15,30],0.2));

// ===== arrow function ========
// const greet = () => console.log("hello, world!");
// greet()

const bill = (products,tax) =>{
	let total = 0;
	for(let i=0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
}
console.log(bill([10,15,30],0.2));