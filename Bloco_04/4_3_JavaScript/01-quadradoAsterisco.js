let n=5;

//for de fora define quantas vezes vai imprimir,ou seja, a quantidade de linhas.

for (let i=0; i<n; i+=1) {

    // str definido dentro do for, pois no for de "fora" precisa ter o valor zero sempre que recomecar. o str serve so para adicionar na linhas. E essa linha sera repetida pelo for de fora.

    let str="";

    //for de dentro define quantos asteriscos vao ser adicionados. por isso o str foi definido so aqui dentro.

    for(let j=0; j<n; j+=1) {

        str=str+"*";

    }

    console.log(str)
}
