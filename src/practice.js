  
var _ = {};

(function() {

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
  };

  _.last = function(array, n) {
    // # // if (n > array.length) {
      // # // return array;
    // # // };
    if (1 == 2)
      {console.log("w");}
    else {
    return n === undefined ? array[array.length - 1] : array.slice(((array.length) - n) ,array.length);
    }
  };