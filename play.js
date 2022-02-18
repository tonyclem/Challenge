const func = (a, b) => {
  let nameOut = "Sunday";
  console.log(nameOut);
  function func1(name) {
    return name;
  }
  console.log(func1(nameOut));

  let cd = "love";
  function apple(c) {
    return c;
  }
  console.log(apple(cd));

  return a + b;
};

console.log(func(5, 5));
