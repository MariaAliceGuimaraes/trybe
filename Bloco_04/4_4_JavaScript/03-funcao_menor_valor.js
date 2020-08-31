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