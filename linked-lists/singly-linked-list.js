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
  // * shift
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    // if length is zero, the linked list is empty
    if (this.length === 0) {
      // set tail to null
      this.tail = null;
    }
    return currentHead;
  }
}

var list = new singlyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.shift();
list.shift();
console.log(list);
