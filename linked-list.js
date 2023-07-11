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

  traverseToIndex(index) {
    // validate params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  
  reverse() {
    if (!this.head.next) {
      return this;
    }
    let firstItem = this.head;
    this.tail = this.head;
    let secondItem = firstItem.next;

    while (secondItem) {
      let temp = secondItem.next;
      secondItem.next = firstItem;
      firstItem = secondItem;
      secondItem = temp;
    }
    this.head.next = null;
    this.head = firstItem;
    //return this;
    return this.printList();
  }
}

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {

  constructor (value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    },
    this.tail = this.head;
    this.length = 1;
  } 

  append(value) {
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } 

  prepend(value) {
    const newNode = new DoublyNode(value);
    newNode.next = this.head,
    this.head.prev = newNode;
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

  traverseToIndex(index) {
    // validate params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new DoublyNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = follower.next;
    leader.prev = leader;
    this.length--;
    return this.printList();
  }
}

// 1-->10-->5-->16
const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(1);
linkedList.insert(200, 99);
linkedList.insert(2, 77);
linkedList.remove(3);
console.log(linkedList.printList());
linkedList.reverse();
console.log(linkedList.printList());
//const doublyLinkedList = new DoublyLinkedList(7);
//doublyLinkedList.append(19);
//doublyLinkedList.prepend(1);
//doublyLinkedList.insert(2, 48);
////doublyLinkedList.insert(1, 24);
//doublyLinkedList.remove(1);
//console.log(doublyLinkedList);
//console.log(doublyLinkedList.printList())
