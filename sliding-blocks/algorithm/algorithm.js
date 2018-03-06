const { 
    pQueue 
} = require('../utils/priorityQueue');

const {
    generate
} = require('../utils/generate');

const {
    isGoal
} = require('../utils/manhattan');

const aStar = (board) => {
    let start = {};
    // in the priority queue we put objects so we check 
    let openList = pQueue;

    // It will be filled with string values of the arrays
    // That is done because if we don't map to primitive object we can never know if an element is visited
    let closedList = [];

    start.board = board;
    start.g = 0;
    openList.enq(start);

    // solved is true when we get to goal
    let [q, solved, pathLength, last] = [, false, , ];

    while(!solved && !openList.isEmpty()) {

        // Remove the top element of hte priority queue
        q = openList.deq();
        generate(q.board).forEach(boardArr => {
            let board = boardArr[1];
            let element = {};
            if (isGoal(board)) {
                solved = true;
                pathLength = q.g + 1;
                last = element;
            }
            element.board = board;
            element.g = q.g + 1;

            // Here we check if an element is already visited
            let indexOfElem = closedList.indexOf(element.board.toString());
            if (indexOfElem === -1) {
                // If it is not yet visited
                element.cameFrom = q;
                element.camefromPos = boardArr[0];
                openList.enq(element);
            }
        });
        closedList.push(q.board.toString());
    }

    let steps = [];

    for (let i = 0; last; ++i) {
        steps[i] = last.camefromPos;
        last = last.cameFrom;
    }
    // We have an extra undefined in the steps so we remove it
    steps.pop();

    // Return an object containing pathLength and the steps needed to get to the solution
    return { 
        pathLength,
        steps: steps.reverse()
    };

};

module.exports = {
    aStar
};