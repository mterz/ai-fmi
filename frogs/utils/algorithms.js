const get_neighbours = (vertex, graph) => {
  // returns the neighbours of vertex in graph

  let neighbours = graph.edges[vertex];
  return neighbours ? neighbours : [];
};

const bfs = (start_v, graph, end_v) => {
  //standart bfs starting from start_v and go through graph

  let [queue, marked, parents] = [[],[],{}];
  /*
  queue is used for traversing the vertices
  marked is used save each traversed vertex as it is traversed. We can see the order the vertices were traversed if we print merked
  parents is used to save the parent of each vertex in json format
  */

  queue.push(start_v);
  parents[start_v] = null;

  while (queue.length !== 0) {

    // get first element in queue
    let current_v = queue.shift();
    marked.push(current_v);

    get_neighbours(current_v, graph).forEach((elem) => {

      // We need to check because it should work for graph
      if (marked.indexOf(elem) === -1 && queue.indexOf(elem) === -1) {
        // Add parents
        parents[elem] = current_v;
        queue.push(elem);
      }

    });

    if(current_v === end_v) {
      // We can save some time
      break;
    }

  }

  return parents;

};

const dfs = (start_v, graph, end_v) => {
  let [stack, marked, parents] = [[],[],{}];
  /*
  stack is used for traversing the vertices
  marked is used save each traversed vertex as it is traversed. We can see the order the vertices were traversed if we print merked
  parents is used to save the parent of each vertex in json format
  */

  stack.push(start_v);
  parents[start_v] = null;

  while (stack.length !== 0) {

    let current_v = stack.pop();
    marked.push(current_v);

    get_neighbours(current_v, graph).forEach((elem) => {

      // We need to check because it should work for graph
      if (marked.indexOf(elem) === -1 && stack.indexOf(elem) === -1) {
        // Add parents
        parents[elem] = current_v;
        stack.push(elem);
      }

    });

    if(current_v === end_v) {
      // We can save some time
      break;
    }

  }

  return parents;
};

module.exports = {
  bfs,
  dfs
};