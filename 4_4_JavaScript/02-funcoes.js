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

//04 Funcao que recebe array de nomes e retorne o nome com maior quantidade de caracteres

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

//05 funcao que recebe um array de inteiros e retorne o inteiro que mais se repete

let numbers3=[2,3,2,5,8,2,3];
let repetido=0;

function maisRepetido(numbers3){
    for (let i=0; i<numbers3.length; i+=1){
        if(numbers3[i]==numbers3[i+1]){
            repetido=numbers3[i+1];
        }
    }    
    console.log(repetido)
}

maisRepetido(numbers3);


//06 funcao que receba um numero inteiro N e retorne o somatorio de todos os numeros de 1 ate N

let n=5;
let total=0;

function somatoriaN(n){
    for(let i=1;i<=n; i+=1){
        total=total+i;
    }
    console.log(total);
}

somatoriaN(n);


//07 funcao que receba uma "string word" e outra "string ending". Verifique se a string ending é o final da string word. Considere que a string ending sempre sera menor que a string word.
//valor de teste trybe ("trybe" "be"). valor esperado no retorno da funcao "true/false".

strWord="trybe";
strEnding="be";

function verificaFimPalavra(strWord,strEnding){
    if(strWord.slice(-strEnding.length)===strEnding){
        console.log("true");
    }
    else {
        console.log("false");
    }
}

verificaFimPalavra(strWord,strEnding);
