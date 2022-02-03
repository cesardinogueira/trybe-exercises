let chessPiece = "QUEEN";

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
    case "king":
        console.log("moves one square in any direction");
        break;
    case "rook":
        console.log("can move any number of squares along a rank or file");
        break;
    case "bishop":
        console.log("can move any number of squares diagonally");
        break;
    case "queen":
        console.log("combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal");
        break;
    case "knight":
        console.log("moves to any of the closest squares that are not on the same rank, file, or diagonal");
        break;
    case "pawn":
        console.log("an move forward to the unoccupied square immediately in front of it on the same file, or on its first move \nit can advance two squares along the same file, provided both squares are unoccupied (black dots in the diagram). \nA pawn can capture an opponent's piece on a square diagonally in front of it by moving to that square");
        break;
    default:
        console.log("Invalid piece!");
        break;
}

