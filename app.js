// Array.from ~ Again problem with Shallow Copy.

// We created a state Object that has nested array inside.

var state = {
  array: [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]
};

// Now we created an new array based on state's array using Array.from( ). It'll create a new shallow copy instance.

const newArray = Array.from(state.array);

// currently first element is { a: 1}

console.log(newArray[0]);

// Now we updated the first element of array inside the original state object.

state.array[0] = { a: "One" };

// It'll return ~ {a: "One"} which was previously { a: 1 }

console.log(state.array[0]);

// Now here the Problem ~ if we check our instance that we created above to see if it reflects new changes or not then we found ~ { a: 1 }. It won't reflect changes so it's a bad practice to have a state reference using Array.from().

console.log(newArray[0]);
