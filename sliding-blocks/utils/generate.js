// generates next possible positions given the current position

const generate = (board) => {

    // All possible boards that can be genrated from current board
    // The strings are used later for traceback, when we print the steps
    let boards = [['right', left(board)], ['left', right(board)], ['down', up(board)], ['up', down(board)]];

    // Remove the boards that can't be generated. That is when we have the 0 part of a border
    return boards.filter(elem => elem[1] !== null);

};

// try to move left from current board. Returns null if impossible
// here left board means move 0 to the left
const left = (board) => {
    let ind0 = board.filter((elem) => elem.includes('0')).map((elem) => elem.indexOf('0'))[0];

    if (ind0 === 0) {
        // That is how we understand if it will be possible to generate the next 'left' board
        return null;
    }

    // we need deep copy
    let left_board = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board.length; ++j) {
            // shift the 0 to the left
            if (board[i][j] === '0') {
                left_board[i][j-1] = '0';
                left_board[i][j] = board[i][j-1];
                return left_board;
            }
        }
    }
}

// try to move right from current board. Returns null if impossible
const right = (board) => {
    let ind0 = board.filter((elem) => elem.includes('0')).map((elem) => elem.indexOf('0'))[0];

    if (ind0 === board.length - 1) {
        // That is how we understand if it will be possible to generate the next 'right' board
        return null;
    }

    // we need deep copy
    let right_board = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board.length; ++j) {
            if (board[i][j] === '0') {
                // shift the 0 to the right
                right_board[i][j+1] = '0';
                right_board[i][j] = board[i][j+1];
                return right_board;
            }
        }
    }
}

// try to move up from current board. Returns null if impossible
const up = (board) => {

    // [[1, 2], [0, 3]] -> [-1, 0]
    let temp = board.map(elem => elem.indexOf('0'));

    if (temp[0] !== -1) {
        // If temp[0] !== -1 that means that 0 is in the first row and it is impossible to shift it up
        return null;
    }

    // deep copy
    let up_board = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board.length; ++j) {
            if (board[i][j] === '0') {
                // Shift the 0 up
                up_board[i-1][j] = '0';
                up_board[i][j] = board[i-1][j];
                return up_board;
            }
        }
    }
}

// try to move down from current board. Returns null if impossible
const down = (board) => {
    // [['1', '2'], ['0', '3']] -> [-1, 0];
    let temp = board.map(elem => elem.indexOf('0'));

    if (temp[board.length - 1] !== -1) {
        // If temp[board.length - 1] !== -1, that means that '0' is on the last row
        return null;
    }

    // deep copy
    let down_board = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board.length; ++j) {
            if (board[i][j] === '0') {
                down_board[i+1][j] = '0';
                down_board[i][j] = board[i+1][j];
                return down_board;
            }
        }
    }
}

module.exports = {
    generate
};