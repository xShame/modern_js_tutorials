// Timestamps

const before = new Date("Febuary 1 2019 7:30:59");
const now = new Date();

// timestamps
console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

// converting timestamps into date object
// const timestamps = 1675938474990;
const timestamps = 1664513562498;
console.log(new Date(timestamps));
