// calculate the probabilities for the current data

const calculateProbabilities = (data) => {

    let probabilities = {
        'democrat': [],
        'republican': []
    };

    data.forEach(person => person.attributes.forEach((value, index) => {
        probabilities[person.type][index] = probabilities[person.type][index] || {
            // escape 0 values for better end results
            // we calculate the positive values
            // the probability for the negative values will be 1 - P(positive)
            'positive': 1,
            'max': 1
        };

        switch(value) {
            case 'y':
                probabilities[person.type][index].positive++;
                probabilities[person.type][index].max++;
                break;
            case 'n':
                probabilities[person.type][index].max++;
                break;
            default:
                break;
        }
    }));

    probabilities.democrat = probabilities.democrat.map(elem => elem.positive / elem.max);
    probabilities.republican = probabilities.republican.map(elem => elem.positive / elem.max);

    // return an object that contains the probabilities for democrats and republicans
    return probabilities;
};

module.exports = {
    calculateProbabilities
};