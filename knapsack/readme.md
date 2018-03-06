# Problem

In a backpack we can put 5 kg at most. Tourist has N objects, which he wants to put in the backpack. Every object has weight and value. Find out which objects should the tourist take with a genetic algorithm.

---

# Running the program

* Go to the directory of the project
* Run `npm install`
* Run `node app.js`

The program will print the items that the tourist should take and their value. If you run the program multiple times there may be different results since we use genetic algorithm to predict the most valueble objects.

---

# Structure of the program

We use genetic algorithm to find a good solution of the knapsack problem. We mutate the chosen elements in each iteration to prevent us from getting the same element multiple times andbe unable to get a better result.

