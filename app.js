// Sorting function arguments ~ in case of multiple arrays are passed.

function generateArgumentsArray() {
  // Step 1: First we generate an array from our arguments object using slice() ~ array-like-object

  return Array.prototype.slice.call(arguments);
}

// Now we saved the return array that contains nested array inside that which is the result of calling generateArgumentsArray function.

var argumentsListArray = generateArgumentsArray(
  [1, 2, 3, 4],
  [3, 2, 4],
  [1, 2]
);

// Now we check our argumentsListArray. It'll be ~ [[1, 2, 3, 4], [3, 2, 4], [1, 2]]

console.log(argumentsListArray);

// *************************************************** //

// Let's sort our argumentsListArray now based on length.

var sortedListArray = argumentsListArray.sort(function(a, b) {
  return a.length - b.length;
});

// Yo, we finally sorted our argumentsListArray based on the length. It'll be now ~ [[1, 2], [3, 2, 4], [1, 2, 3, 4]]

console.log(sortedListArray);
