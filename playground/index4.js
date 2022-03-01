const data = [
  {
    id: "Pro",
    title: "Once upon a Time",
    Author: "Cle Gra",
  },
  {
    id: "Project",
    title: "Time wait for no man",
    Author: "Gra wise",
  },
  {
    id: "Goal",
    title: "A Time When Struggling To grasp the Act of Code",
    Author: "W Clement Stone",
    Quote: "What the mind can conceive it can achieve",
  },
];

const dtFunction = (getId = [], getTitle = "") => {
  const searchTitle = getTitle.toLowerCase();
  return getId.filter((getT) => {
    return (
      getT.title.toLowerCase().includes(searchTitle) ||
      getT.title.toLowerCase().includes(searchTitle)
    );
  });
};

console.log(dtFunction(data, "Act"));
