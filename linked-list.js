'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    },
    this.tail = this.head;
    this.length = 1;
  } 

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } 

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head,
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);

    for (let k = 0; k < index; k++) {

    }
    this.length++;
    return this;
  }

}

// 1-->10-->5-->16
const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
console.log(linkedList.printList());
