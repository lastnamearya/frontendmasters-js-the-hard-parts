// Slice in JavaScript

var animals = ["ant", "bison", "camel", "duck", "elephant"];

// It'll return ["camel", "duck", "elephant"]

console.log(animals.slice(2));

// Here index value of 4 on animals is not going to included. It's like excluded value that we explicity passed.

// It'll return ["camel", "duck"]

console.log(animals.slice(2, 4));

// It'll return elements with index from 1 to 4, see 5 is explicitly passed as not included value.

// It'll return ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(1, 5));
