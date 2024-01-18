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
}

var tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(12);
//
console.log("value is ", tree.find(12));
