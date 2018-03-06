// 3rd party module for easier way to get input from user
const readlineSync = require('readline-sync');
const {
    generate
} = require('./utils/generate');

const {
    aStar
} = require('./algorithm/algorithm');

// Get input from user
const size = parseInt(readlineSync.question(''));

// Get the length of the board which should be n x n
const n = Math.sqrt(size + 1);

let board = [];

// Get input board from user
for (let i = 0; i < n; ++i) {
    board[i] = [];
    const row = readlineSync.question('');
    row.split(' ').forEach((element) => {
        parseInt(element);
        board[i].push(element);
    });
}

// Get answer object containing pathLength and steps
let answer = aStar(board);
console.log(answer.pathLength);

// Print steps 
for (let i = 0; i < answer.steps.length; ++i) {
    console.log(i, answer.steps[i]);
};