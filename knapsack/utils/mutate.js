function mutate(population, numberOfMutations) {
    
    let numberOfItems = population[0].length;
    // indices where we will perform mutation. Note that each population might mutate [0,numberOfMutations) times
    let indices = [];
    for (let i = 0; i < numberOfMutations; ++i) {
        indices.push(Math.floor(Math.random() * population.length));
    }

    indices.forEach((index) => {
        // get a random position for mutation
        let pos = Math.floor(Math.random() * numberOfItems);
        // reverse it
        population[index][pos] = population[index][pos] === '0' ? '1' : '0';
    });
}

module.exports = {
    mutate
};