//05 funcao que recebe um array de inteiros e retorne o inteiro que mais se repete

let numbers3=[2,3,2,5,8,2,3];


function maisRepetido(numbers3){
    let maior=0;
    let objeto={};
    let numeroRepetido;

    for (let i in numbers3){
        let n = numbers3[i];

        if (objeto[n]){
            objeto[n]+=1
        }
        else {
            objeto[n]=1
        }
    }

    for (let i in objeto){
        if (objeto[i]>maior){
            maior=objeto[i];
            numeroRepetido=i;
        }
    }
    console.log(numeroRepetido)
}

maisRepetido(numbers3);
