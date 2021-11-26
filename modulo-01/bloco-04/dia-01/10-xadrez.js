const peca = "rook";

switch (peca.toLowerCase()) {
  case "pawn":
    console.log("One space forwards");
    break;
  case "rook":
    console.log("Infinite spaces in cardinal directions");
    break;
  case "knight":
    console.log("L-shaped movement");
    break;
  case "bishop":
    console.log("Infinite spaces in diagonals");
    break;
  case "king":
    console.log("One space in any direction");
    break;
  case "queen":
    console.log("Infinite spaces in any direction");
    break;
  default:
    console.log("Invalid piece");
    break;
}
