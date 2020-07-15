//OBSERVACOES

//01 for de fora define quantas vezes vai imprimir,ou seja, a quantidade de linhas.

//02 str definido dentro do for, pois no for de "fora" precisa ter o valor zero sempre que recomecar. o str serve so para adicionar na linhas. E essa linha sera repetida pelo for de fora.

//03 for de dentro define quantos asteriscos vao ser adicionados. por isso o str foi definido so aqui dentro.

//04 foi feita uma condicao dentro do for de dentro para edefinir onde vao ser inseridos os espacos, ou os *. O que essa condicao diz é: quando j(numero da posicao do item na linha) foi maior ou igual a n-1-i (-i pq i como eh referente a posicao da linha na vertical, é um numero que vai aumentando de acordo com a passagem das linhas, entao subtraimos ele pq ele vai definir a quantidade de espacos vao ser ocupados por * e quanto vao ser por _). So eh necessaario usar o -1 pois a contagem do programa inicia do 0 (indexacao da linguagem se inicia no 0)
    
//05 exemplo
//  _ _ * _ _ =  5-1-0=4 espacosVazios (i=0)(n=5)
//  _ * * * _ =  5-1-2=2 espacosVazios (i=1)(n=5)
//  * * * * * =  5-1-4=0 espacosVazios (i=2)(n=5)


let n=5;


for (let i=0; i<n; i+=1) {

    //01
    //02

    let str="";
    let metade=Math.floor(n/2);

    if (metade-i<0){
        break;
    }

    //03
    //03.2 o if funciona como filtro para o "for" ser usado apenas quando i for par, que vai ser quando o numero de asteriscos vai ser impar!

    

        for(let j=0; j<n; j+=1) {

            //04
            //05

            if (j>=metade-i && j<=metade+i) {
                str=str+"*";
            }

            else {
                str=str+" ";
            }
        }

        console.log(str)

}
