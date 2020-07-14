let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

//Ordene o array numbers em ordem crescente e imprima seus valores;

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers)

//Ordene o array numbers em ordem decrescente e imprima seus valores;


numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers)

//Criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. 

//Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 

//Faça isso utilizando o for e o método push.



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let i = 0; i < numbers.length-1; i++) {
    newNumbers.push(numbers[i]*numbers[i+1]);
}

newNumbers.push(numbers[numbers.length-1]*2);

console.log(newNumbers); 

