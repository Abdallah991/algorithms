class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }
  // push a node to the stack
  push(val) {
    let newNode = new Node(val);
    // if stack is empty
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set created node to be first, and previous node to be next.
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    // return the size
    return ++this.size;
  }

  pop() {
    // if stack is empty return null
    if (!this.first) return null;
    let temp = this.first;
    // if stack has length is one, set the last to null
    if (this.first === this.last) {
      this.last = null;
    }
    // set the first node to be the next
    this.first = this.first.next;
    // decrement the size and return the first node
    this.size--;
    return temp.val;
  }
}
