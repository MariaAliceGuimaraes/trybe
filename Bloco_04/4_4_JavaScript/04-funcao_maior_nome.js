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
