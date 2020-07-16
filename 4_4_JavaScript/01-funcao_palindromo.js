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
