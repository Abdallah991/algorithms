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
    // declare found boleans
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

  depthFirst(start) {
    // to store the vertices visited
    let result = [];
    // to store the if vertices were visited
    let visited = {};
    const adjacencyList = this.adjacencyList;
    // recursive helper function
    function search(vertex) {
      // if the vertex is empty
      if (!vertex) return;
      // mark the vertex as visited
      visited[vertex] = true;
      // push the vertex to results
      result.push(vertex);
      // loop over each edge for that vertex
      adjacencyList[vertex].forEach((connectedTo) => {
        // if connectedTo does not, invoke function
        if (!visited[connectedTo]) {
          search(connectedTo);
        }
      });
    }
    // invoke search
    search(start);
    // return result
    return result;
  }

  breadthFirst(vertex) {
    // declare queue and visited and their initial values
    let queue = [vertex];
    let visited = {};
    visited[vertex] = true;
    let result = [];
    let currentVertex;

    // queue is not empty
    while (queue.length) {
      // remove element form queue and add to result
      currentVertex = queue.shift();
      result.push(currentVertex);
      // loop over edges
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // if not visited
        if (!visited[neighbor]) {
          // mark as visited
          visited[neighbor] = true;
          // add to queue
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.breadthFirst("A"));
