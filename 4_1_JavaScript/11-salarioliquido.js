let salario=3000;
let salariobase;
let salarioliquido;
let percent;
let aliquota;


//INSS

if (salario<=1556.94){
    salariobase=salario-salario*0.08
}
else if (salario>=1556.95 && salario<=2594.92){
    salariobase=salario-(salario*0.09)
}
else if (salario>=2594.93 && salario<=5189.82){
    salariobase=salario-(salario*0.11)
}
else if (salario>=5189.83){
    salariobase=salario-570.88
}

//IR

if (salariobase<=1903.98){
    salarioliquido=salariobase
}
else if (salariobase>=1903.99 && salariobase<=2826.65){
    percent=0.075;
    aliquota=142.80;
}
else if (salariobase>=2826.66 && salariobase<=3751.05){
    percent=0.15;
    aliquota=354.80;
}
else if (salariobase>=3751.06 && salariobase<=4664.68){
    percent=0.225;
    aliquota=636.13;
}
else if (salariobase>=3751.06 && salariobase<=4664.68){
    percent=0.275;
    aliquota=869.36;
}

salarioliquido=salariobase-((salariobase*percent)-aliquota)

console.log(salarioliquido)
