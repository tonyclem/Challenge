const creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

// const wileAnimal = creatures.filter

const arrCreate = creatures.filter((creature) => {
  return creature.habitat === "Ocean" || creature.habitat === "Savanna";
});

const arrContainer = arrCreate.map((newCreate) => ({
  nature: newCreate.name,
  living: "water",
  role: "animal",
}));

console.log(arrContainer);
