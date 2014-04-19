var HashTable = function(){
  this._limit = 8;
  this._counter = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  /*
    //1
    this._storage = {
      1:  {'steve', segal'}
    }

    //2
    this._storage = {
      1: [{'steve': segal'}, {'steve','bruce'}]
    }
  */
  var dblSize;
  var self = this;
  var newValueObj = {};
  var indexReplacer = [];
  var i = getIndexBelowMaxForKey(k, this._limit);

  dblSize = function dblSize () {
    if (self._counter === (self._limit - 1)) {
      self._limit += self._limit;
    }
  };

  if (!this._storage[i]) {
    this._counter++;
    this._storage[i] = {};
    this._storage[i][k] = v;
  } else if (!Array.isArray(this._storage[i])) {
    this._counter++;
    indexReplacer.push(this._storage[i]);
    newValueObj[k] = v;
    indexReplacer.push(newValueObj);
    this._storage[i] = indexReplacer;
    newValueObj = {};
    indexReplacer = [];
    //run doublechecker fn here!
    dblSize();
  } else {
    this._counter++;
    newValueObj[k] = v;
    this._storage[i].push(newValueObj);
    newValueObj = {};
    //run doublechecker fn here!
    dblSize();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var j,key;
  if (!this._storage[i]) {
    return null;
  } else if (!Array.isArray(this._storage[i])) {
    //return
    if (!this._storage[i][k]) {
      return null;
    }
    return this._storage[i][k];
  } else {
    //traverse
    for (j=0;j<this._storage[i].length;j++) {
      for (key in this._storage[i][j]) {
        if (this._storage[i][j][key] === k) {
          return this._storage[i][j][key];
        }
      }
    }
    return null;
  }

};

HashTable.prototype.remove = function(k){
  var j, key, halfSize;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var self = this;

  halfSize = function halfSize () {
    var key, i;
    var tempHash = {};
    var tempStorage = [];



    if (((self._limit / 2) - 1) >= self._counter + 2) {

      //copy hashes from _storage into tempStorage array
      for (key in self._storage) {
        if (key !== 'each' && key !== 'set' && key !== 'get') {
          if (Array.isArray(self._storage[key])) {
            for (i=0;i<self._storage[key].length;i++) {
              tempStorage.push(self._storage[key][i]);
            }
          } else {
            tempStorage.push(self._storage[key]);
          }
        }
      }

      //remove all hashes in _storage
      for (key in self._storage) {
        if (key !== 'each' && key !== 'set' && key !== 'get') {
          delete self._storage[key];
        }
      }

      //reset counter in _storage
      self._counter = 0;
      self._limit = (self._limit / 2);

      //iterate through hashes in tempstorage and re-insert them on _storage;
      for (i=0;i<tempStorage.length;i++) {
        for (key in tempStorage[i]) {
          self.insert(key,tempStorage[i][key]);
        }
      }
    }
  };

  if (!Array.isArray(this._storage[i])) {
    //return
    this._counter--;
    delete this._storage[i];
    halfSize();
  } else {
    //traverse
    for (j=0;j<this._storage[i].length-1;j++) {
      for (key in this._storage[i][j]) {
        //check if this._storage[i] is array or obj
        if (key === k) {
          this._counter--;
          delete this._storage[i][j];
          halfSize();
          return;
        }
      }
    }
  }
};