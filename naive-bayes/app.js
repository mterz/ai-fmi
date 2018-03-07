const {
    pReadFile
} = require('./pReadFile');

const {
    Person
} = require('./Person');

const {
    divide
} = require('./divide');

const {
    calculateProbabilities
} = require('./calculateProbabilities');

const {
    predictType
} = require('./predict');

pReadFile('./data.txt').then(data => {

    // here we will store the probabilities for each of the 10 sets
    let accuracy = [];

    // process the data we get from the file
    let processedData = data.toString().split(/\r\n/).map(person => new Person(...person.split(/,/)));

    // devide the data into 10 sets
    divide(processedData);

    for (let i = 0; i < 10; ++i) {
        // get only the testing data
        let testing = processedData.filter(person => person.fromSet === i);
        // get only the learning data
        let learning = processedData.filter(person => person.fromSet !== i);

        let probabilities = calculateProbabilities(testing);
        // predict the type given the probabilities
        predictType(learning, probabilities);

        // calculate the accuracy
        accuracy[i] = learning.filter(person => person.predicted === person.type).length / learning.length;

        // console log formatted accuracy
        console.log(`Accuracy ${i}: ${(accuracy[i]*100).toFixed(2)}%`);
    }

    // console log the average accuracy
    console.log(`Average accuracy: ${(accuracy.reduce((a, b) => a + b) / accuracy.length * 100).toFixed(2)}%`);

}).catch(e => {
    console.log(`Error reading file: ${e}`);
});
