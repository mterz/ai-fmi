let numb = 1, n = 2;
let finalBoard = [];
finalBoard[0] = {};
debugger;

for (let i = 0; i < n; ++i) {
    debugger;
    
    for (let j = 0; j < n; ++j) {
        finalBoard[numb] = {};
        finalBoard[numb]['i'] = i;
        finalBoard[numb]['j'] = j;
        ++numb;
    }
}

finalBoard.pop();
finalBoard[0]['i'] = n - 1;
finalBoard[0]['j'] = n - 1;

console.log(finalBoard);
