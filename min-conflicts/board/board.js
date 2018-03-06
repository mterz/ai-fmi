const getBoard = (queens, n) => {
    // returns a board in the form of array of strings
    let board = [];

    queens.forEach(queen => {
        board.push('-'.repeat(queen.y) + '*' + '-'.repeat(n - queen.y - 1));
    });

    return board;
};

const printBoard = (queens, n) => {
    
    queens.forEach(queen => {
        console.log('-'.repeat(queen.y) + '*' + '-'.repeat(n - queen.y - 1));
    });
};

module.exports = {
    getBoard,
    printBoard
};