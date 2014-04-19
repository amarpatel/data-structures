var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var addtlNodes = [];
  if (!this.nodes.length){  //works!
    var firstNode = [];
    firstNode.push(newNode);
    firstNode.push({edges: []});
    this.nodes.push(firstNode);
    firstNode = [];
  }else if (this.nodes.length === 1) {  //works!

    //create second node
    var secondNodes = [];
    secondNodes.push(newNode);

    //update edges of first node
      this.nodes[0][1].edges = [newNode];

    //second ==== [puppies]
    secondNodes.push({edges: [this.nodes[0][0]]});

    //add to notes
    this.nodes.push(secondNodes);
    secondNodes = [];
  } else if (!toNode) {
    addtlNodes.push(newNode);
    addtlNodes.push({edges: []});
    this.nodes.push(addtlNodes);
    addtlNodes = [];
  } else {
    //graph.addNode('birds','puppies');
    addtlNodes.push(newNode);
    //find location of 'toNode'
    for (var i=0;i<this.nodes.length;i++) {
      if (this.nodes[i][0] === toNode){
        //addes 'birds' to edges of 'puppies'
        this.nodes[i][1].edges.push(newNode);
      }
    }
    //add puppies to edges of birds
      //addtlNodes === ['birds'] ==>   [birds, {edges: [puppies]}]
      addtlNodes.push({edges: [toNode]});
    //add addtlNodes to this.nodes;
    this.nodes.push(addtlNodes);
    addtlNodes = [];
  }
};


/*
new plan:

//kittens
nodes: [
  [kittens, {edges: null}]
]

//puppies
nodes: [
  [kittens, {edges: [puppies]}],    DONE
  [puppies, {edges: [kittens]}]     DONE
]

//birds (connected to puppies)
nodes: [
  [kittens, {edges: [puppies]}],
  [puppies, {edges: [kittens, birds]}],
  [birds, {edges: [puppies]}]
]



*/


Graph.prototype.contains = function(node){
  var i;
  for (i=0;i<this.nodes.length;i++) {
    if(this.nodes[i][0] === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var i;
  var j;
  var k;

  // var arr = [1,2,3,4,5]
  // arr.splice(1,1)
  // [2]
  // arr
  // [1, 3, 4, 5]


  //remove node
  for (i=0;i<this.nodes.length;i++) {
    if(this.nodes[i][0] === node) {
      this.nodes.splice(i,1);
    }
  }
  //remove all edges
  for (j=0;j<this.nodes.length;j++) {
    for(k=0;k<this.nodes[j][1].edges.length;k++) {
      if(this.nodes[j][1].edges[k] === node){
        this.nodes[j][1].edges.splice(k,1);
      }
    }
  }

};

Graph.prototype.getEdge = function(fromNode, toNode){
  //graph.getEdge('kittens','puppies');
  var i,k;
  var fromNodeEdges = [];

  //find current edges of fromNode
  for (i=0;i<this.nodes.length;i++) {
    if (this.nodes[i][0] === fromNode) {
      for (k=0;k<this.nodes[i][1].edges.length;k++) {
        fromNodeEdges.push(this.nodes[i][1].edges[k]);
      }
    }
  }

  //are any of the found edges the same as toNode?
  for (i=0;i<fromNodeEdges.length;i++) {
    if (toNode === fromNodeEdges[i]){
      return true;
    }
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  //graph.addEdge('puppies','kittens');
  var i,k;
  //find edges array of toNode
  for (i=0;i<this.nodes.length;i++) {
    if (this.nodes[i][0] === toNode) {
      //add fromNode to toNode's edges
      this.nodes[i][1].edges.push(fromNode);
    }
  }

  //find edges array of fromNode
  for (i=0;i<this.nodes.length;i++) {
    if (this.nodes[i][0] === fromNode) {
      // add toNode to fromNode's edges
      this.nodes[i][1].edges.push(toNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // graph.removeEdge("apples", "bananas");

  // var arr = [1,2,3,4,5]
  // arr.splice(1,1)
  // [2]
  // arr
  // [1, 3, 4, 5]

  var i,k;

  //find edges array of toNode
  for (i=0;i<this.nodes.length;i++) {
    if (this.nodes[i][0] === toNode) {
      for (k=0;k<this.nodes[i][1].edges.length;k++) {
      //remove fromNode to toNode's edges
        if (this.nodes[i][1].edges[k] === fromNode) {
          this.nodes[i][1].edges.splice(k,1);
        }        
      }
    }
  }

  //find edges array of fromNode
  for (i=0;i<this.nodes.length;i++) {
    if (this.nodes[i][0] === fromNode) {
      for (k=0;k<this.nodes[i][1].edges.length;k++) {
      //remove fromNode to fromNode's edges
        if (this.nodes[i][1].edges[k] === toNode) {
          this.nodes[i][1].edges.splice(k,1);
        }        
      }
    }
  }
};

var graph = new Graph();
graph.addNode("apples");
graph.addNode("bananas");
graph.addNode("satsumas", "bananas");
graph.addEdge("satsumas", "apples");
// graph.removeEdge("apples", "bananas");





