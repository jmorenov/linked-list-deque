module.exports = LinkedListDeque = (function () {
  let Node = {
    next: null,
    prev: null,
    data: null
  };
  let Deque = [];

  function pushFront(deque, item) {

  }

  function pushBack(deque, item) {

  }

  function create() {
    return Object.create(Deque);
  }

  function isEmpty(deque) {
    return deque.length === 0
  }

  function popFront(deque) {// EXERCISE
	
  }

  function popBack(deque) {// EXERCISE
	
  }

  return {
    create: create,
    isEmpty: isEmpty,
    pushFront: pushFront,
    pushBack: pushBack,
    popFront: popFront,
    popBack: popBack
  }
  // need to return the public api here
})();