const arrSum = [
  [2, 3, 4],
  [4, 5, 6, 5],
  [8, 9, 5, 6, 7],
];

const arrSum2 = [4, 5, 20, 40, 30, 20, 2, 4];

let result = 0;
let result2 = 0;
// for loop
// for (let i = 0; i < arrSum.length; i++) {
//   for (let j = 0; j < arrSum.length; j++) {
//     result += arrSum[i][j];
//   }
// }
// ForEach
arrSum.forEach((element) => {
  element.forEach((insideEl) => {
    result += insideEl;
  });
});

const sumUp = arrSum2.reduce((acc, val) => acc + val, 0);
result2 += sumUp;
console.log(result2);
console.log(result);
