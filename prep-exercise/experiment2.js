const aListOfObjects = [
  {
    prop1: 50,
    prop2: "Nothing",
    prop3: "hello",
    prop4: "What's up",
  },
  {
    prop1: 88,
    prop2: "Whatever",
    prop3: "world",
    prop4: "You get it",
  },
];

const sections = aListOfObjects.map(({ prop1, prop2 }) => ({
  prop1,
  prop2,
  greeting: "Welcome",
}));
console.log(sections);
