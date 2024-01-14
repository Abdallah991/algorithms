class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    // intialize linked list parameters
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // * push new node
  push(val) {
    // create node
    let newNode = new Node(val);
    // if list is empty
    if (!this.head) {
      // set both the tail and head to it
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise set the tail and tail.next to new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment the length and return the list
    this.length++;
    return this;
  }

  // * pop list, removing the last item of the list
  pop() {
    // edge case, empty list
    if (!this.head) return undefined;
    // set current and new tail to the first node OR head
    var current = this.head;
    var newTail = this.head;
    while (current.next) {
      // new tail is the current
      newTail = current;
      // current is equal to next
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // if length is zero, the linked list is empty
    if (this.length === 0) {
      // set head and tail to null
      this.head = null;
      this.tail = null;
    }
    // return poped item
    return current;
  }
  // * shift - removing the head and replacing it with next
  shift() {
    // if list is empty
    if (!this.head) return undefined;
    // set next to current head
    let currentHead = this.head;
    this.head = this.head.next;
    // reduce length
    this.length--;
    // if length is zero, the linked list is empty
    if (this.length === 0) {
      // set tail to null
      this.tail = null;
    }
    // return removed head
    return currentHead;
  }
  // * unshift - adding an element to the begining of the array
  unshift(val) {
    // create new node
    let newNode = new Node(val);
    if (!this.head) {
      // if list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // otherwise
      newNode.next = this.head;
      this.head = newNode;
    }
    // increment the length and return list
    this.length++;
    return this;
  }

  // * get node at index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // * set node at index
  set(index, val) {
    // get the node at indext
    let foundNode = this.get(index);
    // if found
    if (foundNode) {
      // set the value to new value
      foundNode.val = val;
      return true;
    }
    // otherwise return false;
    return false;
  }
  // * insert a node at index
  insert(index, val) {
    // edge cases
    // if negative or exceeds length
    if (index < 0 || index > this.length) return false;
    // if at index 0 use unshift
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    // if at index length use push
    if (index === this.length) {
      this.push(val);
      return true;
    }
    // get the previous node
    let prev = this.get(index - 1);
    // create new node
    let newNode = new Node(val);
    // set the new node next to prev next
    newNode.next = prev.next;
    // set prev next to new node
    prev.next = newNode;
    // increment the length
    this.length++;
    return true;
  }
  // * remove node at index
  remove(index) {
    // if index is not valid
    if (index < 0 || index >= this.length) return undefined;
    // shift if index = 0
    if (index === 0) return this.shift();
    // pop if index is last element
    if (index === this.length - 1) return this.pop();
    // get the previous node
    let prev = this.get(index - 1);
    // set the removed to be next of previous
    let removed = prev.next;
    // set previous next to be removed next
    prev.next = removed.next;
    // minus the length
    this.length--;
    return removed;
  }

  // * reverse list
  reverse() {
    // set current node to be head
    let node = this.head;
    // swap the head and tail
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // set next to be the node's next
      next = node.next;
      // set node's next to be previous
      node.next = prev;
      // previous equals to node
      prev = node;
      // node equals next
      node = next;
    }
    return this;
  }
}
var list = new singlyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
console.log(list.reverse());
console.log(list);
