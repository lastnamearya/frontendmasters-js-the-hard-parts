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

// Now we update our original nestedArray's first element and that is going to be reflected in our shallow copied array.

nestedArray[0].nested = { a: 10 };

// Now if we see the first element of our shallow copied array it'll be { nested: { a: 10 }}.

console.log(arrayShallowCopy);

// Just for test ~ we updated our nestedArray's first element.

console.log(nestedArray);

// Note: Will check later ~ nested changes on shallow copy wont' referenced.

nestedArray[1] = { nested: false };

// Our nestedArray's first element now will be ~ { nested: false }

console.log(nestedArray);

// As we changed our main original nestedArray and created a reference copy out of that so we'll also check shallow copy instance for this property.

// arrayShallowCopy ~ first element still will be { nested: { b: 2 } }. It wont' have a reference of new updated values.

console.log(arrayShallowCopy);
