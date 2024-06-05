// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// Returns the argument
// Accepts a single parameter as an argument
_.identity = function(x){
    return x; // Simply returns the argument
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(x){

    // if argument is of the Array prototype
    if (Array.isArray(x)){

        // tell the user that it is an array
        return "array";

    // if the argument is of the null value
    } else if (x === null){

        // tell the user that the value is of null data type
        return "null";

    // if the argument is undefined in value
    } else if (x === undefined){

        // tell the user that the value is undefined
        return "undefined";

    // otherwise, try to determine the data type
    } else {

        // tell the user the type of data that the argument is
        return typeof x;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){

    // if the array argument is not an array, or if our number is less than 0 (not an index)
    if (!(Array.isArray(array)) || num < 0){

        // return an empty array
        return [];

    // if the num argument is not a number or is undefined
    } else if (typeof num !== "number" || num === undefined){

        // try to return the first element of the array
        return array[0];
    
    // otherwise, run as normal
    } else {

        // return a slice of our array starting at 0 and ending at the num argument
        // this will give us the first (num) indices of array
        return array.slice(0, num);
    }

}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){

    // if the array argument is not an array, or if our number is less than 0 (not an index)
    if (!(Array.isArray(array)) || num < 0){
        
        // return an empty array
        return [];
    
    // if the num argument is not a number or is undefined
    } else if (typeof num !== "number" || num === undefined){

        // return the last item of the array
        return array[array.length - 1];

    // if the num argument is greater than the overall length of our array argument
    } else if (num > array.length) {

        // return a slice of our array from 0 and to our num argument
        return array.slice(0, num);
    
    // otherwise
    } else {

        // return a slice of our array starting from (num) before the end of the array, up to the end of the array
        // this should give us the last (num) index values of our array
        return array.slice(array.length - num, array.length);
    }

}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){

    // if the array argument is not an array
    if (!(Array.isArray(array))){

        // return -1 (false), because it would not have any indices
        return -1;

    // if the array argument is an array
    } else {

        // for each item of the array
        for (let i = 0; i < array.length; i++){

            // if the current element is equal to our value
            if (array[i] === value){

                // return the index where the current element (and our sought after value) is stored
                return i;

            }
        }

        // if the item cannot be found in the array, return -1 (false)
        return -1;

    }
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    
    // if no value is given, there is nothing to test
    if (value === undefined){

        // because there is nothing to test, return false
        return false;

    } else {

        // if _.indexOf provides a value greater than or equal to 0
        // then that means that the item is contained somewhere in the array, and True should be returned
        // if _.indexOf returns a value less than 0, then that means the item is not in the array and False should be returned
        return (_.indexOf(array, value) >= 0) ? true : false;

    }

}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// The _.each method is similar to the _.map method, but it does not have a return value.
    // The _.each method determines if a collection is an array or object
    // The _.each method then iterates over every item of the array/object
    // The _.each method then executes the function argument on each item of the array/object

