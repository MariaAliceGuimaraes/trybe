
let arrayEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];

function createStates (){

    for (let i=0; i<arrayEstados.length; i+=1){

        const estado = document.createElement("option");

        estado.innerText = arrayEstados[i];

        document.getElementById("estados").appendChild(estado);
    }
}

window.onload = function(){
    createStates();
}





function sendForm(event) {
    event.preventDefault();
  }
  window.onload = function () {
    createStates();
    document.getElementById('send').addEventListener('click', sendForm);
  }
  