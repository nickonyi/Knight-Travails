# Knights Travails
Find the shortest path between two positions for a chess' knight piece


## Summary
Knights Travails is a function that accepts the starting and end position of a chess board (from 0,0 to 7,7). The project uses the graph data-structure and finds the shortest possible route by using depth-first search (DFS).

knightMoves.js contains a single factory function, `Graph()`. It returns `chessBoard`, which contains vertices and 3 functions that,
  1. Creates the vertices (`addVertices()`)
  2. Define the edges (`addEdges()`)
  3. List the shortest routes (`knightMoves()`)

```javascript
function Graph() {
  return {
    chessBoard: new Map(),

    addVertices(size = 8) {
    },

    addEdges(board = this.chessBoard) {
    },

    knightMoves(start, end) {
    },
  }
}
```

When running the below lines of code,
```javascript
const g = new Graph();
g.addVertices();
g.addEdges();
g.knightMoves('0,0', '1,2');
g.knightMoves('3,1', '2,2');
g.knightMoves('7,7', '7,6');
```

returns the following lines in the console:
```
Fastest Routes from 0,0 to 1,2
Array [ "0,0", "1,2" ]

Fastest Routes from '0,0', '3,3'
Array(3) [ "0,0", "1,2", "3,3" ]
Array(3) [ "0,0", "2,1", "3,3" ]

Fastest Routes from 5,7 to 2,6
Array(4) [ "5,7", "4,5","2,6" ]

Fastest Routes from 4,3 to 6,7
Array(4) [ "4,3", "5,5","6,7" ]


```
