const getRandomRC = n => {
    // Return random number from 0 to n (excluding n)
    return Math.floor(Math.random() * n);
};

const putRandomQueens = n => {
    let queens = [];
    // For every row put a queen on a random column
    for(let i = 0; i < n; ++i) {
        let j = getRandomRC(n);

        // here we keep our queens
        queens[i] = {
            x: i,
            y: j
        };
    }

    return queens;
}; 

module.exports = {
    putRandomQueens
};