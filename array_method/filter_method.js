const score = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = score.filter((scores) => {
//   return scores > 20;
// });

// console.log(filteredScores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumNumbers = users.filter((user) => !user.premium);
console.log(premiumNumbers);
