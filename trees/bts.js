class Node {
  // binary tree node definition
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTrees {
  constructor() {
    this.root = null;
  }
  //  * insert a node
  insert(val) {
    // create a new node
    let newNode = new Node(val);
    // if there is no root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // recursive helper finction
    function findPlace(node) {
      // go left
      if (val === node.val) return undefined;
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        findPlace(node.left);
      } else {
        // go right
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        findPlace(node.right);
      }
    }
    // call recursion
    findPlace(this.root);
  }

  //   find the value
  find(val) {
    if (!this.root) return false;
    // declare found variable
    let found = false;
    // recursion helper function
    function findNode(node) {
      if (val == node.val) {
        found = true;
        return;
      }
      //   search in the left
      if (val < node.val) {
        if (node.left == null) return;
        findNode(node.left);
      } else {
        // search in the right
        if (node.right == null) return;
        findNode(node.right);
      }
    }
    findNode(this.root);
    return found;
  }

  // * breadth first traversal
  BFS() {
    // declare data visited, queue searched and node variable
    var data = [];
    var queue = [];
    var node = this.root;
    // push node to the queue
    queue.push(node);
    // while queue not empty
    while (queue.length) {
      // remove node from start
      node = queue.shift();
      // push value node to visited
      data.push(node.val);
      // add left and right if exist to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // return all visited
    return data;
  }

  // * pre order
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // * post order
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  // * in order
  // returns the values of BST in order
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(3);
tree.insert(12);
//
console.log("value is ", tree.DFSInOrder());
