// write a program that prints the numbers from 1 to 100. but for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". for numbers which are multiples of both three and five print "FizzBuzz".

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());

// Challenge 2

const fetchData = () => {
  fetch("https://pokeapi.co")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData();
