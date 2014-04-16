var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentKey = 0;
  var adjustedStartingIndex = 0;
  var currentSize = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    //sets index to inputted value
    storage[currentKey] = value;

    //so additional values can be enqueued
    currentKey++;

    //updates instance.size
    currentSize++;
  };

  instance.dequeue = function(){
    //updates instance.size
    currentSize && currentSize--;

    //container for returned result
    var result = storage[adjustedStartingIndex];

    //clears dequeued index
    delete storage[adjustedStartingIndex];

    //updates starting index
    adjustedStartingIndex++;

    return result;
  };
  instance.size = function(){
    return currentSize;
  };
  return instance;
};

var queue = makeQueue();


var queueMethods = {};