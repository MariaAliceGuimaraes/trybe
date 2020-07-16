//01 funcao que verifica palindromos

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


//03 funcao que recebe array e retorna o indice de menor valor

let numbers2=[2,4,6,7,10,0,-3];
let menor=0;

function verificaMenor(numbers2){
    for (let i=0; i<numbers2.length; i+=1){
        if (numbers2[i]<menor){
            menor=numbers2[i];
        }
    }
    
    console.log(numbers2.indexOf(menor));
}

verificaMenor(numbers2);

// Funcao que recebe array de nomes e retorne o nome com maior quantidade de caracteres

let nomes=["Jose","Lucas", "Nadia", "Fernanda", "Cairo", "Joana"];
let nomeMaior="";

function maiorNome(nomes){
    for (let i=0; i<nomes.length; i+=1){
        if (nomes[i].length>nomeMaior.length){
            nomeMaior=nomes[i];
        }
    }
    console.log(nomeMaior)
}

maiorNome(nomes);
