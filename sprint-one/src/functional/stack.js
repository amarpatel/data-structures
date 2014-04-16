var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    //adds value to last index
    storage[size] = value;

    //updates instance.size
    size++;
  };

  instance.pop = function(){
    //decrements size as long as size >= 1
    size && size--;

    //temp container for soon-to-be-returned value
    var result = storage[size];

    //clears last index
    delete storage[stack];

    //returns temp container
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var stack = makeStack();