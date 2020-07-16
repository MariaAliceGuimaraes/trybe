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