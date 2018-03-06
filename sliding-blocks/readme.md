1. Running the program.
The program is written in Javascript. There are some ES6 features in the code.
To test it you should have at least version 6.4 of node installed. Latest version is recommended.
Then type "npm install" in the terminal when you are located in the directory of the project.
That is needed to download all 3rd party modules used. Then type "node app.js" to run the app.
It expects a number N = equal to the number of elements in the sliding-block game.
Note that N+1 should be equal to M*M where M is integer. Then you should enter the board.

2. Structure of the program.
We use the aStar algorithm with Manhattan heuristics.

3. Time.
The time needed to find the shortest path of an 4x4 board is usually long. It works fast for 3x3 board.