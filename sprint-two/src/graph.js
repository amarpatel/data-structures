var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var i;
  var nodeArray = [];

  if (!this.nodes.length){  //works!
    nodeArray.push(newNode);
    nodeArray.push({edges: []});
    this.nodes.push(nodeArray);
    nodeArray = [];
  }else if (this.nodes.length === 1) {  //works!

    //create second node
    nodeArray.push(newNode);

    //update edges of first node
      this.nodes[0][1].edges = [newNode];

    //second ==== [puppies]
    nodeArray.push({edges: [this.nodes[0][0]]});

    //add to notes
    this.nodes.push(nodeArray);
    nodeArray = [];
  } else if (!toNode) {
    nodeArray.push(newNode);
    nodeArray.push({edges: []});
    this.nodes.push(nodeArray);
    nodeArray = [];
  } else {
    //graph.addNode('birds','puppies');
    nodeArray.push(newNode);
    //find location of 'toNode'
    for (i=0;i<this.nodes.length;i++) {
      if (this.nodes[i][0] === toNode){
        //addes 'birds' to edges of 'puppies'
        this.nodes[i][1].edges.push(newNode);
      }
    }
    //add puppies to edges of birds
      //nodeArray === ['birds'] ==>   [birds, {edges: [puppies]}]
      nodeArray.push({edges: [toNode]});
    //add nodeArray to this.nodes;
    this.nodes.push(nodeArray);
    nodeArray = [];
  }
};

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
  var i, j, k;

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

  var i,k,removeFloatingNodes;
  var self = this;

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

  removeFloatingNodes = function removeFloatingNodes () {
    for (i=0;i<this.nodes.length;i++) {
      if (!this.nodes[i][1].edges.length) {
        this.nodes.splice(i,1);
        //recursive
        removeFloatingNodes.call(self);
      } else {
        return false;
      }
    }
  };
  removeFloatingNodes.call(this);
};

/*
the plan:

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
