module.exports = LinkedListDeque = (function () {
  let Deque = [];
  
  function pushFrontES(deque, item) {
	  deque.unshift(item);
	  
	  return deque;
  }
  
  function pushFront(deque, item) {
	  let newDeque = Object[item];
	  let i;
	  
	  for (i = 0; i < deque.length; i++) {
		  newDeque[i+1] = deque[i];
	  }
	  
	  deque = newDeque;
	  
	  console.log(deque);
	  
	  return deque;
  }

  function pushBack(deque, item) {
	  deque.push(item);
	  
	  return deque;
  }
  
  function create() {
    return Object.create(Deque);
  }

  function isEmpty(deque) {
    return deque.length === 0
  }

  function popFront(deque) {// EXERCISE
	return deque.shift();
  }

  function popBack(deque) {// EXERCISE
	return deque.pop();
  }

  return {
    create: create,
    isEmpty: isEmpty,
    pushFrontES: pushFrontES,
	pushFront: pushFront,
    pushBack: pushBack,
    popFront: popFront,
    popBack: popBack
  }
  // need to return the public api here
})();