const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

// Problem Explanation ~ How to find intersection nodes (elements) between multiple arrays.

function getIntersection() {
  var newArr = Array.from(arguments);

  return newArr.reduce(function(accumulator, array) {
    return accumulator.filter(function(num) {
      return array.indexOf(num) !== -1;
    });
  });
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
