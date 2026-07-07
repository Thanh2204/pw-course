//Ex1

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(2, 3));

//Ex2
function findMin(a,b,c){
    return Math.min(a,b,c);
}

console.log(findMin(5, 10, 3));
console.log(findMin(2, 8, 4));

//Ex3

function getTopStudent(students, threshold) {
    return students.filter(student => student.score > threshold);
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 95 }
]

console.log(getTopStudent(students, 90));

//Ex4

function calculateInterst(principal,rate,years) {
    return principal + principal*rate*years/1000;
}

console.log(calculateInterst(1000, 5, 2));
