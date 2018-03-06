function crossover(population, numberOfCrossovers) {
    let [numberOfItems, crossoverCounter] = [population[0].length, 0];

    while (crossoverCounter < numberOfCrossovers) {
        
        // choose 2 random indices and a position where we will slice
        let ind1 = Math.floor(Math.random() * population.length);
        let ind2 = Math.floor(Math.random() * population.length);
        let sliceNum = Math.floor(Math.random() * numberOfItems);

        population.push(population[ind1].slice(0, sliceNum) + population[ind2].slice(sliceNum));
        population.push(population[ind2].slice(0, sliceNum) + population[ind1].slice(sliceNum));

        ++crossoverCounter;

    }
}

module.exports = {
    crossover
};