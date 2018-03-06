// 3rd party module for priorityQueue
const priorityQueue = require('priorityqueuejs');
const { 
    manhattan
    } = require('./manhattan');

// When we create priorityQueue, we give it a comaparator function so that it knows which element should be on the top
// Our priority queue is a max heap, so we need to reverse the order of the elements
let pQueue = new priorityQueue((a, b) => {
    return -(manhattan(a.board) + a.g -(manhattan(b.board) + b.g));
});



module.exports = {
    pQueue
};

