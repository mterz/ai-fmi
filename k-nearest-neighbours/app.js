const readlineSync = require('readline-sync');

const {
    pReadFile
 } = require('./pReadFile');

const {
    chooseTraining
} = require('./chooseTraining');

const {
    kNearestNeighbours
} = require('./kNearestNeighbours');

const {
    Iris
} = require('./Iris');

// needed for readline sync
console.log('');

const k = Number(readlineSync.question('Enter k: '));
const trainingCount = 20;

pReadFile('./iris.txt').then(data => {
    
    let processed = data.toString().split(/\r\n/).map(element => element.split(/,/)).map(element => new Iris(...element));
    chooseTraining(processed, trainingCount);
    let trainingData = processed.filter(element => element.training);
    let learningData = processed.filter(element => !element.training);

    kNearestNeighbours(learningData, trainingData, k);

    console.log('Actual class | Preadicted class');
    let numberOfmatches = 0;
    learningData.forEach((element, index) => {
        if (element.cls === element.predictedClass) {
            ++numberOfmatches;
        }
        console.log(`${index}: ${element.cls} | ${element.predictedClass}`);
    });

    console.log(`Accuracy: ${(numberOfmatches / learningData.length * 100).toFixed(2)} %`);


}).catch(err => {
    console.log(`Error reading file \n ${err}`);
});