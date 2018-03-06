const predictType = (data, probabilities) => {

    data.forEach(person => {
        // start with probability of 1 and start calculating
        let [probD, probR] = [1, 1];
        person.attributes.forEach((value, index) => {
            switch(value) {
                case 'y':
                    probD *= probabilities.democrat[index];
                    probR *= probabilities.republican[index];
                    break;
                case 'n':
                    probD *= (1 - probabilities.democrat[index]);
                    probR *= (1 - probabilities.republican[index]);
                    break;
                default:
                    break;
            }
        });

        // predicted is the more probable type
        person.predicted = probD > probR ? 'democrat' : 'republican';
    });

};

module.exports = {
    predictType
};