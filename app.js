function getIntersection() {
  const argumentsArray = Array.prototype.slice.call(arguments);

  const sortedList = argumentsArray.sort(function(a, b) {
    return a.length - b.length;
  });

  const lastItem = sortedList[sortedList.length - 1];

  const intersectionArray = [];

  for (let i = 0; i < sortedList.length - 1; i++) {
    for (let j = 0; j < lastItem.length; j++) {
      if (lastItem.includes(sortedList[i][j])) {
        let counter = 0;
        for (let k = 0; k < sortedList.length - 1; k++) {
          if (
            sortedList[k].includes(sortedList[i][j]) &&
            !intersectionArray.includes(sortedList[i][j])
          ) {
            counter += 1;
            if (counter === sortedList.length - 1) {
              intersectionArray.push(sortedList[i][j]);
              counter = 0;
            }
          }
        }
      }
    }
  }

  return intersectionArray;
}

console.log(getIntersection([1, 3, 4], [12, 4, 1], [9, 5, 2, 1, 7]));

console.log(getIntersection([5, 2, 9], [12, 5, 2, 3], [20, 22, 5, 15, 2, 3]));

console.log(
  getIntersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

console.log(
  getIntersection([5, 2, 9], [12, 5, 2, 3], [20, 22, 5, 15, 2, 3], [2])
);
