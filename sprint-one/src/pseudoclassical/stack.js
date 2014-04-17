var Stack = function() {
  // Use an object with numeric keys to store values
  storage = {};
  size = 0;
};

  

Stack.prototype.push = function(value){
  //adds value to last index
  storage[size] = value;
  size++;
};

Stack.prototype.pop = function(){
  size && size--;
  var result = storage[size];
  delete storage[size];
  return result;
};

Stack.prototype.size = function(){
  return size;
};

