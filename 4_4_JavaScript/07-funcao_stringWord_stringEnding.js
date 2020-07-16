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
