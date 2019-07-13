// Deep copy using ~ JSON.parse(JSON.stringify())

var arrayOne = [[1], [2], [3], [4]];

// Now first time we created a deep copy of arrayOne.

var arrayTwo = JSON.parse(JSON.stringify(arrayOne));

// It'll be same as arrayOne but this time it's deep copy so it won't have reference nested object values.

console.log(arrayTwo);

// To test this, Let's push something to original array's index 3.

arrayOne[3].push(5);

// Our original arrayOne now is ~ [[1], [2], [3], [4, 5]]

console.log(arrayOne);

// Let's check arrayTwo is deep copy so nothing is going to change inside that. let's check and confirm.

// Yo, we won. It'll remain same nothing is going to change in it.

console.log(arrayTwo);
