// Splice in JavaScript

/*
  Notes

  ** All Operations are going to happen on the original data structure **

  1. array.splice() is going to return us an empty array if we forget to pass any argument to splice and nothing is going to happen to the original array on which we invoked this property method.

  2. We can empty an array using splice by explicity passing 0 as an argument because it'll remove the first element and we didn't passed second argumetn ~ How many elements to remove, So it'll empty the whole array and return the first element in an array as a response.

  3. Be explicit about splice response, Don't store it unless you need removed items. On every inocation it's going to return us an array.
  - with argument ~ it'll return us removed items in an array.
  - with no arguments ~ it'll return us an empty array.

  4. If the return value of calling splice is an empty array. It means nothing is removed from the array on which it's executed. So the case is like either nothing removed or again nothing removed and some new elements are added.
       - array.splice(index, 0) Second argument i.e how many elements to remove from an array.
       - array.splice(index, 0, newElements).

  5. We can also add elements even without removing any element from an array like from where we want :- array.splice(index, 0, newElement) 
  - index is from we want to add new element / elements.
  - 0 is no of elements to remove that we have to pass explicity.
  - newElement / elements we want to add.

  6. We can simultaneously add and remove items from an array.

  // Splice is overall win win.

*/

// ********************************************************************** //

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

// ********************************************************************** //

// Testing my new learned skill ~ How to empty an array.

var exampleArray2 = [1, 2, 3, 4, 5];

// Now it'll empty the new array that we created just above.

exampleArray2.splice(0);

// exampleArray2 ~ is empty now.

console.log(exampleArray2);

// ********************************************************************** //

// If we explicity pass 0 as a second argument i.e no of elements to remove to 0 then nothing is going to remove in the original array and an empty array is returned as a response.

var exampleArray3 = [1, 2, 3, 4, 5, 6];

// We're starting to remove from index but removing 0 item. So nothing is going to change in the exampleArray3 and and empty value is returned as a result of calling .splice() that we can save somewhere in a memory location.

exampleArray3.splice(1, 0);

// No changes in exampleArray3. One more analogy I discover if there's no change in the original array then assume the return value is going to be an empty array. But keep in mind it's the not the only case when this happens. It'll happen also in the case when we add elements to an array using splice without removing any element.

console.log(exampleArray3);

// returned value will be an empty array

var spliceResponse = exampleArray3.splice(0, 0);

// spliceResponse ~ empty array.

console.log(spliceResponse);

// ********************************************************************** //

// Adding elements to an array without removing them.

var exampleArray4 = [1, 2, 3, 4, 10];

// Here we're only adding elements to an array without removing any element like in second argument we're passing 0 which stands for how many items to remove.

var ex4Response = exampleArray4.splice(4, 0, 5, 6, 7, 8, 9);

// exampleArray4 now is ~ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(exampleArray4);

// We're also saving returned value of calling splice where we only add elements without removing any element.

// It'll be an empty array.

console.log(ex4Response);

// ********************************************************************** //

// Normally adding elements to an array as well removing simultaneously.

var exampleArray5 = ["Jan", "Feb", "March", "Apr", "June"];

exampleArray5.splice(4, 1, "May");

// exampleArray5 ~ ["Jan", "Feb", "March", "Apr", "May"]

console.log(exampleArray5);

// ********************************************************************** //
