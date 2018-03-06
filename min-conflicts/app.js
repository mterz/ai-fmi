const readlineSync = require('readline-sync');

const {
    putRandomQueens
} = require('./util/randomQueens');

const {
    getBoard,
    printBoard
} = require('./board/board');

const {
    countConflictsBoard,
    finalBoard
} = require('./util/conflicts');

const {
    moveQueen
} = require('./move/move');


// we need that for readline-sync
console.log('');
const n = Number(readlineSync.question('Number of queens: '));

let queens = putRandomQueens(n);
let board = getBoard(queens, n);
let boardConflicts = countConflictsBoard(board, n);

// try to move the worst queen to the best possible free space `iterations` times. If it doesn't work regenerate the board.
let iterations = 0;


while( !finalBoard(queens, boardConflicts) ) {
    moveQueen(queens, boardConflicts, n);

    if (iterations >= 3 * n) {
        iterations = 0;

        // regenerate the board since the standart solution probably won't find a board
        queens = putRandomQueens(n);
        board = getBoard(queens, n);
        boardConflicts = countConflictsBoard(board, n);

    }
    ++iterations;
}

printBoard(queens, n);