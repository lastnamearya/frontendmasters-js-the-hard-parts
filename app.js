// Shallow copy using SPREAD Syntax

var obj = { foo: "foo", bar: "bar" };

var cloneObj = { ...obj };

// Shallow copy using Object.assign

var clonedObj = Object.assign({}, obj);

console.log(clonedObj);
