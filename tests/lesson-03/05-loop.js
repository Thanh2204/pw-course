//Ex1
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

//Ex2
for (let i = 2; i <= 9; i++)
  for (let j = 1; j <= 9; j++) console.log(`${i} x ${j} = ${i * j}`);

//Ex3

let arr = [];

let i = 1;
while (i < 100) {
  arr.push(i);
  i += 2;
}
console.log(arr);

//Ex4

for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

//Ex5

const revenue = [
  { month: "1", amount: 1000 },
  { month: "2", amount: 1500 },
  { month: "3", amount: 2000 },
  { month: "4", amount: 2500 },
  { month: "5", amount: 3000 },
  { month: "6", amount: 3500 },
  { month: "7", amount: 4000 },
  { month: "8", amount: 4500 },
  { month: "9", amount: 5000 },
  { month: "10", amount: 5500 },
  { month: "11", amount: 6000 },
  { month: "12", amount: 6500 },
];

let totalRevenue = 0;

for (let i = 0; i < revenue.length; i++) {
  totalRevenue += revenue[i].amount;
}
console.log(totalRevenue);

function sum(a,b){
  return a+b;
}