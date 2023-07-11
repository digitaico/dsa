type HeadType = {
  value: null | string | number,
  next: null | string | number,
};


interface LinkedListType {
  head: HeadType;
  tail: HeadType;
  length: number;
}

export class LinkedList implements LinkedListType {
  head: HeadType;
  tail: HeadType;
  length: number;

  constructor (value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    
  }

}

const linkedList = new LinkedList(10);
console.log(linkedList);


