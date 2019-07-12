// Splice in JavaScript

var exampleArray = [1, 2, 3, 4, 5, 6];

// It'll remove the two elements from an array starting from index 0 i.e from first.

exampleArray.splice(0, 2);

// exampleArray ~ [3, 4, 5, 6]

console.log(exampleArray);

// We can elements to an array as well while removing, like here below it'll start removing from the first index value and will remove one element and then add three more elements later ~ 10, 10, 10 in place of removed element.

exampleArray.splice(0, 1, 10, 10, 10);

// exampleArray ~ [10, 10, 10, 4, 5, 6]

// If we by mistake forget to pass how many elements to remove or explicty didn't pass no of elements to remove after index position from where to start removing. It'll remove all the items of the array from the index position value we passed.

exampleArray.splice(1);

// exampleArray ~ [10]

console.log(exampleArray);

// using above method of explicity not passing how many elements to remove we can empty the complete array by passing starting index value 0.

exampleArray.splice(0);

// exampleArray ~ will be empty. This is the new concept I recently learned to how to empty an array.

console.log(exampleArray);
