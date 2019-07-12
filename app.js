// forEach ~ The typical use case is to execute side effects.

const exampleArray = [1, 2, 3, 4];

function forEach(array, callback) {
  // First We check whether the passed array is an array data type or not.

  // Array.isArray(variable) ~ will return true if passed variable is an array otherwise it'll return false.

  if (Array.isArray(array)) {
    // We'll execute a loop over array that pass every index value of array to the callback.

    for (let i = 0; i < array.length; i++) {
      // Here, i stands for index and array is the original array that we're passing. Both of these values are optional except the array[i] i.e index value of array argument.

      callback(array[i], i, array);
    }
  } // Else, we'll notify user to pass array data type.
  else {
    console.error("Please pass an array data type as an argument.");
  }
}

// Note: forEach not going to return us anything in the end, So returned value from forEach will be undefined.

forEach(exampleArray, function(n) {
  console.table(n + 2);
});
