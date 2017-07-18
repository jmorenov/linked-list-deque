/*console.log('---------------------------');
console.log('      LinkedListDeque');
console.log('---------------------------');
const LinkedListDeque = require('./lib/LinkedListDeque');
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
console.log(LinkedListDeque.isEmpty(d)); // true*/

console.log('---------------------------');
console.log('        ArrayDeque');
console.log('---------------------------');
const ArrayDeque = require('./lib/ArrayDeque');
a = ArrayDeque.create();
//console.log(ArrayDeque.isEmpty(a)); // true
console.log(a);
ArrayDeque.pushFront(a, '1'); // [1]
console.log(a);
ArrayDeque.pushFront(a, '2'); // [2]<=>[1]
console.log(a);

/*ArrayDeque.pushBack(a, '3'); // [2]<=>[1]<=>[3]
console.log(ArrayDeque.isEmpty(a)); // false
console.log(ArrayDeque.popFront(a)); // '2'
console.log(ArrayDeque.popFront(a)); // '1'
console.log(ArrayDeque.popFront(a)); // '3'
console.log(ArrayDeque.isEmpty(a)); // true
ArrayDeque.pushFront(a, '2'); // [2]
ArrayDeque.pushFront(a, '3'); // [3]<=>[2]
ArrayDeque.pushBack(a, '4'); // [3]<=>[2]<=>[4]
console.log(ArrayDeque.isEmpty(a)); // false
console.log(ArrayDeque.popBack(a)); // '4'
console.log(ArrayDeque.popBack(a)); // '2'
console.log(ArrayDeque.popBack(a)); // '3'
console.log(ArrayDeque.isEmpty(a)); // true*/