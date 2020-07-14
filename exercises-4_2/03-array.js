let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total;

total=numbers.reduce((total, i) => total + i)

console.log(total/numbers.length)
