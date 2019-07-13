// Shallow copy in Nested Arrays.

var numbers = [1, 2, 3];

var numbersCopy = [...numbers];

console.log(numbersCopy);

numbersCopy.push(4);

// It'll  be [1, 2, 3, 4]

console.log(numbersCopy);

// Here see one thing we pushed value to above numberCopy Array not to the numbers array so it won't share that reference with numbers

// It'll log ~ [1, 2, 3]

console.log(numbers);

// *********************************************** //

// Here things started becoming weird.

var nestedNumbers = [[1], [2]];

// Now we created a shallow copy of nestedNumbers

var nestedNumbersCopy = [...nestedNumbers];

// It'll remain same as nestedNumbers

console.log(nestedNumbersCopy);

// Now we reassigned the value of nestedNumbersCopy array ~ 0 index value

nestedNumbersCopy[0].push(300);

// Now our nestedNumbersCopy will be [ [1, 300], [2]]

console.log(nestedNumbersCopy);

// Here's the gotcha our shallow copy shares the reference of our original array from where we created this copy so we still had the exact same index reference and that also going to point nestedNumbers.

// So automatically our nestedNumbers is also going to  be update ~ It'll become [[1, 300], [2]]

// The key concept to understand is we pushed or reassigned the reference index not did something new in memory allocation. That's the gotcha.

console.log(nestedNumbers);
