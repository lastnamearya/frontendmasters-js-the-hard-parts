// Slice can return an Array for Array-like-Objects.

function incorrectList() {
  // Why it's important to understand "this" in JavaScript the reason is this ~ here nothing is going to happen because we called slice on Array.prototype not on this function.
  return Array.prototype.slice(arguments);
}

// It'll be an empty array because nothing is happened as forget this binding above.

var list1 = incorrectList(1, 2, 3, 4);

// empty array.

console.log(list1);

// Let's fix above 'this' keyword mistake ~ This example can be in my Blog.

// Here 'this' is not seen but it's explicity binded to the exectuion context on which slice is executed ~ arguments object.

function correctList() {
  return Array.prototype.slice.call(arguments);
}

var list2 = correctList(1, 2, 3, 4);

// Here we got ~ [1, 2, 3, 4] Array from array-like-object

console.log(list2);

// In the end we learned two things.

/*

  1. Array.prototype.slice() can give us an array for array like objects.

  2. We have to explicity bind "this" in Prototype where we're going to call ~ Array.prototype.slice.call(arguments)

*/
