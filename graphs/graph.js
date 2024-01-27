class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // if the vertex doesnt exisit add it
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // validate input
    if (!this.adjacencyList[vertex1]) return;
    if (!this.adjacencyList[vertex2]) return;
    let found1 = false;
    let found2 = false;
    // check all edges in vertex1
    this.adjacencyList[vertex1].forEach((element) => {
      if (element === vertex2) {
        found1 = true;
      }
    });
    // ? if it was a directed graph we will add only one direction
    // check all edges in vertex2
    this.adjacencyList[vertex2].forEach((element) => {
      if (element === vertex1) {
        found2 = true;
      }
    });
    // if not found add edge
    if (!found1) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    // if not found add edge
    if (!found2) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    // validate input
    if (!this.adjacencyList[vertex1]) return;
    if (!this.adjacencyList[vertex2]) return;
    // remove edges using filter
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  removeVertex(vertex) {
    // validate input
    if (!this.adjacencyList[vertex]) return;
    // remove each edge connecting to the deleted vertex
    this.adjacencyList[vertex].forEach((edge) => {
      this.removeEdge(vertex, edge);
    });
    // remove key from adjacency list
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Manama");
graph.addVertex("Doha");
graph.addEdge("Manama", "Tokyo");
graph.addEdge("Manama", "Doha");
graph.addEdge("Tokyo", "Doha");
graph.removeVertex("Tokyo");

console.log(graph);