_.each = function(collection, func){

    // if the collection is an Array
    if (Array.isArray(collection)){

        // treat the collection as an Array, and we will use a standard For Loop
        for (let i = 0; i < collection.length; i++){

            // for EACH item in the collection, do function argument
            func(collection[i], i, collection);

        }
    
    // if the collection is an Object
    } else {
        
        // treat the collection as an Object, and we will use a For In Loop
        for (var x in collection){

            // For EACH item in the collection, do function argument
            func(collection[x], x, collection);

        }
    }

}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    let localArray = [];

    // for each item in this array
    for (let i = 0; i < array.length; i++){

        // if the return value of _.indexOf(array, currentElement)
            // _.indexOf returns the first index (number)
            // _.indexOf stops when it finds the first occurrence of a word
            // if _.indexOf does not find the word anywhere, it returns -1
            // if _.indexOf does find the word, it returns the index

        // if the result from _.indexOf() matches the current index (i)
        if (_.indexOf(array, array[i]) === i){

            // then this value is unique, and should be pushed to the localArray
            localArray.push(array[i]);
        }

    }

    return localArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){

    // creates a localized array that will receive passing values
    let localArray = [];
    
    // iterating over each element of array argument
    for (let i = 0; i < array.length; i++){
        
        // if the function tested with array parameter returns true
        if(func(array[i], i, array) === true){
            // push passing element to the localArray
            localArray.push(array[i]);
          
        }
      
        // implied Else: do nothing

    }
    
    // return the localArray containing all passing values
    return localArray;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){

    let localArray = [];

    // if the array is actually an array
    if (Array.isArray(array)){

        // for each item of that array
        for (let i = 0; i < array.length; i++){

            // if the current element, when tested with the function argument, returns false
            if (func(array[i], i, array) === false){

                // push the current element that has failed the test (function argument) to an array
                localArray.push(array[i]);
            }
        }
    }

    // return an array of all elements that failed our test (function argument)
    return localArray;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    
    let localArray = [];
    
    // if the item is an array
    if (Array.isArray(array)){

        // make one array for True boolean values
        let trueArray = [];

        // make another array for False boolean values
        let falseArray = [];

        for (let i = 0; i < array.length; i++){

            // if the current element passes the test (function argument)
            if ((func(array[i], i, array)) === true){

                // push the current element to the passing array (trueArray)
                trueArray.push(array[i]);

            // if the current element does not pass the test (function argument)
            } else {

                // push the current element to the failure array (falseArray)
                falseArray.push(array[i]);
            }
        }

        // push these two arrays into a hierarchal array (localArray)
        localArray.push(trueArray, falseArray);
    }

    // return localArray, containing one array of elements that passed the test and another array of elements that failed the test
    return localArray;

}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/* The _.map function enables us to loop over a collection of data, whether it be an Array or an Object. The _.map method enables us to apply a set of code (function) to each item of a collection. It then returns an array comprising all function return values throughout the For Loop.
    1. the _.map function determines what datatype a collection is, so that it knows how to iterate over the collection
    2. the _.map function, now knowing how to iterate over each item, then iterates over every item of the collection
    3. the _.map function applies the function argument to each item of the array individually
    4. for each return value, the _.map function stores the return value to an array
    5. the _.map function then returns an array comprising all return values (from our function argument being applied to each individual item of the collection)
*/
_.map = function(collection, func){

    let localArray = [];

    // If the collection is an array
    if (Array.isArray(collection)){

        // we must use a For Loop to go over every item of the collection
        for (let i = 0; i < collection.length; i++){

            // for every item of the collection
            // push the return value of our test (func argument)
            // to the localArray
            localArray.push(func(collection[i], i, collection));

        }

    // If the collection is an object
    } else {

        // we must use a For In Loop to go over every item of the collection
        for (let key in collection){

            // for every item of the collection
            // push the return value of our test (func argument)
            // to the localArray
            localArray.push(func(collection[key], key, collection));

        }

    }

    return localArray; // returns newly modified values

}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){

    return _.map(array, function(element){
  
        // this is the function argument
        // the function is testing the first parameter, array
        
        // a for loop is occurring in _.map
        // element uses placeholder one in (func(collection[i], i, collection)) established in map
        // element is therefore equal to the current element inside of the _.map For Loop
        // if any item of the array argument (element) has its own property of prop
        if (element.hasOwnProperty(prop)){
          
            // return the value stored at the current item (in the for loop) at its property (prop)
            return element[prop];
          
        }
        //
        
    });

}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// this function accepts two arguments: a collection and a function
// 
_.every = function(collection, func){

    // if no function is given
    if (func === undefined || func === null || typeof func !== "function"){

        // if the collection is an array
        if (Array.isArray(collection)){

            // treat as an array, and use a standard For Loop
            for (let i = 0; i < collection.length; i++){

                // for every index, if the current element is equal to False when converted into a boolean
                if (Boolean(collection[i]) === false){

                    // return false
                    return false;
                }
            }

            // if all elements of the array are truthy, return true
            return true;
        
        // if the collection is an object
        } else {

            // treat as an object, and use a For In Loop
            for (var x in collection){

                // for every key, if any value is equal to False when converted into a boolean
                if (Boolean(collection[x]) === false){

                    // return false
                    return false;

                }
            }

            // if all elements of the object are truthy, return true
            return true;
        }
    }

    // if the collection is an array
    if (Array.isArray(collection)){

        // treat as an array, using a For Loop
        for (let i = 0; i < collection.length; i++){

            // if the current element, when used with the function argument, fails the test and the function returns false
            if (func(collection[i], i, collection) === false){

                // then return false and stop iterating
                return false;
            }
        }

        // if all elements of the array pass the test (function argument), return true
        return true;

    // if the collection is an object
    } else {

        // treat as an object, use a For In Loop
        for (let x in collection){

            // if the current value, when used with the function argument, fails the test and the function returns false
            if (func(collection[x], x, collection) === false){

                // the collection has failed the test and false will be returned, iterations will stop
                return false;
            }
        }
        
        // if all values of the collection are otherwise passing the test (established in function argument), return true
        return true;
    }

}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


