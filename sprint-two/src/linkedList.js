//nested version

var makeLinkedList = function(){
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
    } else {
      var nodeNester = function (headTest) {
        if (headTest.next === list.tail) {
          headTest.next = {value: list.tail.value};
          list.tail = makeNode(value);
          headTest.next.next = list.tail;
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
    } else {
      return list.contains(target, node.next);
    }

  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};