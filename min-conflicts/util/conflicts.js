const findConflicts = (board, x, y, n) => {
    // here board is another representation as an array of string.

    // --*-
    // *--- 
    // ---*
    // -*--

    // count how much conflicts will be there if there was a queen on pos x y.
    // Note that this count excludes the queens on row x since there is always one, so the actual number of conflicts would be the number
    // we calculate + 1
    let conflicts = 0;

    // Find conflicts on the columns
    board.forEach((row, index) => {
        // we have a queen on the same column
        if (index !== x && row.indexOf('*') === y) {
            ++conflicts;
        }
    });

    // Find conflicts on the diagonals
    for(let i = 1; i < n; ++i) {

        board[x + i] && board[x + i].indexOf('*') === y + i ? ++conflicts : null;
        board[x + i] && board[x + i].indexOf('*') === y - i ? ++conflicts : null;
        board[x - i] && board[x - i].indexOf('*') === y + i ? ++conflicts : null;
        board[x - i] && board[x - i].indexOf('*') === y - i ? ++conflicts : null;

    }

    return conflicts;

}

const countConflictsBoard = (board, n) => {
    let boardConflicts = [];

    for(let i = 0; i < n; ++i) {
        boardConflicts[i] = [];
        for(let j = 0; j < n; ++j) {
            boardConflicts[i][j] = findConflicts(board, i, j, n);
        }
    }

    return boardConflicts;
};


const finalBoard = (queens, boardConflicts) => {
    let final = true;

    queens.forEach(queen => {
        if (boardConflicts[queen.x][queen.y] !== 0) {
            final = false;
        }
    });

    return final;
};

module.exports = {
    countConflictsBoard,
    finalBoard
};