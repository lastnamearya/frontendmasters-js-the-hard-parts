// Array.prototype.slice binding on Function.prototype

// Here first we created a reference of our slice method and assigned it in a variable unboundSlice.

var unboundSlice = Array.prototype.slice;

// Now we explicity assign a property function ~ slice on the Function prototype and binded that property on the slice method that we above created a reference.

var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  // Now our arguments object is automatically binded to our slice method.
  return slice(arguments);
}

// It'll be [1, 2, 3]

console.log(list(1, 2, 3));
