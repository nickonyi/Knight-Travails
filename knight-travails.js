function Graph() {
    return {
        chessBoard: new Map(),
        //standard chessboard size is 8
        addVertices(size = 8) {
            //create a chessboard
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    this.chessBoard.set(`${[i,j]}`, []);
                }

            }
        },
        //connect all the board squares according to the knight moves pattern
        addEdges(board = this.chessBoard) {
            for (const [pos] of board) {
                const posArr = pos.split(',');
                const x = parseInt(posArr[0]);
                const y = parseInt(posArr[1]);
                //the knight moves based on the clock position
                const direction = {
                        1: [x + 1, y + 2],
                        2: [x + 2, y + 1],
                        4: [x + 2, y - 1],
                        5: [x + 1, y - 2],
                        7: [x - 1, y - 2],
                        8: [x - 2, y - 1],
                        10: [x - 2, y + 1],
                        11: [x - 1, y + 2],
                    }
                    //iterate through each clock position defines in the direction object
                for (const clock in direction) {
                    const moves = direction[clock].toString();
                    //check if it is a valid knight move
                    if (board.has(moves) && !board.get(pos).includes(moves)) {
                        this.chessBoard.get(pos).push(moves);
                    }
                }
            }
        },
        knightMoves(start, end) {
            //stores all the paths found
            const paths = [];
            //keeps track of visited positions
            const visited = new Set();
            //queue for BFS
            const queue = [];
            //start the BFS from the starting postion with a path containing the starting position
            queue.push([start, [start]]);
            //while the queue is not empty
            while (queue.length > 0) {
                //deque the first element from the queue
                let [current, path] = queue.shift();
                //Mark the current position as visited
                visited.add(current);
                //if the current position is the end position
                if (current === end) {
                    //add the path to the list of paths
                    paths.push(path);
                }
                //check the neighbours of the current positions
                const neighbours = this.chessBoard.get(current);
                for (const pos of neighbours) {
                    //if the current poistion has not been visited
                    if (!visited.has(pos)) {
                        //add to the queue
                        queue.push([pos, [...path, pos]]);
                    }

                }
            }
            console.log(`Fastest Routes from ${start} to ${end}`);
            paths.forEach(element => console.log(element));
        }

    }
}



export default Graph;