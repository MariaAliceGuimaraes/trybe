let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total;
let soma;

soma=numbers.reduce((total, i) => total + i)

total=soma/numbers.length

if (total > 20) {
    console.log("Valor maior que 20")
}
else if (total <= 20) {
    console.log("Valor menor ou igual a 20")
}
