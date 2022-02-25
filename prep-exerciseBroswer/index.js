// function createCell() {
//   const x = {};
//   const y = {};
//   const alive = Math.floor(Math.random());
// }
// function createGame() {}
// const array = [[]];
// function highOrder() {}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 10;
let rows = 10;

function setup() {
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}
