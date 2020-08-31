
window.onload=function(){

    if(localStorage.length==0){

        document.body.style.backgroundColor="white";
        document.body.style.color="color";
        document.body.style.fontSize="15px";
        document.body.style.fontFamily="Lato";
        document.body.style.lineHeight="medium";   

    }
    else{

        document.body.style.backgroundColor=localStorage.getItem("background-color");
        document.body.style.color=localStorage.getItem("text-color");
        document.body.style.fontSize=localStorage.getItem("font-size");
        document.body.style.fontFamily=localStorage.getItem("font-family");
        document.body.style.lineHeight=localStorage.getItem("line-height");   

    }
}





//background-color buttons

function changeColor(color){
    document.body.style.backgroundColor=color;
    localStorage.setItem("background-color", color);
}

//

let backgroundColorButtonWhite = document.getElementById("white");
backgroundColorButtonWhite.addEventListener("click", function(){
    changeColor("white");
})

//

let backgroundColorButtonBeige = document.getElementById("beige");
backgroundColorButtonBeige.addEventListener("click", function(){
    changeColor("rgb(150, 144, 127)");
})

//

let backgroundColorButtonGrey = document.getElementById("grey");
backgroundColorButtonGrey.addEventListener("click", function(){
    changeColor("grey");
})

//

let backgroundColorButtonBlack = document.getElementById("black");
backgroundColorButtonBlack.addEventListener("click", function(){
    changeColor("black");
})

//text-color buttons

function changeTextColor(color){
    document.body.style.color=color;
    localStorage.setItem("text-color", color);
}

//

let TextColorButtonWhite = document.getElementById("whitetext");
TextColorButtonWhite.addEventListener("click", function(){
    changeTextColor("white");
})

//

let TextColorButtonGrey = document.getElementById("greytext");
TextColorButtonGrey.addEventListener("click", function(){
    changeTextColor("grey");
})

//

let TextColorButtonBeige = document.getElementById("beigetext");
TextColorButtonBeige.addEventListener("click", function(){
    changeTextColor("rgb(150, 144, 127)");
})

//

let TextColorButtonBlack = document.getElementById("blacktext");
TextColorButtonBlack.addEventListener("click", function(){
    changeTextColor("black");
})

//font-size button

function changeFontsize(size){
    document.body.style.fontSize=size;
    localStorage.setItem("font-size", size);
}

//

let smallFontSize = document.getElementById("small-font");
smallFontSize.addEventListener("click", function(){
    changeFontsize("15px");
})

//

let mediumFontSize = document.getElementById("medium-font");
mediumFontSize.addEventListener("click", function(){
    changeFontsize("17px");
})

//

let largeFontSize = document.getElementById("large-font");
largeFontSize.addEventListener("click", function(){
    changeFontsize("19px");
})

//font-family button

function changeFontFamily(fontFamily){
    document.body.style.fontFamily=fontFamily;
    localStorage.setItem("font-family", fontFamily);
}

let fontFamilyLato = document.getElementById("Lato");
fontFamilyLato.addEventListener("click", function(){
    changeFontFamily('Lato');
})

//

let fontFamilyAllura = document.getElementById("Allura");
fontFamilyAllura.addEventListener("click", function(){
    changeFontFamily('Allura');
})

//

let fontFamilyBioRhyme = document.getElementById("BioRhyme");
fontFamilyBioRhyme.addEventListener("click", function(){
    changeFontFamily('BioRhyme');
})

//line-height buttons

function changelineHeight(height){
    document.body.style.lineHeight=height;
    localStorage.setItem("line-height", height);
}

//

let smallLineHeight = document.getElementById("small-line-height");
smallLineHeight.addEventListener("click", function(){
    changelineHeight('16px');
})

//

let mediumLineHeight = document.getElementById("medium-line-height");
    mediumLineHeight.addEventListener("click", function(){
    changelineHeight('19px');
})

//

let largeLineHeight = document.getElementById("large-line-height");
largeLineHeight.addEventListener("click", function(){
    changelineHeight('22px');
})
