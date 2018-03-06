// gets a population of populationSize
// done only once at the start
function getPopulation (populationSize, numberOfItems) {
    
    let population = [];
    let populationMember = [];
    

    for (let j = 0; j < populationSize; ++j) {
        for(let i = 0; i < numberOfItems; ++i) {
            // random 0 or 1
            populationMember.push(Math.floor(Math.random()*2));
        }
        population.push(populationMember.join(''));
        populationMember = [];
    }

    return population;
};

module.exports = {
    getPopulation
};