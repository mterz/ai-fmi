const Item = require('./item');

const readlineSync = require('readline-sync');

const { 
    mutate
} = require('./utils/mutate');

const {
    crossover
} = require('./utils/crossover');

const {
    getPopulation
} = require('./utils/population');

let items = [];

console.log(''); // we need that for readline-sync
// const maxWeight = parseInt(readlineSync.question('Enter the max possible weight: '));
// const numberOfItems = parseInt(readlineSync.question('Enter the number of items in the sack: '));
const numberOfItems = 24;
const maxWeight = 5000;

// TESTS -> Change maxWeight and numberOfItems
// // TEST 1
// items.push(new Item('A', 8, 12));
// items.push(new Item('B', 4, 4));
// items.push(new Item('C', 7, 13));
// items.push(new Item('D', 3, 1));
// items.push(new Item('E', 8, 7));
// items.push(new Item('F', 3, 12));

// TEST 2 
items.push(new Item('map', 90, 150));
items.push(new Item('compass', 130, 35));
items.push(new Item('water', 1530, 200));
items.push(new Item('sandwich', 500, 160));
items.push(new Item('glucose', 150, 60));
items.push(new Item('tin', 680, 45));
items.push(new Item('banana', 270, 60));
items.push(new Item('apple', 390, 40));
items.push(new Item('cheese', 230, 30));
items.push(new Item('beer', 520, 10));
items.push(new Item('suntan cream', 110, 70));
items.push(new Item('camera', 320, 30));
items.push(new Item('T-shirt', 240, 15));
items.push(new Item('trousers', 480, 10));
items.push(new Item('umbrealla', 730, 40));
items.push(new Item('waterproof trousers', 420, 70));
items.push(new Item('waterproof overclothes', 430, 75));
items.push(new Item('note-case', 220, 80));
items.push(new Item('sunglasses', 70, 20));
items.push(new Item('towel', 180, 12));
items.push(new Item('socks', 40, 50));
items.push(new Item('book', 300, 10));
items.push(new Item('notebook', 900, 1));
items.push(new Item('tent', 2000, 150));

//The following code should be uncommented if you want to enter data from the keyboard

// console.log('Enter weight value for each of the items\n W \tV');
// for(let i = 0; i < numberOfItems; ++i) {
//     // putting the items in the items array
//     const [weight, value] = readlineSync.question('').split(' ').map((e) => parseFloat(e));
//     items.push(new Item('Item ' + i, weight, value));
// }

// Some constants for the generic algorithm. Feel free to play with them.
let [populationSize, numberOfIterations, numberOfCrossovers, iterationCount, numberOfMutations] = [20, 5000, 5, 0, 4];

// Get population of populationSize
let population = getPopulation(populationSize, numberOfItems);

while (iterationCount < numberOfIterations) {

    // crossover some random elements of population. 
    // In the end we have population.length + 2 * numberOfCrossover elements
    crossover(population, numberOfCrossovers);
    mutate(population, numberOfMutations);

    // destructive sort. population is now sorted
    population.sort((a, b) => {
        return fitness(b, items) - fitness(a, items);
    });

    // js engine frees memory
    population.length -= numberOfCrossovers * 2;        

    ++iterationCount;
}

// the element with highest fitness
let answer = population[0];

// Printing answer
console.log(fitness(answer));
answer.split('').forEach((elem, ind) => {
    if (elem === '1') {
        console.log(items[ind].name);
    }
});

function fitness (item) {
    let itemArr = item.split('');
    let V = 0;
    let W = 0;

    items.forEach((i, ind) => {
        V += itemArr[ind] === '1' ? i.value : 0;
        W += itemArr[ind] === '1' ? i.weight : 0;
    });

    return W <= maxWeight ? V : -Infinity;
}