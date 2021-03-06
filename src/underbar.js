/*jshint eqnull:true, expr:true*/

var _ = {};

(

  function() {

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
  return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; insJavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    // if (n > array.length) {
      // return array;
    // };
    if (n > array.length)
      {return array}
    else {
    return n === undefined ? array[array.length - 1] : array.slice(((array.length) - n) ,array.length);
    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if (collection.length != null){
      for (var i = 0; i < collection.length; i++){
        iterator(collection[i],i,collection);}}
    else {  
      for (var i in collection){
        iterator(collection[i],i,collection);}}
   };
  
  

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
  
    var newArray = [];
    
    _.each(collection, function(item){
      if (test(item)){
        newArray.push(item);}
    });
    return newArray;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
    
     var newArray = [];
    
    _.each(collection, function(item){
      if (!test(item)){
        newArray.push(item);}
    });
    return newArray;
  };

    // var finArr = [];
    // var DontArr = _.filter(collection, test);
    // _.each(DontArr, function(item){
      // if (item in collection){
        // finArr.push(item);
        // collection.slice(_.indexOf(collection, item), (_.indexOf(collection, item)+1));}
    
    // }}
    // return r _.
      // };
   // var isEven = function(num) { return num % 2 === 0; };
  // var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
  // console.log(evens)
  // Produce a duplicate-free version of the array.
  _.uniq = function(array, sorted, iterator) {
    var uniArr = [];
    

    _.each(array, function(item){
      
      if (!(uniArr.indexOf(item) > -1)){
        uniArr.push(item);
        ;}
      });
    return uniArr;

  };

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var mArr = [];
    _.each(collection, function(item){
      mArr.push(iterator(item));
    })
    return mArr;
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Calls the method named by functionOrKey on each value in the list.
  // Note: you will nead to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
    
    // console.log(functionOrKey);
    return _.map(collection, function(item){
      if (typeof(functionOrKey) === 'function'){
        return functionOrKey.apply(item);}
      else{
        return item[functionOrKey].apply(item)
      }
    })
  }


  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  //
  // You can pass in an initialValue that is passed to the first iterator
  // call. If initialValue is not explicitly passed in, it should default to the
  // first element in the collection.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  _.reduce = function(collection, iterator, accumulator) {
    if (accumulator == undefined) {
      var accumulator = collection[0];
    }
    else {
      var accumulator = accumulator;
    }
    _.each(collection, function(obj){
      accumulator = iterator(accumulator, obj); 
          })
    return accumulator;
  };
  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    if (iterator === undefined){
      iterator = _.identity;}
    var breakFast = true;
    _.each(collection, function(item){
      if ((iterator(item) === false) || (iterator(item) === (NaN)) || (iterator(item) === undefined) || (iterator(item) === 0)){
         breakFast = false;
         return;
         }
    })
    return breakFast;
  };

   // whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // console.log(collection.length);
     if (iterator === undefined){
      iterator = _.identity;}
    for (var i in collection)
      if ((iterator(collection[i]) == true) || (typeof(iterator(collection[i])) === "string")) {
          return true;};
    return false;
      };
    // _.contains(collection, function(item){

    
    // TIP: There's a very clever way to re-use every() her
    // if _.every(collection, iterator) === true 
    // var atLeastOne = true;
    
    // if (iterator === undefined){
      // var iterator = _.identity;}
    
      
    //       // console.log(iterator(collection[0]));

    //   console.log(atLeastOne);0
    //   if (!(iterator(i) == false)){
    //     console.log('read as true')
    //     atLeastOne = true;
    //     break;  
    //   }}
    //   return atLeastOne;
    
  
    // console.log(_.some(['eege',false,false]), _. identity);

  // console.log(_.some([42432,2,1,false,true, false]));
  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    // console.log(arguments);
    for (var i = 1; i < arguments.length; i++){
      
      for (var j in arguments[i]){
          obj[j] = arguments[i][j];}
    };
    return obj;
  };
  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  

  _.defaults = function(to ,from) {
    var defaultVals = to;
    for (var i = 1; i < arguments.length; i++){
      for (var j in arguments[i]){     
          if (defaultVals[j] === undefined){

            defaultVals[j] = arguments[i][j];
          };
          }
    };
    return defaultVals;
  };
  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // _.memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  


  _.memoize = function(func) {
    // return func;
    var cache = {};
    return function(item){

    
    if ((cache[func(item)]) === undefined){
      var ans = func(item);
      var key = JSON.stringify(func(item))
      cache[key] = ans;
      return cache[func(item)];}
      
    else{
      return cache[key];
      };
    };
  
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    var argArr = [];
    
    for (var i = 2;arguments.length > i; i++){
      argArr.push(arguments[i])
    };
    
    return setInterval(function(){
      return func.apply(null, argArr);
    }, wait);
  };
  // _.delay(console.log(), 100, "123123","123123123");
  // setInterval(function () {console.log("Hello")}, 1);
  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    // console.log(array)
    var copyArr = array.slice(0);
    var newArr = [];
    
    while (!(array.length === newArr.length)){
        var spliceAt = Math.floor(Math.random() * copyArr.length);
        newArr.push((copyArr.splice(spliceAt, 1))[0]);
  }
    return newArr;
  };
  

  /**
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */


  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
      // var newAnce = String(nestedArray).replace("[", ' ');
      // console.log(newAnce);
      // newAnce.replace("]", '');
      
      // newAnce = Array.prototype.slice.call(newAnce)
      // return newAnce;
  };
    // var nestedArr = [1, [2], [3, [[[4]]]]];
    // console.log(_.flatten(nestedArr));
  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };


  /**
   * MEGA EXTRA CREDIT
   * =================
   */

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  //
  // See the Underbar readme for details.
  _.throttle = function(func, wait) {
  };

}).call(this);
