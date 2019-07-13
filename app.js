// Array Intersection ~ Simple for Two Arrays.

// First Implementation.

function findIntersection(arrayOne, arrayTwo) {
  const intersectionArray = new Array();

  if (arrayOne.length > arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo.includes(arrayOne[i])) {
        intersectionArray.push(arrayOne[i]);
      }
      // No else clause here.
    }
  } else {
    for (let i = 0; i < arrayTwo.length; i++) {
      if (arrayOne.includes(arrayTwo[i])) {
        intersectionArray.push(arrayTwo[i]);
      }
    }
  }

  return intersectionArray;
}

console.log(findIntersection([1, 2, 3, 4], [1, 2, 3]));

console.log(findIntersection([5, 3, 1, 2], [1, 2, 3, 4, 5, 5, 6, 7]));
