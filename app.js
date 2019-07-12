//Extension 3

// should log: [5, 15]

// function intersection(arrays) {
//   console.log(arguments.length);
//   const intersectionArray = [];
//   for (let i = 0; i < arguments.length; i++) {
//     for (let i = 0; i < arguments[i].length; i++) {
//       if (arguments[i++].includes(arguments[i][i])) {
//         intersectionArray.push(arguments[i][i]);
//       }
//     }
//   }
// }

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );

var arrayOne = [5, 10, 15, 20];

var arrayTwo = [15, 88, 1, 5, 7];

const intersectionArray = [];

for (let i = 0; i < arrayOne.length; i++) {
  console.log(i);
  if (arrayTwo.includes(arrayOne[i])) {
    intersectionArray.push(arrayOne[i]);
  }
}

console.log(intersectionArray);
