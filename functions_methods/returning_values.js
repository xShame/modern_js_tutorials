// returning values

// const speak = function(name ='xShame',time='evening'){
// 	console.log(`good ${time} ${name} `);
// }


const calArea = function(radius){
	return 3.14 * radius**2;
}

const area = calArea(5);
console.log(area);

// this area is just a test.
const calcVol = function(area){
	return area * 2;
}
console.log(calcVol(area));