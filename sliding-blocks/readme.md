# Problem

The [game](http://mypuzzle.org/sliding) starts on a board with blocks with numbers from 1 to N and an empty block, which could be represented with the number 0. The purpose of the game is to order the blocks according to their numbers. You can switch the places of the 0 block with any block which right next to it.(not diagonally). The input is the number of the blocks and the board. Use the A* algorithm with Manhattan heuristics. The output is the steps which the player solving it should do to solve the puzzle. 

### Input

* 8

* 1 2 3
* 4 5 6
* 0 7 8

### Output

* 2
* left
* left


---

# Running the program

* Go to the directory of the project
* Run `npm install`
* Run `node app.js`

---

# Structure of the program

We use the A* algorithm with Manhattan heuristics.

---

# Time

The time needed to find the shortest path of an 4x4 board is usually long. It works fast for 3x3 board.

