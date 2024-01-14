class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    // if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set tail next to new node
      this.tail.next = newNode;
      //   set new node prev to the tail
      newNode.prev = this.tail;
      //   set tail to new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      popped.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, count;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // edge casses
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    // create new node
    let newNode = new Node(val);
    // get prev node
    let prevNode = this.get(index - 1);
    // set the connections
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    // increment the length
    this.length++;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
// console.log("Original list", list);
list.unshift("abdallah");
console.log(list.insert(1, 98));
console.log(list);
