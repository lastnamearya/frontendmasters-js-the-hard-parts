var object = {
  0: "a",
  3: "d",
  1: "b",
  2: "c"
};

var object2 = {
  a: "a",
  d: "d",
  b: "b",
  c: "c"
};

// Object.keys ~ It'll return an array with sorted keys value if they are numeric or after coercion becomes Number Data type.

console.log(Object.keys(object));

// It won't sort keys with in alphabetical order if they are string.

console.log(Object.keys(object2));
