
// returns the final board for given row/column size
// this is only used in the manhattan algorithm to check what the manhattan distance is
// checking the manhattan distance could be done in a better way but it is not priority to the creator of the programme to change it
const getFinalBoard = (rcSize) => {

    let [finalBoard, currentElem] = [[], 1];
    finalBoard[0] = {};
    
    for (let i = 0; i < rcSize; ++i) {
        
        for (let j = 0; j < rcSize; ++j) {
            finalBoard[currentElem] = {};
            finalBoard[currentElem]['i'] = i;
            finalBoard[currentElem]['j'] = j;
            ++currentElem;
        }
    }
    
    // We pop that, because we generate the final positaion for one more not-existant element
    finalBoard.pop();
    // Set the final position for 0
    finalBoard[0]['i'] = rcSize - 1;
    finalBoard[0]['j'] = rcSize - 1;
    return finalBoard;
};

const manhattan = (board) => {
    // calculates the manhattan distance for board
    let [result, current, rcSize, finalBoard] = [0,, board.length, getFinalBoard(board.length)];
    for (let i = 0; i < rcSize; ++i) {
        for (let j = 0; j < rcSize; ++j) {
            current = board[i][j];
            // Add the distance of current to it's position in the finalBoard
            result += Math.abs(finalBoard[current]['i'] - i) + Math.abs(finalBoard[current]['j'] - j);
        }
    }
    return result;
};

// This is used in the aSter algorithm to check if we ve reached the goal state
// We could check that in other ways (like casting to string and compare by value)
const isGoal = (board) => {
    return manhattan(board) === 0;
};

module.exports = {
    isGoal,
    manhattan
};