'use strict';

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set = (key, value) => {
    const k = this._hash(key);
    if (!this.data[k]) {
      this.data[k] = [];
    } 
    this.data[k].push(key, value);
    return this.data;
  }

  get = (key) => {
    const k = this._hash(key);
    const currentBucket = this.data[k];
    if(currentBucket) {
      return currentBucket[1];
    }
  }

  keys = () => {
    return this.data.map((el) => {
      if (el) return el[0]
    })
  }
}

const myhHashTable = new HashTable(50);
myhHashTable.set('grapes', 100);
myhHashTable.set('apples', 1257);
myhHashTable.set('oranges', 45);
myhHashTable.set('tangerines', 17);
myhHashTable.set('mango', 90);
myhHashTable.set('papaya', 112);
myhHashTable.set('lemon', 245);
myhHashTable.set('coconut', 24);
myhHashTable.set('guava', 750);
console.log(myhHashTable.get('apples'));
console.log(myhHashTable.keys());
