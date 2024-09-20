function LinkedList() {
  let _head = null;
  let _tail = null;
  let _size = 0;

  function append(value) {
    let newNode = Node(value, null);
    if (_head == null) {
      _head = newNode;
      _tail = newNode;
    } else {
      _tail.nextNode = newNode;
      _tail = newNode;
    }
    _size++;
  }

  function prepend(value) {
    let newNode = Node(value, _head);

    if (_head == null) {
      _tail = newNode;
      _head = newNode;
    } else {
      _head = newNode;
    }
    _size++;
  }

  function size() {
    return _size;
  }
  function head() {
    return _head;
  }
  function tail() {
    return _tail;
  }
  function at(index) {
    if (index < 0 || index >= _size) {
      return null;
    }
    let currentNode = _head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  function pop() {
    if (_size == 0) {
      return null;
    }
    if (_size == 1) {
      _head = null;
      _tail = null;
      return null;
    }
    let removedNode = at(_size - 1);
    _tail = at(_size - 2);
    _tail.nextNode = null;
    _size--;
    return removedNode;
  }

  function contains(searchValue) {
    let currentNode = _head;
    if (currentNode == null) {
      return false;
    }
    if (currentNode.value == searchValue) {
      return true;
    }
    for (let i = 0; i < _size - 1; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode.value == searchValue) {
        return true;
      }
    }
    return false;
  }
  function find(searchValue) {
    let currentNode = _head;
    if (currentNode == null) {
      return null;
    }
    for (let i = 0; i < _size; i++) {
      if (currentNode.value == searchValue) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  function toString() {
    let currentNode = _head;
    let tree = "";
    if (currentNode == null) {
      return "null";
    }
    for (let i = 0; i < _size; i++) {
      tree += `( ${currentNode.value} ) -> `;

      currentNode = currentNode.nextNode;
    }
    tree += "null";

    return tree;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

export { LinkedList };
