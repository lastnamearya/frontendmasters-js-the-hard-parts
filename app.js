// Problem Explanation ~ How to find intersection nodes (elements) between multiple arrays.

function getIntersection() {
  // First create an array based on arguments and sort it to get the most smallest array that passed an argument so we can use that to check all the values exist in that or not first. That's the base point which is going to help us in solving this problem.

  // Array.prototype.slice(arguments) will convert an array-like-object sudo object (arguments object) into an array and return a shallow copy of arguments passed.

  const argumentsArray = Array.prototype.slice.call(arguments);

  // Now sort it in that order so we can get the length array in all the arguments passed.

  const sortedList = argumentsArray.sort(function(a, b) {
    return a.length - b.length;
  });

  // Here's our smallestArray which we're going to use to check all elementes includes this array or not first. Later we'll check for the same element if founds true in smallest array that it exists in other arrays or not.

  const smallestArray = sortedList[0];

  // first we are going to loop over all the arrays except the smallest array inside our sortedList to check if a element exist in smallestArray or not.

  // Now we created a new empty array ~ intersectinArray where we're going to push our intersected values and going to return this array as calling getIntersection function.

  const intersectionArray = new Array();

  // Why i = 1, because we ignore our smallest array and use it as parameter to check all elements exists in it or not.

  for (let i = 1; i < sortedList.length; i++) {
    // Now we execute a new loop to iterate over every element in nested array in sortedList. It'll check for particular elements if that inlcudes in our smallest array then proceed further.

    for (let j = 0; j < sortedList[i].length; j++) {
      // Now first we check if that element exists in the smallest array or not and if exist then it must not to be already included in intersectionArray.

      if (
        smallestArray.includes(sortedList[i][j]) &&
        !intersectionArray.includes(sortedList[i][j])
      ) {
        // Here we define a counter that's the main logic to find if the element exists in all nested arrays or not. THe logic is if the element is found in every nested array then we compare it witht the sortedArray length - 1. Why -1 because we're avoiding smallestArray in iteration and using includes for that for our truthy test.

        let counter = 0;

        // Now this new loop iterate over all nested arrays to check if the element exists in all the nested arrays or not and updates the counter.

        for (let k = 1; k < sortedList.length; k++) {
          // If we found the match then we update the counter.

          if (sortedList[k].includes(sortedList[i][j])) {
            counter += 1;

            // When our counter is equals to sortedList.length -1 (smallest array not iterated) then we finally push our element to our intersection array and reset the counter after that.

            if (counter === sortedList.length - 1) {
              intersectionArray.push(sortedList[i][j]);
              counter = 0;
            }
            // No, else here.
          }
          // No else here.
        }
      }
    }
  }

  return intersectionArray;
}

// It'll return [5, 15]

console.log(
  getIntersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

// It'll return [5, 15, 1]

console.log(getIntersection([5, 10, 15, 1, 20], [15, 88, 1, 5, 7, 1]));

// It'll return [5]

console.log(
  getIntersection(
    [5, 10, 15, 1, 20],
    [20, 24, 28, 25, 15, 30, 5],
    [30, 42, 26, 46, 6, 5]
  )
);
