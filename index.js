import Graph from "./knight-travails.js";

const g = new Graph;
g.addVertices();
g.addEdges();
g.knightMoves('0,0', '3,3');
console.log(g.chessBoard);