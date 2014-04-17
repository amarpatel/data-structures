var Queue = function() {
    storage = {};
    currentKey = 0;
    adjustedStartingIndex = 0;
    currentSize = 0;
};



Queue.prototype.enqueue = function(value){
  storage[currentKey] = value;
  currentKey++;
  currentSize++;
};

Queue.prototype.dequeue = function(){
  currentSize && currentSize--;
  var result = storage[adjustedStartingIndex];
  delete storage[adjustedStartingIndex];
  adjustedStartingIndex++;
  return result;
};

Queue.prototype.size = function(){
  return currentSize;
};