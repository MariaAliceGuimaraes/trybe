let info={
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
};

let info2={
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear mountain, Dell's Four Color Comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "sim",
}

let infoJuntas={  

}

for (let i in info) {
    if (i == "recorrente" && info[i] == "sim" && info2[i] == "sim") {
        infoJuntas[i] = "Ambos recorrentes"
    }
    else {
        infoJuntas[i] = info[i] + " e " + info2[i]
    }
    console.log(infoJuntas[i])
}
