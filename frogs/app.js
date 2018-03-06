const {
  dfs
} = require('./utils/algorithms');

const {
  create_pattern
} = require('./utils/pattern');

const {
  generate
} = require('./graph/graph');

// That's a module which is part of node, that is used to get input from the command line.
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter N - the number of frogs looking in one direction? \n N = ', (answer) => {
  // This is a callback function. We need to put our code here,
  // because we need it to execute when we enter the number N
  const {
    start_pattern,
    end_pattern
  } = create_pattern(answer);

  const graph = generate(start_pattern);
  const parents = dfs(start_pattern, graph, end_pattern);

  // Go backwards through the parents array from end to start until we get to the start vertex
  let current = end_pattern;
  // In the stack we'll put all the vertices
  let stack = [];
  stack.push(current);
  while (parents[current] !== null) {
    current = parents[current];
    stack.push(current);
  }

  // Now we print them from end to start
  while (stack.length !== 0) {
    console.log(stack.pop());
  }
  
  rl.close();
});
