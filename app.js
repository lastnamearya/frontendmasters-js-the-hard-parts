// Array Intersection ~ Simple for Two Arrays.

// First Implementation.

// function findIntersection(arrayOne, arrayTwo) {
//   const intersectionArray = new Array();

//   if (arrayOne.length > arrayTwo.length) {
//     for (let i = 0; i < arrayOne.length; i++) {
//       if (arrayTwo.includes(arrayOne[i])) {
//         intersectionArray.push(arrayOne[i]);
//       }
//       // No else clause here.
//     }
//   } else {
//     for (let i = 0; i < arrayTwo.length; i++) {
//       if (arrayOne.includes(arrayTwo[i])) {
//         intersectionArray.push(arrayTwo[i]);
//       }
//     }
//   }

//   return intersectionArray;
// }

/*

  Optimize for 

  1. Remove two loops and use single loop ~ use DRY Principle.

  2. If you find one element like 5 two times then don't add into intersection array two times.

*/

function findIntersection(arrayOne, arrayTwo) {
  const intersectionArray = new Array();

  const biggerArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;

  const smallerArray = arrayOne.length < arrayTwo.length ? arrayOne : arrayTwo;

  for (let i = 0; i < biggerArray.length; i++) {
    if (
      smallerArray.includes(biggerArray[i]) &&
      !intersectionArray.includes(biggerArray[i])
    ) {
      intersectionArray.push(biggerArray[i]);
    }

    // No, else clause here.
  }

  return intersectionArray;
}

console.log(findIntersection([1, 2, 3, 4], [1, 2, 3]));

console.log(findIntersection([5, 3, 1, 2], [1, 2, 3, 4, 5, 5, 6, 7]));
