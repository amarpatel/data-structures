var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var treeInstance = makeTree(value);
  this.children.push(treeInstance);
  treeInstance.parent = this;
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    //recursive case
    for (var i=0;i<this.children.length;i++) {
      if(this.children[i]) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }

  return false;
};

treeMethods.removeFromParent = function() {
};
