import Graph from "./knight-travails.js";

const g = new Graph;
g.addVertices();
g.addEdges();
g.knightMoves('0,0', '1,2');
g.knightMoves('0,0', '3,3');
g.knightMoves('5,7', '2,6');
g.knightMoves('4,3', '6,7');
console.log(g.chessBoard);