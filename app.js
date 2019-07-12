// Example:-  Optional "this" argument usage in forEach.

// ********************************************************************** //

// For testing Purpose ~ If we forget to pass "this" in forEach in case of a prototype.

var sum = 0;

var count = 0;

// ********************************************************************** //

// First, We created a constructor function to generate a counter object.

function Counter() {
  this.sum = 0;
  this.count = 0;
}

// Now we're going to create an counter instance.

const obj = new Counter();

console.log(obj);

// Now we're going to create a property function on our Counter function's prototype object. That'll accept an array as a argument and add all the array items to the sum property of our counter instance & update counter instance count property to the no of times it executed.

Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;

    // Here If we didn't pass "this" keyword explicitly as an additional argument so above "this" value will reference to the global  window object and updates the global sum and count variables. That we created on top to test.
  });
};

// Testing by passing an array and calling our add property on counter instance.

obj.add([1, 2, 3, 4]);

// It'll be Counter { sum: 0, count: 0} Becasue we forget to pass "this" explicity in above forEach and it'll reference to the top above sum and count variables that are defined on our global window object.

console.log(obj);

// Global sum will be 10 and count will be 4 now.

console.log(sum);

console.log(count);
