// Shallow copy ~ Array.prototype.slice(start, end) // Remember end is not included.

// First we created an nested array that we're going to copy using slice (shallow copy)

var nestedArray = [
  { nested: { a: 1 } },
  { nested: { b: 2 } },
  { nested: { c: 3 } }
];

// Now we're going to create a shallow copy of our nestedArray.

var arrayShallowCopy = nestedArray.slice();

// Shallow copy means ~ it'll create a copy of references not the actual primitive values are copied or now new memory is allocated.

console.log(arrayShallowCopy);

// Now we update our original nestedArray's first element and that is going to be reflected in our shallo copied array.

nestedArray[0].nested = { a: 10 };

// Now if we see the first element of our shallow copied array it'll be { nested: { a: 10 }}.

console.log(arrayShallowCopy);

// Just for test ~ we updated our nestedArray's first element.

console.log(nestedArray);
