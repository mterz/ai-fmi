## 1. Running the program.

The program is written in Javascript. There are some ES6 features in the code.
To test it you should have at least version 6.4 of node installed. Latest version is recommended.
Then type `npm install` in the terminal when you are located in the directory of the project.
That is needed to download all 3rd party modules used. Then type `node app.js` to run the app.
It expects a number K = the number of euclidean neighbours to the learning point from the training points.
Note that the training set is of size 20, so best results are expected when k ~ 5.

## 2. Structure of the program.
We use the k-nearest-neighbours(KNN) algorithm to predict the classes of the Iris flowers from the training set.