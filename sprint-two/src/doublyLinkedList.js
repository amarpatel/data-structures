//nested version

var makeDoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!this.head && !this.tail) {
      this.tail = makeNode(value);
    } else if (!this.head) {
      this.head = this.tail;
      this.tail = makeNode(value);
      this.head.next = this.tail;
      this.tail.previous = this.head;
    } else {
      var nodeNester = function (headTest) {
        if (headTest.next === list.tail) {
          headTest.next = {value: list.tail.value};
          list.tail = makeNode(value);
          // headTest.next.next = list.tail;
          return;
        } else {
          nodeNester(headTest.next);
        }
      };
      nodeNester(this.head);
    }
  };

  list.removeHead = function(){
    this.head = this.head.next;
  };

  list.contains = function(target, node){
    node = node || this.head;
    
    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return list.contains(target, node.next);
    } else {
      return false;
    }
  };

  list.addToHead = function (value) {
    if (!this.head && !this.tail) {
      //add value
      this.head = makeNode(value);
    } else if (!this.tail) {
      this.tail = this.head;
      this.head = makeNode(value);
      this.head.next = this.tail;
      this.tail.previous = this.head;
    } else {
      //make nesting function!

    }

    //if head and tail are the same

  };

  list.removeTail = function () {};

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};