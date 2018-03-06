const worstQueen = (queens, boardConflicts) => {
    // returns the queen which has the most conflicts

    let [worst, max] = [, -Infinity];

    queens.forEach(queen => {

        if (max < boardConflicts[queen.x][queen.y]) {
            worst = queen;
            max = boardConflicts[queen.x][queen.y];
        }

    });

    return worst;
}

const bestNewPosition = (boardConflicts, x) => {
    // returns the best new position for the queen on row x

    let bestNewPos;
    let min = Infinity;

    boardConflicts[x].forEach( (conflicts, y) => {
        if (min > conflicts) {
            min = conflicts;
            bestNewPos = y;
        }
    });

    // Returns only an index the queen should be moved to board[x][bestNewPos]
    return bestNewPos
};


const recountConflicts = (boardConflicts, n, x, y1, y2) => {
    // We move the queen which is on position x, y1 to position x, y2
    // and recount conflicts on boardConflicts 
    // O(n)

    for (let i = 0; i < n; ++i) {
        // lower columns
        i !== x ?  --boardConflicts[i][y1] : null ;
        i !== x ?  ++boardConflicts[i][y2] : null ;

        if (i !== 0) {

            // lower diagonals
            ( boardConflicts[x+i] && boardConflicts[x+i][y1+i] !== undefined ) ? --boardConflicts[x+i][y1+i] : null ; 
            ( boardConflicts[x+i] && boardConflicts[x+i][y1-i] !== undefined ) ? --boardConflicts[x+i][y1-i] : null ;
            ( boardConflicts[x-i] && boardConflicts[x-i][y1+i] !== undefined ) ? --boardConflicts[x-i][y1+i] : null ; 
            ( boardConflicts[x-i] && boardConflicts[x-i][y1-i] !== undefined ) ? --boardConflicts[x-i][y1-i] : null ;

            // increase columns
            

            // increase diagonals
            ( boardConflicts[x+i] && boardConflicts[x+i][y2+i] !== undefined ) ? ++boardConflicts[x+i][y2+i] : null ; 
            ( boardConflicts[x+i] && boardConflicts[x+i][y2-i] !== undefined ) ? ++boardConflicts[x+i][y2-i] : null ;
            ( boardConflicts[x-i] && boardConflicts[x-i][y2+i] !== undefined ) ? ++boardConflicts[x-i][y2+i] : null ; 
            ( boardConflicts[x-i] && boardConflicts[x-i][y2-i] !== undefined ) ? ++boardConflicts[x-i][y2-i] : null ;
            
        }
    }
};

const moveQueen = (queens, boardConflicts, n) => {
    // return th emoved queen

    let worstQ = worstQueen(queens, boardConflicts); 

    let bestNewPos = bestNewPosition(boardConflicts, worstQ.x);

    recountConflicts(boardConflicts, n, worstQ.x, worstQ.y, bestNewPos);

    worstQ.y = bestNewPos;

};

module.exports = {
    moveQueen
};