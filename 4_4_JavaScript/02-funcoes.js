//funcao que verifica palindromos

let palavra="desenvolvimento";

function verificaPalindromo(palavra){
    if (palavra === palavra.split("").reverse().join("")){
        console.log("true")
    }
    else {
        console.log("false")
    }
}

verificaPalindromo(palavra);


//funcao que recebe array e retorna o indice de maior valor

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
