// rest parameter
const double = (...nums) => {
  //   console.log(nums);

  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);

console.log(result);

// spread syntax(arrays)
const people = ["shaun", "ryu", "ken"];
console.log(...people);
const members = ["mario", "chun-li", ...people];

console.log(members);

// spread syntax(objects)

const person = {
  name: "toad",
  age: 5,
  jobs: "mario character",
};

const personClone = { ...person, location: "philippines" };

console.log(personClone);
