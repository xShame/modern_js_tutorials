const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninjas = {};

ninjas.age = 30;
ninjas["belt"] = "orange";
ninjas["belt"] = "black";

ninjas[symbolOne] = "ryu";
ninjas[symbolTwo] = "toad";

console.log(ninjas);