// this function accepts two arguments: a collection and a function
// this function tests if there is an item in the collection that passes a test (from a function argument)
_.some = function(collection, func){

    // if a function argument is not provided
    if (func === undefined || func === null || typeof func !== "function"){

        // iterate over every item of the collection
        for (let i = 0; i < collection.length; i++){

            // if every item, when converted to a boolean, returns true
            if (Boolean(collection[i]) === true){

                // then return true
                return true;
            }
        }

        return false;
    }

    // if the collection is an array
    if (Array.isArray(collection)){

        // treat the collection as an array, using a For Loop for arrays
        for (let i = 0; i < collection.length; i++){

            // if the current element (collection[i]) passes the tests in the function argument, and the function returns true as a result 
            if (func(collection[i], i, collection) === true){

                // then we will return true to indicate that at least one element (collection[i]) passed the function argument test
                return true;
            }
        }
        // otherwise we return false to indicate that no elements of the collection satisfied the test (function argument)
        return false;

    } else {

        // treat the collection as an object, using a For In loop for objects
        for (var x in collection){

            // if the current element (collection[x]) passes the tests in the function argument, and the function returns true as a result 
            if (func(collection[x], x, collection) === true){

                // then we will return true to indicate that that at least one element (collection[x]) passed the function argument test
                return true;
            }
        }

        // otherwise we return false to indicate that no elements of the collection satisfied the test (function argument)
        return false;
    }

}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// _.reduce is taking three arguments: an array, a function, and a seed
_.reduce = function(array, func, seed){

    // if the seed does exist
    if (seed !== undefined && seed !== null){

        // intialize the previous result to the seed; this will eventually be equal to the final return value of the function argument
        let prevResult = seed;

        // for each item in the array argument
        for (let i = 0; i < array.length; i++){

            // the function argument is receiving prevResult (the return value of the previous function) to use for testing
            // set prevResult to the returned value of our function argument
            prevResult = func(prevResult, array[i], i);

        }
        
        // return prevResult, the final return value from our function argument
        return prevResult;

    } else {

        // if no seed exists, set the seed equal to the first item contained in the array argument; ; this will eventually be equal to the final return value of the function argument
        let prevResult = array[0];

        // because the prevResult has been set to array[0], we will start at array[1]
        for (let x = 1; x < array.length; x++){

            // the function argument is receiving prevResult (the return value of the previous function) to use for testing
            // set prevResult to the returned value of our function argument
            prevResult = func(prevResult, array[x], x);

        }       
        
        // return prevResult, the final return value from our function argument
        return prevResult;
    }
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// The ... rest operator is used so that the _.extend() can take infinite arguments
// This function is used to easily add Object key-value pairs to an Object
// This function is essentially a different version of Object.assign()
_.extend = function(objAlpha, objBravo, ...objOmega){
    
    // Using Object.assign() method to copy argument data to objAlpha
    Object.assign(objAlpha, objBravo, ...objOmega);

    // Returns objAlpha after changes
    return objAlpha;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}