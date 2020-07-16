//02 funcao que recebe array e retorna o indice de maior valor

let numbers=[2,3,6,7,10,1];
let maior=0;

function verificaMaior(numbers){
    for (let i=0; i<numbers.length; i+=1){
        if (numbers[i]>maior){
            maior=numbers[i];
        }
    }
    
    console.log(numbers.indexOf(maior));
}



verificaMaior(numbers);
