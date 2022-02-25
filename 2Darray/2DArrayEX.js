function setup() {
  createCanvas(300, 300);
}

function draw() {
  //   background(51);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let y = i * 30;
      let x = j * 30;
      fill(colors[i][j]);
      stroke(0);
      fill(255);
      rect(x, y, 30, 30);
    }
  }
}

// nest array
let numberGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

// nest loop
for (let i = 0; i < numberGrid.length; i++) {
  for (let j = 0; j < numberGrid[i].length; j++) {
    console.table(numberGrid[i][j]);
  }
  console.log("<br>");
}
console.log(numberGrid);
