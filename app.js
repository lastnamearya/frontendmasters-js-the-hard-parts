// Example:-  Optional "this" argument usage in forEach.

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

    // Here we're passing "this" keyword explicitly as an additional argument so above "this" value will bind to the instance on which we're going to execute this property function. Otherwise "this" will reference to the global object.
  }, this);
};

// Testing by passing an array and calling our add property on counter instance.

obj.add([1, 2, 3, 4]);

// It'll be Counter { sum: 10, count: 4}

console.log(obj);
