let peca=prompt("Escolha uma peca de xadrez")

if (peca === "king"||"king"||"KING") {
    console.log("King can move exactly one square horizontally, vertically, or diagonally.")
}
else if (peca === "Queen"||"queen"||"QUEEN") {
    console.log("Queen can move any number of vacant squares diagonally, horizontally, or vertically.")
}
else if (peca === "Rook"||"rook"||"ROOK") {
    console.log("Rook can move any number of vacant squares vertically or horizontally. It also is moved while castling.")
}
else if (peca === "Bishop"||"bishop"||"BISHOP") {
    console.log("Bishop can move any number of vacant squares in any diagonal direction.")
}
else if (peca === "Knight"||"knight"||"KNIGHT") {
    console.log("Knight can move one square along any rank or file and then at an angle. The knight´s movement can also be viewed as an “L” or “7″ laid out at any horizontal or vertical angle.")
}
else { 
    console.log("Error: This is not a known chess piece.")
}

