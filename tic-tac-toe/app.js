const readlineSync = require('readline-sync');

const board = "-".repeat(9);

console.log('');
// [0, 2]
let move = readlineSync.question('Move: ').split(' ').map(elem => Number(elem));


const mark = (symbol, board, move) => {
    return board.slice(0, move[0]*3 + move[1]) + symbol + board.slice(move[0] * 3 + move[1] + 1, board.length);
};

const generateNextMove = (maximisingPlayer, position) => {
    // generates all the possible moves that can be generated from current position
    // masimisingPlayer is a boolean value 

    let possibleMoves = []; 
    console.log('1')
    let symbol = maximisingPlayer ? 'X' : 'O';
    
    position = position.split('');

    for (let i = 0; i < position.length; ++i) {
        if (position[i] === '-') {
            position[i] = symbol;
            possibleMoves.push(position.join(''));
            position[i] = '-';
        }
    }
    return possibleMoves;
};

const printBoard = (position) => {
    let i = 0;
    while (i < 9) {
        console.log(position.slice(i, i + 3));
        i += 3;
    }
}

debugger;