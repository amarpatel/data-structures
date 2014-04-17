var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
    instance._storage = {};
    instance._currentKey = 0;
    instance._adjustedStartingIndex = 0;
    instance._currentSize = 0;
  // Implement the methods below
  
  return instance;
};



queueMethods = {};
queueMethods.enqueue = function(value){
  this._storage[this._currentKey] = value;
  this._currentKey++;
  this._currentSize++;
};

queueMethods.dequeue = function(){
  this._currentSize && this._currentSize--;
  var result = this._storage[this._adjustedStartingIndex];
  delete this._storage[this._adjustedStartingIndex];
  this._adjustedStartingIndex++;
  return result;
};

queueMethods.size = function(){
  return this._currentSize;
};