const {
  generateNextPattern
} = require('../utils/pattern');

const generate = (start) => {
  // generated a graph we'll be traversing later
  // graph is intended to look like that:
  /*
    {
      edges: {
        A: [B, C, D],
        B: [A, D],
        .
        .
        .
        node : [neighbours]
      }
    }
  
  */
  let graph = {};
  // in generatedEdges we'll store all generated edges in json like above
  let generatedEdges = {};
  // here we store all visited nodes in the array
  let visited = [];
  let stack = [];

  let current;
  stack.push(start);

  // Maybe we should dinamically generate the graph in some way because it is too slow. 

  while (stack.length !== 0) {

    current = stack.pop();
    visited.push(current);

    generateNextPattern(current).forEach((elem) => {

      // here we check if elem has been visited
      if (visited.indexOf(elem) === -1 && stack.indexOf(elem) === -1) {
        stack.push(elem);
      }

      if (!generatedEdges[current]) {
        generatedEdges[current] = [];
      }

      if (generatedEdges[current].indexOf(elem) === -1) {
        generatedEdges[current].push(elem);
      }

    });

  }
  graph.edges = generatedEdges;
  return graph;
};

module.exports = {
  generate
};