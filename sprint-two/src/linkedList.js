var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  /*

  list = {


    head: null,
    tail: null;
  };


  makeNode(4)
    //{value: 4, next: null}


  list = {


    head: null,
    tail: null;

  };


  */

  list.addToTail = function(value){
    this.value = makeNode(value);
    this.tail = this.value;
  };

  list.removeHead = function(){
  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
