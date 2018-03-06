1. Running the program.
The program is written in Javascript. There are some ES6 features in the code.
To test it you should have at least version 6.4 of node installed. Latest version is recommended.
Then type "npm install" in the terminal when you are located in the directory of the project.
That is needed to download all 3rd party modules used. Then type "node app.js" to run the app.
It expects a number N = equal to the number of queens on a NxN board.


2. Structure of the program.
We use the minConflicts algorithm to get a solution.

3. Time.
The time needed to find a solution board is relatively small for N ~ 20. 