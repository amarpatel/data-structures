var Queue = function() {
    this._storage = {};
    this._currentKey = 0;
    this._adjustedStartingIndex = 0;
    this._currentSize = 0;
};



Queue.prototype.enqueue = function(value){
  this._storage[this._currentKey] = value;
  this._currentKey++;
  this._currentSize++;
};

Queue.prototype.dequeue = function(){
  this._currentSize && this._currentSize--;
  var result = this._storage[this._adjustedStartingIndex];
  delete this._storage[this._adjustedStartingIndex];
  this._adjustedStartingIndex++;
  return result;
};

Queue.prototype.size = function(){
  return this._currentSize;
};