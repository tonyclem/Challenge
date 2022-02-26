// Two Dimensional Array Using for Loop

// program to create a two dimensional array
function twoDimensionArray(a, b) {
  let arr = [];

  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
    console.log(arr[i]);
  }

  // inserting elements to array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}
// declaring a variable and passing it as and argument
const x = 2;
const y = 3;
const result = twoDimensionArray(x, y);
console.log(result);
// Example 2
// let studentsData = [
//   ["Jack", 24],
//   ["Sara", 23],
// ];
// for (let i of studentsData) {
//   for (let j of i) {
//     console.log(j);
//   }
// }

let studentsData = [
  ["Jack", 24],
  ["Sara", 23],
];

// looping outer array elements
// for (let i = 0; i < studentsData.length; i++) {
// get the length of the inner array elements
//   let innerArrayLength = studentsData[i].length;
// looping inner array elements
//   for (let j = 0; j < innerArrayLength; j++) {
//     console.log(studentsData[i][j]);
//   }
// }
studentsData.forEach((student) => {
  let innerArrayLength = student;
  for (let i = 0; i < innerArrayLength.length; i++) {
    const element = innerArrayLength[i];
    console.log(element);
  }
});
