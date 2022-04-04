let countIn = 0;
const increment = document.getElementById("incrementBtn");
const decrement = document.getElementById("decrementBtn");
const count = document.getElementById("counter");
const reset = document.getElementById("resetBtn");

// count
count.innerHTML = countIn;

// increment
increment.addEventListener("click", function () {
  count.innerHTML = countIn++;
});

// decrement
decrement.addEventListener("click", function () {
  count.innerHTML = countIn--;
});

// reset
reset.addEventListener("click", function () {
  count.innerHTML = "";
});

// Exercise II
// doing the same things as other exercise
// let count = 0;
// increment.addEventListener("click", function () {
//   const countIn = document.getElementById("counter");
//   countIn.innerHTML = count;
//   count++;
// });
