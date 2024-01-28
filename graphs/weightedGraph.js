class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // if the vertex deosnt exist
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  shortestPath(start, finish) {
    // const nodes = new PriorityQueue();
    // const distances = {};
    // const previous = {};
    // let smallest;
    // // build up initial state
    // for (let vertex in this.adjacencyList) {
    //   if (vertex === start) {
    //     distances[vertex] = 0;
    //     nodes.enqueue(vertex, 0);
    //   } else {
    //     distances[vertex] = Infinity;
    //     nodes.enqueue(vertex, Infinity);
    //   }
    //   previous[vertex] = null;
    // }
    // // while priority queue is not empty
    // while (nodes.values.length) {
    //   // get the vertex
    //   smallest = nodes.dequeue().val;
    //   //   console.log(smallest);
    //   if (smallest === finish) {
    //     // we are done
    //     console.log(distances);
    //     console.log(previous);
    //     // build path
    //   }
    //   if (smallest || distances[smallest] !== Infinity) {
    //     for (let neighbor in this.adjacencyList[smallest]) {
    //       // getting the the vertex as smallest
    //       // neighbor node getting its connections to the vertex
    //       let neighborNode = this.adjacencyList[smallest][neighbor];
    //       //   calculate new distance to neighboring node
    //       let candidate = distances[smallest] + neighborNode.weight;
    //       let nextNeighbor = neighborNode.node;
    //       if (candidate < distances[nextNeighbor]) {
    //         // updating new smalles distance to neighbor
    //         distances[nextNeighbor] = candidate;
    //         // updating how we got to next neighbor
    //         previous[nextNeighbor] = smallest;
    //         // enqueue in priority queue with new priority.
    //         nodes.enqueue(nextNeighbor, candidate);
    //       }
    //     }
    //   }
    // as long as there is something to visit
    // }
  }
}

// priority queue class
//  * O( n log n )
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.shortestPath("A", "B"));
