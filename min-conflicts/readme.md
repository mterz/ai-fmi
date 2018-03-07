# Problem

Put N queens on NxN board, so that there are no two queens which attack each other. Use the algorithm MinConflicts to solve the problem.

### Input

* N - whole number, the number of queens

### Output

* Print a board where the queens are marked with * and empty spaces are marked with _

---

# Running the program

* Go to the directory of the project
* Run `npm install`
* Run `node app.js`

---

# Structure of the program

We use a variation of the minConflicts algorithm to solve the problem.

---

# Time

The time needed to find a solution board is relatively small for N ~ 20. It is not such a good time, but the problem is because the variation of minConflicts we use is not very good.