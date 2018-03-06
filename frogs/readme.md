# Problem

![Leaping Frogs Problem](http://smart-kit.com/wp-content/uploads/2011/01/frog-jumping-puzzle.jpg "Problem description")

The game consists of playing field of 2*N + 1 fields. On the left we have N frogs looking to the right and on the right we have N frogs looking to the left. The purpose of the game is to switch the places of the frogs. Each frog can only jump on the field in front of it or jump over a frog on an empty field. Use DFS to solve the problem. The input is the number of frogs looking in one direction N. The output is the states of the field after each jump.

### Input
2
### Output
* \>\>_<<
* \>_><<
* \><>_<
* \><><_
* \><_<>
* _<><>
* <_><>
* <<>_>
* <<_>>

# Running the program

Run `node app.js` in the terminal when you are located in the directory of the project.

---

# Structure of the program

We generate the whole graph and then use standart dfs to get to the end_pattern. Generation of the whole graph slows the program, but speed was not a necessary for the current problem.

---

Image from [smart-kit](http://smart-kit.com/wp-content/uploads/2011/01/frog-jumping-puzzle.jpg)