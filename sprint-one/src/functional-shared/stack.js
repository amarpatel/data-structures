var makeStack = function(){
  var instance = {};
  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here
  _.extend(instance, stackMethods);
  return instance;
};

  
var stackMethods = {};

stackMethods.push = function(value){
  //adds value to last index
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

stackMethods.size = function(){
  return this._size;
};