const LinkedListDeque = require('./lib/LinkedListDeque');
//const ArrayDeque = require('./lib/ArrayDeque');

d = LinkedListDeque.create();
console.log(LinkedListDeque.isEmpty(d)); // true
LinkedListDeque.pushFront(d, '1'); // [1]
LinkedListDeque.pushFront(d, '2'); // [2]<=>[1]
LinkedListDeque.pushBack(d, '3'); // [2]<=>[1]<=>[3]
console.log(LinkedListDeque.isEmpty(d)); // false
console.log(LinkedListDeque.popFront(d)); // '2'
console.log(LinkedListDeque.popFront(d)); // '1'
console.log(LinkedListDeque.popFront(d)); // '3'
console.log(LinkedListDeque.isEmpty(d)); // true
LinkedListDeque.pushFront(d, '2'); // [2]
LinkedListDeque.pushFront(d, '3'); // [3]<=>[2]
LinkedListDeque.pushBack(d, '4'); // [3]<=>[2]<=>[4]
console.log(LinkedListDeque.isEmpty(d)); // false
console.log(LinkedListDeque.popBack(d)); // '4'
console.log(LinkedListDeque.popBack(d)); // '2'
console.log(LinkedListDeque.popBack(d)); // '3'
console.log(LinkedListDeque.isEmpty(d)); // true